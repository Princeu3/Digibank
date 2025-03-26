import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DigiBank",
  description: "Secure digital banking simplified",
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <ClerkProvider
        signInForceRedirectUrl = "/dashboard"
        signUpForceRedirectUrl = "/dashboard"
      >
        <body className="bg-white">
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
