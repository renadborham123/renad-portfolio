import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renadborham123.github.io/renad-portfolio"),
  title: "Renad Eid Borham | AI/ML & Generative AI",
  description:
    "Computer Science student building practical AI systems across machine learning, Generative AI, RAG, LLMs, Agentic AI, backend APIs, and MLOps.",
  keywords:
    "Renad Eid Borham, AI Engineer, Machine Learning, Generative AI, LLMs, RAG, Agentic AI, MLOps, FastAPI, Python, Portfolio",
  authors: [{ name: "Renad Eid Borham" }],
  creator: "Renad Eid Borham",
  publisher: "Renad Eid Borham",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Renad Eid Borham - AI/ML & Generative AI",
    description:
      "Computer Science student building machine-learning systems, RAG applications, LLM agents, and backend platforms.",
    url: "https://renadborham123.github.io/renad-portfolio",
    siteName: "Renad Eid Borham Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renad Eid Borham - AI/ML & Generative AI",
    description:
      "AI/ML portfolio featuring Generative AI, RAG, LLM agents, backend systems, and MLOps projects.",
  },
};

export const viewport: Viewport = {
  themeColor: "#d96b9f",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
