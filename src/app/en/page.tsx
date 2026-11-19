import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import { content } from "@/content";

const t = content.en.meta;

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  alternates: { canonical: "/en/", languages: { es: "/", en: "/en/" } },
  openGraph: { type: "website", url: "/en/", title: t.title, description: t.description, locale: "en_US", images: "/og.png" },
};

export default function Page() {
  return <Portfolio t={content.en} />;
}
