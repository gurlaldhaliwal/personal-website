import type { Metadata } from "next";
import "./globals.css";
import { fjalla } from "./utilities/fonts";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import AmongUsParticles from "@/public/Particles";

export const metadata: Metadata = {
  title: "Gurlal Dhaliwal",
  description: "personal portfolio inspired by gurj dhaliwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="w-full h-full m-0 p-0 overflow-x-hidden md:mb-20">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <body className={fjalla.className}>
          <div className="flex min-h-screen items-center justify-center text-wrap">
            <div className="fixed inset-0 z-0">
              <AmongUsParticles />
            </div>
            <div className="z-10 flex flex-col justify-center items-center mt-8">
              <Navbar />
              {children}
              <Footer/>
            </div>
          </div>
        </body>
      </html>
  );
}
