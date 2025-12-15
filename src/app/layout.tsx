import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Sriegel | Desenvolvedor Full Stack",
  description:
    "Portfolio de Rafael Sriegel - Desenvolvedor Full Stack especializado em React, Next.js, Node.js e tecnologias modernas da web.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "next.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Rafael Sriegel" }],
  openGraph: {
    title: "Rafael Sriegel | Desenvolvedor Full Stack",
    description: "Portfolio de Rafael Sriegel - Desenvolvedor Full Stack",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: "'Cairo', sans-serif", letterSpacing: '1px' }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
