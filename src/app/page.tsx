import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Benefits from "@/sections/Benefits";
import CTA from "@/sections/CTA";
import FAQ from "@/sections/FAQ";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Instructions from "@/sections/Instructions";
import Products from "@/sections/FeaturedProducts";
import Testimonials from "@/sections/Testimonials";
import FeaturedProducts from "@/sections/FeaturedProducts";

export default function Home() {
  return (
    <div className="h-full">
      {/* <Hero /> */}
      <Benefits />
      {/*<About/>
        <Testimonials/>
        <Gallery/>
        <CTA/>
        <FeaturedProducts/>
        <Instructions/>
        <FAQ/> */}
    </div>
  );
}
