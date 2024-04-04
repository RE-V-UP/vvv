import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./provider";
import { NextAuthProvider } from "./NextAuthProvider";

export const metadata: Metadata = {
  title: "Volume Up",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <QueryProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </QueryProvider>
    </NextAuthProvider>
  );
}
