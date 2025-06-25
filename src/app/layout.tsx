import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import seo from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  icons:{
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  ...seo,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.className}`}>
      <body>
         <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
