import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "200", "300", "400", "600", "700"], // you can choose multiple weights
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cerasos",
  description: "Empresa de soluções",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={` ${roboto.className} antialiased scroll-smooth overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
