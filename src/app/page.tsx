import About from "@/sections/About";
import Benefits from "@/sections/Benefits";
import CTA from "@/sections/CTA";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <About/>
      <Testimonials/>
      <CTA/>
      <Products/>
    </div>
  );
}
