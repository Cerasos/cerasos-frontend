import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const title = "Desenvolvimento de Software em Santa Catarina | Cerasos";
const description =
  "A Cerasos cria sistemas inteligentes sob medida, ERP, CRM, automação comercial, sites próprios e inteligência artificial integrada para empresas em Santa Catarina.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Cerasos",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Desenvolvimento de Software em Santa Catarina",
    "software sob medida em Santa Catarina",
    "automação comercial",
    "sistema gerencial",
    "ERP",
    "CRM",
    "sistema para lojas",
    "site próprio",
    "NF-e",
    "emissor de notas fiscais",
    "sistema para farmácias",
    "sistema para imobiliárias",
    "sistema para restaurantes",
    "sistema para varejistas",
    "sistema para comércio geral",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Cerasos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/screenshots/hero-suite.png",
        width: 1586,
        height: 992,
        alt: "Painel gerencial da Cerasos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/screenshots/hero-suite.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body>
        <noscript>
          {/* reveals start hidden and are shown by an observer — never trap content */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
