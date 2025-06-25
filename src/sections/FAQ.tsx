"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      id="faq"
      className="py-16 px-6 text-light my-40"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-text">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 mt-20">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left text-lg font-medium flex justify-between items-center"
              >
                {faq.question}
                <span className="text-light text-lg">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 text-dark text-xxs"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FAQ;
