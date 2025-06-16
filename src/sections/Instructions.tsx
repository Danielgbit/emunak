const instructions = [
  {
    title: "Cómo encenderlas correctamente",
    description:
      "Antes de encender tu vela, corta la mecha a 5 mm. Esto evita que el fuego sea muy alto y que la vela genere humo negro.",
  },
  {
    title: "¿Cuánto tiempo dejarlas prendidas?",
    description:
      "En el primer uso, deja encendida la vela al menos 2 horas, o hasta que toda la superficie esté derretida. Esto evita que se forme un túnel.",
  },
  {
    title: "Tips para prolongar la duración",
    description:
      "Apaga la vela con una tapa o apagavelas (no soplando), mantenla alejada de corrientes de aire, y limpia la mecha antes de cada uso.",
  },
];

function Instructions() {
  return (
    <section id="instrucciones" className="bg-white py-16 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Instrucciones de Uso & Cuidado
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {instructions.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff8f5] border border-pink-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-pink-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructions;