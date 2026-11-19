import type { Metadata } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { content } from "@/content";
import "./globals.css";

const sans = Schibsted_Grotesk({ variable: "--font-schibsted", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const t = content.es.meta;

export const metadata: Metadata = {
  metadataBase: new URL("https://juanjosegl.github.io"),
  title: t.title,
  description: t.description,
  alternates: { canonical: "/", languages: { es: "/", en: "/en/" } },
  openGraph: { type: "website", url: "/", title: t.title, description: t.description, locale: "es_CO", images: "/og.png" },
  twitter: { card: "summary_large_image", images: "/og.png" },
};

// Single root layout: the English page marks itself with lang="en" on its wrapper.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
