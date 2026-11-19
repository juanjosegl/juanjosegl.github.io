"use client";

import { useEffect, useState } from "react";
import { apis, type Content } from "@/content";

type State = { phase: "waking" | "ready" | "failed"; seconds: number };

const TIMEOUT_MS = 120_000;

// Wakes one Render API. no-cors: the APIs only allow their own frontends, but an opaque
// response still means the server answered, which is all we need to know.
// shortcut: ProjectFlow sends Cross-Origin-Resource-Policy: same-origin, so the browser rejects the
// fetch *after* the server replied. Any rejection that is not our timeout (and not offline) counts
// as awake; if the APIs ever expose a CORS-enabled health route, switch to checking res.ok.
function usePing(url: string): State {
  const [state, setState] = useState<State>({ phase: "waking", seconds: 0 });

  useEffect(() => {
    const started = Date.now();
    const elapsed = () => Math.round((Date.now() - started) / 1000);
    const tick = setInterval(() => setState((s) => (s.phase === "waking" ? { ...s, seconds: elapsed() } : s)), 1000);
    const abort = new AbortController();
    let timedOut = false;
    const timeout = setTimeout(() => {
      timedOut = true;
      abort.abort();
    }, TIMEOUT_MS);

    fetch(url, { mode: "no-cors", cache: "no-store", signal: abort.signal })
      .then(() => setState({ phase: "ready", seconds: elapsed() }))
      .catch(() => {
        if (abort.signal.aborted && !timedOut) return; // component unmounted
        const failed = timedOut || !navigator.onLine;
        setState({ phase: failed ? "failed" : "ready", seconds: elapsed() });
      })
      .finally(() => {
        clearInterval(tick);
        clearTimeout(timeout);
      });

    return () => {
      clearInterval(tick);
      clearTimeout(timeout);
      abort.abort();
    };
  }, [url]);

  return state;
}

function Row({ name, url, t }: { name: string; url: string; t: Content["status"] }) {
  const { phase, seconds } = usePing(url);
  const dot = { waking: "bg-wait dot-waking", ready: "bg-ok", failed: "bg-bad" }[phase];
  const label =
    phase === "waking"
      ? `${t.waking}… ${seconds} ${t.seconds}`
      : phase === "ready"
        ? seconds < 2
          ? t.readyNow
          : `${t.ready} ${seconds} ${t.seconds}`
        : t.failed;

  return (
    <li className="flex items-baseline justify-between gap-4 py-2.5 font-mono text-sm">
      <span className="flex items-center gap-2.5">
        <span aria-hidden className={`inline-block size-2 shrink-0 rounded-full ${dot}`} />
        {name} API
      </span>
      {/* The ticking counter is hidden from screen readers; they only hear phase changes. */}
      <span aria-hidden className={phase === "failed" ? "text-bad" : phase === "ready" ? "text-ok" : "text-muted"}>
        {label}
      </span>
      <span className="sr-only">{phase === "waking" ? t.waking : label}</span>
    </li>
  );
}

export default function ApiStatus({ t }: { t: Content["status"] }) {
  return (
    <aside aria-labelledby="status-title" className="rounded-md border border-line bg-panel p-5 sm:p-6">
      <h2 id="status-title" className="text-base font-semibold">
        {t.title}
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.note}</p>
      <ul aria-live="polite" className="mt-3 divide-y divide-line">
        {apis.map((api) => (
          <Row key={api.id} name={api.name} url={api.url} t={t} />
        ))}
      </ul>
    </aside>
  );
}
