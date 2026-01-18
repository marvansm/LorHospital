import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layout";
import TanstackQueryProvider from "@/provider/tanstackQueryProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lor Hospital",
  description: "Hospital website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased`}>
        <TanstackQueryProvider>
          <MainLayout>
            <main className="min-h-screen">{children}</main>
          </MainLayout>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
