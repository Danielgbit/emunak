import image from "../../public/images/hero.png";

const Hero = () => {
  return (
  <div className="flex flex-col items-center">
    <div className="relative w-full pb-[56.25%] overflow-hidden">
      <img
        src={image.src}
        className="absolute bottom-20 w-full object-cover"
        alt="Imagen con relación de aspecto 16:9"
      />
    </div>
    <div className="flex flex-col items-center justify-center gap-5 mt-5">
      <h1 className="absolute top-40 tracking-[-0.5px] text-black text-rem-4 font-bold">Emunak</h1>
      <span className="absolute top-[43%] text-black">Velas de soya 100%</span>
      <button className="tracking-[-0.5px] rounded-[30px] absolute top-80 bg-black text-white  p-5 hover:bg-white hover:text-black hover:duration-600 ease-in-out">Ver productos</button>
    </div>
  </div>
  );
};

export default Hero;
