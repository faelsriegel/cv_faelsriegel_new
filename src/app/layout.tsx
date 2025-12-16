import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rafael Stuepp Riegel | Engenheiro de Computação & Desenvolvedor Full Stack",
    template: "%s | Rafael Stuepp Riegel"
  },
  description:
    "Portfolio e Currículo de Rafael Stuepp Riegel - Engenheiro de Computação, Desenvolvedor Full Stack, DPO e Consultor em Segurança da Informação. Proprietário da Stuepp Riegel Company LTDA em São Bento do Sul, SC.",
  keywords: [
    "Rafael Stuepp Riegel",
    "Rafael Riegel",
    "Stuepp Riegel Company LTDA",
    "SRC LTDA",
    "srcompanytechsolutions",
    "desenvolvedor full stack",
    "engenheiro de computação",
    "computer engineer",
    "full stack developer",
    "DPO",
    "Data Protection Officer",
    "LGPD",
    "GDPR",
    "segurança da informação",
    "information security",
    "consultoria TI",
    "IT consulting",
    "react developer",
    "next.js",
    "typescript",
    "node.js",
    "portfolio",
    "currículo",
    "São Bento do Sul",
    "Santa Catarina",
    "Brasil",
  ],
  authors: [{ name: "Rafael Stuepp Riegel", url: "https://www.srcompanytechsolutions.com" }],
  creator: "Rafael Stuepp Riegel",
  publisher: "Stuepp Riegel Company LTDA",
  metadataBase: new URL("https://www.srcompanytechsolutions.com"),
  alternates: {
    canonical: "https://www.srcompanytechsolutions.com",
    languages: {
      "pt-BR": "https://www.srcompanytechsolutions.com",
      "en": "https://www.srcompanytechsolutions.com",
    },
  },
  openGraph: {
    title: "Rafael Stuepp Riegel | Engenheiro de Computação & Desenvolvedor Full Stack",
    description: "Portfolio e Currículo de Rafael Stuepp Riegel - Engenheiro de Computação, Desenvolvedor Full Stack, DPO e Consultor em Segurança da Informação.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://www.srcompanytechsolutions.com",
    siteName: "Stuepp Riegel Company LTDA",
    images: [
      {
        url: "/images/avatar.jpeg",
        width: 800,
        height: 800,
        alt: "Rafael Stuepp Riegel - Engenheiro de Computação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Stuepp Riegel | Engenheiro de Computação",
    description: "Portfolio de Rafael Stuepp Riegel - Engenheiro de Computação & Desenvolvedor Full Stack",
    images: ["/images/avatar.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "adicione-seu-codigo-google-search-console",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.srcompanytechsolutions.com/#person",
      name: "Rafael Stuepp Riegel",
      alternateName: ["Rafael Riegel", "faelsriegel"],
      jobTitle: "Engenheiro de Computação",
      description: "Engenheiro de Computação, Desenvolvedor Full Stack, DPO e Consultor em Segurança da Informação",
      url: "https://www.srcompanytechsolutions.com",
      image: "https://www.srcompanytechsolutions.com/images/avatar.jpeg",
      email: "rafaelsriegel@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/rafael-stuepp-riegel/",
        "https://github.com/faelsriegel",
        "https://replit.com/@faelsriegel",
      ],
      worksFor: {
        "@type": "Organization",
        "@id": "https://www.srcompanytechsolutions.com/#organization",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Bento do Sul",
        addressRegion: "SC",
        addressCountry: "BR",
      },
      knowsAbout: [
        "Desenvolvimento Web",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "LGPD",
        "Segurança da Informação",
        "DPO",
        "Infraestrutura de TI",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.srcompanytechsolutions.com/#organization",
      name: "Stuepp Riegel Company LTDA",
      alternateName: "SRC LTDA",
      url: "https://www.srcompanytechsolutions.com",
      logo: "https://www.srcompanytechsolutions.com/images/projects/RSR.webp",
      founder: {
        "@type": "Person",
        "@id": "https://www.srcompanytechsolutions.com/#person",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Bento do Sul",
        addressRegion: "SC",
        addressCountry: "BR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "rafaelsriegel@gmail.com",
        contactType: "customer service",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.srcompanytechsolutions.com/#website",
      url: "https://www.srcompanytechsolutions.com",
      name: "Rafael Stuepp Riegel - Portfolio",
      description: "Portfolio e Currículo de Rafael Stuepp Riegel",
      publisher: {
        "@type": "Person",
        "@id": "https://www.srcompanytechsolutions.com/#person",
      },
      inLanguage: ["pt-BR", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicons/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://www.srcompanytechsolutions.com" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Rafael Riegel" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <ParticlesBackground />
            {children}
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
