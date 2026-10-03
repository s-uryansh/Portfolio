import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/components/Global/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suryansh Rohil",
  description:
    "CS undergrad at Shiv Nadar University. Building secure systems, distributed backends, and Go tooling.",
  keywords:
    "Suryansh Rohil, s-uryansh, software engineer, security researcher, Go, eBPF, TPM, portfolio",
  authors: [{ name: "Suryansh Rohil" }],
  creator: "Suryansh Rohil",
  publisher: "Suryansh Rohil",
  metadataBase: new URL("https://s-uryansh.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://s-uryansh.vercel.app",
    title: "Suryansh Rohil Portfolio",
    description:
      "Software Engineer & Security Researcher. GradGuard, CipherFault, Vanguard Linux PoC.",
    siteName: "Suryansh Rohil",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Suryansh Rohil" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryansh Rohil Portfolio",
    description:
      "Software Engineer & Security Researcher. GradGuard, CipherFault, Vanguard Linux PoC.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#080c12",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden`}
        style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}
      >
        <SmoothScroll>
          {children}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
                maxWidth: "90vw",
                background: "var(--bg-surface)",
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
              },
            }}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
