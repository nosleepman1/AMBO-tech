import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMBO TECH - Solutions Digitales & IA",
  description: "Agence d'innovation digitale : Développement Web/Mobile, Intégration IA, MCP et Automatisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
