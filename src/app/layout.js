import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata = {
  metadataBase: new URL('https://athenacapital.com'),
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
