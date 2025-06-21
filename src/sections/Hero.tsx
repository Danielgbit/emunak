import image from "../../public/images/hero.png";

const Hero = () => {
  return (
    <div className="flex relative flex-col items-center pt-20">
      <div className="w-screen">
        <img
          src={image.src}
          className="object-cover w-full"
          alt="Imagen con relación de aspecto 16:9"
        />
      </div>
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="tracking-text text-color-t  text-xl font-bold">
          Emunak
        </h1>
        <span className="font-rubik text-color-t font-light uppercase text-4xs tracking-[1px]">
          Velas de soya 100%
        </span>
        <a
          href="#products"
          className="font-rubik uppercase rounded-[30px] text-4xs px-3 py-2 text-color-t top-80 bg-cards hover:bg-white hover:text-black transition hover:duration-800 ease-in-out"
        >
          Ver productos
        </a>
      </div>
    </div>
  );
};

export default Hero;
