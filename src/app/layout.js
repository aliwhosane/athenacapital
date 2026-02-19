import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Athena Capital | Commercial Real Estate Capital Advisory",
  description: "We help owners, investors, and operators secure smart, reliable capital for commercial real estate—across the full lifecycle of a deal.",
  openGraph: {
    title: "Athena Capital | Commercial Real Estate Capital Advisory",
    description: "Independent. Strategic. Relentless in pursuit of the right capital.",
    images: [
      {
        url: '/dallas-skyline.png', // Default OG image
        width: 1200,
        height: 630,
        alt: 'Athena Capital - Dallas Skyline',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
