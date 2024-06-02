import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import Provider from "@/components/Provider";
import {Toaster} from 'react-hot-toast';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatDoc", 
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Provider>
        <html lang="en">
          <GoogleAnalytics GA_MEASUREMENT_ID='G-6DVKX14RW9'/>
          <body className={inter.className}>{children}<Toaster/><CookieBanner/>
          </body>
          
        </html>
      </Provider>
    </ClerkProvider>
  );
}
