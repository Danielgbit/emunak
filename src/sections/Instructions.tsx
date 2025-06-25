"use client";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      id="instrucciones"
      className="py-16 my-40 px-6 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-light tracking-text font-bold text-center mb-10">
          Instrucciones de Uso & Cuidado
        </h2>
        <div className="grid gap-8 md:grid-cols-3 mt-20 tracking-text">
          {instructions.map((item, index) => (
            <div
              key={index}
              className="bg-card text-light p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-other text-[15px] mt-5 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Instructions;
