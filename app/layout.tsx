import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  icons: "/app_icon_without_bg.png",
  // icons: "/newslyy-icon.svg",
  title: "Newslyy - Premium News App",
  description: "Experience global news curated with sophisticated design. Download the Newslyy app today.",
  openGraph: {
    title: "Newslyy - The News You Need, Styled for You",
    description: "Real-time global news with a premium interface. Built with Flutter.",
    type: "website",
    images: [
      {
        url: "/app_icon_without_bg.png",
        width: 1200,
        height: 630,
        alt: "Newslyy App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newslyy - Premium News App",
    description: "Experience global news curated with sophisticated design.",
    images: ["/newslyy-og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
