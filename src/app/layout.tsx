import type { Metadata } from "next";
import { Exo_2, Dosis } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AlyMediLink App",
  description:
    "Professional IT consulting services provider with a focus on security, cloud, and infrastructure.",
  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/logo/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/logo/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/logo/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
        />
      </head>
      <body className={`${exo2.variable} ${dosis.variable}`}>
        {children}
      </body>
    </html>
  );
}
