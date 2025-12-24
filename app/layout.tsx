import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paulo Dalmas - Senior Software Engineer | Cybersecurity & Systems",
  description: "Senior Software Engineer with 15+ years building mission-critical systems, cloud-native architectures, and security-first solutions. Focused on Cybersecurity, Offensive Security, and Digital Defense.",
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
