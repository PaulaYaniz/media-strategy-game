import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Media Strategy — Classroom Game",
  description: "A classroom game about media strategy decisions",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
