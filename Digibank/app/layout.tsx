import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Building2 } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          {/* Modern Header */}
          <header className="sticky top-0 z-40 backdrop-blur-sm bg-white/80 py-4 border-b border-gray-100">
            <div className="container mx-auto px-6 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-3">
                {/* Updated logo with modern glow effect */}
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl blur-md opacity-70"></div>
                  <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl shadow-md">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-gray-800 tracking-tight">DigiBank</h1>
                  <span className="text-[10px] text-blue-600 -mt-1 font-medium tracking-wider uppercase">Secure Banking</span>
                </div>
              </Link>

              <div className="flex items-center gap-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="default" size="sm" className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 border-0 shadow-md hover:shadow-lg transition-all duration-200">
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton 
                    afterSignOutUrl="/" 
                    appearance={{
                      elements: {
                        avatarBox: {
                          width: '40px',
                          height: '40px'
                        }
                      }
                    }}
                  />
                </SignedIn>
              </div>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1 min-h-[calc(100vh-180px)]">
            {children}
          </main>
          
          {/* Modern Footer */}
          <footer className="bg-white py-12 border-t border-gray-100">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <Link href="/" className="flex items-center gap-3 mb-6 md:mb-0">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl shadow-sm">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">DigiBank</span>
                </Link>
                <div className="flex gap-8">
                  <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-200 text-sm">About</a>
                  <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-200 text-sm">Security</a>
                  <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-200 text-sm">Support</a>
                  <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-200 text-sm">Legal</a>
                </div>
                <div className="mt-6 md:mt-0">
                  <p className="text-gray-400 text-sm">© {new Date().getFullYear()} DigiBank</p>
                </div>
              </div>
            </div>
          </footer>
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
