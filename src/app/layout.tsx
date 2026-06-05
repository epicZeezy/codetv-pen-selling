import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Literata } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_PAGES === "true"
      ? "https://epiczeezy.github.io/codetv-pen-selling"
      : (process.env.NEXT_PUBLIC_SITE_URL ?? "https://codetv-pen-selling.vercel.app"),
  ),
  title: "Encode — A focus tool that happens to write",
  description:
    "One pen. One notebook. Zero tabs. The cheapest upgrade to your GPA. Handwriting improves retention — backed by research.",
  openGraph: {
    title: "Encode — A focus tool that happens to write",
    description:
      "One pen. One notebook. Zero tabs. The cheapest upgrade to your GPA.",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Encode — A focus tool that happens to write",
    description:
      "One pen. One notebook. Zero tabs. The cheapest upgrade to your GPA.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${literata.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-body">{children}</body>
    </html>
  );
}
