import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Benefits from "@/sections/Benefits";
import CTA from "@/sections/CTA";
import FAQ from "@/sections/FAQ";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Instructions from "@/sections/Instructions";
import Products from "@/sections/Products";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar/>
        <Hero />
        <Benefits />
        <About/>
        <Testimonials/>
        <CTA/>
        <Products/>
        <Instructions/>
        <FAQ/>
        <Gallery/>
      <Footer/>
    </div>
  );
}
