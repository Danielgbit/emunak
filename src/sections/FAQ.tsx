"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿De qué están hechas las velas Emunak?",
    answer:
      "Nuestras velas están hechas con cera de soya 100% natural, aceites esenciales y mechas de algodón, sin químicos ni parafina.",
  },
  {
    question: "¿Cuánto tiempo duran encendidas?",
    answer:
      "Dependiendo del tamaño, nuestras velas tienen una duración aproximada de 20 a 50 horas.",
  },
  {
    question: "¿Puedo personalizar una vela?",
    answer:
      "¡Claro! Ofrecemos opciones de personalización para regalos, eventos o detalles especiales. Escríbenos por WhatsApp para más información.",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer:
      "Sí, realizamos envíos a cualquier lugar de Colombia. El tiempo de entrega varía según la ciudad.",
  },
];

function FAQ() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 px-6 bg-[#fffaf0] text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left text-lg font-medium flex justify-between items-center"
              >
                {faq.question}
                <span className="text-pink-600 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600 transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ