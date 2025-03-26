"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Shield, CreditCard, BarChart3, Building2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <div>
        {/* Hero Section with more modern styling */}
        <section className="py-20 container mx-auto px-6 relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Banking <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">Simplified</span> for You
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Secure, seamless digital banking to manage your finances with confidence.
            </p>
            <div className="flex justify-center">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="default" size="lg" className="rounded-xl px-8 py-6 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200 text-base">
                    Get Started
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button variant="default" size="lg" className="rounded-xl px-8 py-6 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200 text-base">
                    Go to Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </section>

        {/* Features Section with modern cards */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Banking</h3>
                <p className="text-gray-600">
                  Manage Link Accounts and Transfer Funds with ease.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Financial Insights</h3>
                <p className="text-gray-600">
                  Track spending and receive personalized advice.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bank-Grade Security</h3>
                <p className="text-gray-600">
                  Advanced encryption and fraud protection systems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
