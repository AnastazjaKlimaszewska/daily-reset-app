import type { Metadata } from "next";
import "./globals.css";
import AppNavigation from "../components/AppNavigation";

export const metadata: Metadata = {
  title: "Daily Reset",
  description: "A practical reset tool for your current state.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0D1016] text-white antialiased">
        <AppNavigation />
        {children}
      </body>
    </html>
  );
}