import image from '../../public/images/hero.png'

const beneficios = [
  "Aromas 100% naturales",
  "Hechas a mano con amor",
  "Envases reutilizables y ecológicos",
  "Ideales para regalar o meditar",
];

function Benefits() {
  return (
    <section className="flex my-[6%] mx-[3%] place-content-between">
      <div>
        <img className='w-[500px] rounded-[10px]' src={image.src} alt="imagen de vela" />
      </div>
      <div>
        <h2 className="text-4xl font-semibold text-gray-800 mb-10">
          Beneficios
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto text-lg text-gray-700">
          {beneficios.map((b, i) => (
            <li key={i} className="bg-white text-[14px] text-[#5a664a] tracking-[-0.5px] py-[4px] px-[2px] rounded-xl shadow">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
