import Button from "@/components/Button";
import image from "../../public/images/hero.png";

const Hero = () => {
  return (
    <div className="w-full flex relative flex-col items-center pt-20">
      <div className="w-full h-[80vh] md:h-[90vh]">
        <img
          src={image.src}
          className="object-cover w-full h-full"
          alt="Imagen con relación de aspecto 16:9"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="tracking-text text-color-t  text-[40px] md:text-h1 font-bold">
          Emunak
        </h1>
        <span className="px-10 text-light font-medium md:text-4xs font-light uppercase text-3xs tracking-[1px]">
          Velas de soya 100%
        </span>
        <a
          href="#products"
        >
          <Button text="ver productos"/>
        </a>
      </div>
    </div>
  );
};

export default Hero;
