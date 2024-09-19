import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../styles/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "OMG - 오마이갓",
  description: "기독교 SNS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
