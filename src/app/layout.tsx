import Navbar from "@/components/Navbar";
import "./globals.css"; // ✅ ¡esto es obligatorio!
import { Lato, Lora, Rubik, Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>
         <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
