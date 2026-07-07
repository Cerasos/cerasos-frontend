import type { Metadata, Viewport } from "next";

import Header from "@/components/header";
import "./globals.css";

const title = "Desenvolvimento de Software em Santa Catarina | Cerasos";
const description =
  "A Cerasos cria sistemas inteligentes sob medida, ERP, CRM, automação comercial, sites próprios e inteligência artificial integrada para empresas em Santa Catarina.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Cerasos",
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
    siteName: "Cerasos",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
