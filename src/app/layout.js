import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Renata Lage Psicóloga",
  description: "Atendimento psicológico online para adolescentes e adultos",
  openGraph: {
    title: "Renata Lage Psicóloga",
    description: "Atendimento psicológico online para adolescentes e adultos",
    url: "https://renatalagepsicologa.com.br",
    siteName: "Renata Lage Psicóloga",
    images: [
      {
        url: "https://renatalagepsicologa.com.br/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Renata Lage Psicóloga",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renata Lage Psicóloga",
    description: "Atendimento psicológico online para adolescentes e adultos",
    images: ["https://renatalagepsicologa.com.br/images/opengraph.png"],
  },
  alternates: {
    canonical: "https://renatalagepsicologa.com.br",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
