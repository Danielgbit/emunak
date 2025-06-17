import image from "../../public/images/hero.png";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full pb-[56.25%] overflow-hidden">
        <img
          src={image.src}
          className="absolute w-full object-cover"
          alt="Imagen con relación de aspecto 16:9"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-5">
        <h1 className="absolute top-40 tracking-[-0.8px] text-color-t  text-h1 font-bold">
          Emunak
        </h1>
        <span className="absolute top-[38%] font-rubik text-color-t font-light uppercase text-[14px] tracking-[1px]">
          Velas de soya 100%
        </span>
        <a
          href="#products"
          className="font-rubik uppercase top-[50%] rounded-[30px] text-[14px] text-color-t absolute top-80 bg-cards p-5 hover:bg-white hover:text-black transition hover:duration-800 ease-in-out"
        >
          Ver productos
        </a>
      </div>
    </div>
  );
};

export default Hero;
