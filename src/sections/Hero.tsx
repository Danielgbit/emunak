import image from "../../public/images/hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center bg-red-500">
      <div className="h-[300px]">
{/*         <img
          src={image.src}
          alt="imagen de una vela de soya"
        /> */}
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1>Emunak</h1>
        <span>Velas de soya 100%</span>
        <button>Ver productos</button>
      </div>
    </div>
  );
};

export default Hero;
