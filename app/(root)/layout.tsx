import Topbar from "@/components/shared/Topbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muya",
  description: "A recipes website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <section className="main-container bg-white">
            <div className="w-full">{children}</div>
          </section>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
