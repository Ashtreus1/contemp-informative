import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contemp Informative",
  description: "Powered by KeiruDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#1e1e1e] text-gray-200"
      >
        {children}
      </body>
    </html>
  );
}
