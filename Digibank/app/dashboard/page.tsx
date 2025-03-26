import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRightLeft } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className="w-full max-w-4xl p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <UserButton 
            afterSignOutUrl="/" 
            appearance={{
              elements: {
                avatarBox: {
                  width: '70px',
                  height: '70px'
                }
              }
            }}
          />
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to DigiBank</CardTitle>
            <CardDescription>What would you like to do today?</CardDescription>
          </CardHeader>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link href="/link-accounts" className="block">
            <Card className="h-full transition-all hover:shadow-lg hover:border-blue-400">
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <Building2 className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Link Accounts</h3>
                <p className="text-gray-500 text-center mb-4">Connect your external bank accounts</p>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/ach-transfer" className="block">
            <Card className="h-full transition-all hover:shadow-lg hover:border-green-400">
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <ArrowRightLeft className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">ACH Transfer</h3>
                <p className="text-gray-500 text-center mb-4">Send or receive money between accounts</p>
                <Button className="w-full">Transfer Funds</Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
} 