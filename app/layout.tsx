import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MachineryShare | Equipment from owners near you",
  description: "Rent construction, agricultural and industrial equipment from trusted owners near you.",
  other: {
    "application-name": "MachineryShare",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
