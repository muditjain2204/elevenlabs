import type { Metadata } from "next";
import { Inter as FontSans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/routers/client";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Neurolab",
    template: "%s | Neurolab",
  },
  description: "Ai-powered text-to-speech and voice cloning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_cG9zc2libGUtdHJlZWZyb2ctMTkuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <TRPCReactProvider>
        <html lang="en">
          <body
            className={`${fontSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
            <Toaster/>
          </body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  );
};
