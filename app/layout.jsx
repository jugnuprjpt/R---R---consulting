import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "R & R Hotel Management",
  description: "Created with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon-32x32.png",
    // You can also specify different sizes or formats
    // apple: '/apple-icon.png',
    // shortcut: '/shortcut-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      {/* For Apple devices */}
      <link rel="apple-touch-icon" href="/favicon-32x32.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
