"use client";
import React from "react";
import { motion } from "motion/react";

function Testimonials() {
  // Define un array de objetos para almacenar los datos de los testimonios
  const testimonialsData = [
    {
      id: 1, // Un ID único es útil para las keys de React
      quote: "Cada vela tiene una fragancia única que me relaja al instante.",
      author: "Laura G.",
    },
    {
      id: 2,
      quote: "Desde que las descubrí, no quiero usar otras velas.",
      author: "Andrés C.",
    },
    {
      id: 3,
      quote: "Mi hogar nunca había olido tan bien. ¡Son un regalo!", // Cambié el texto para que no se repita
      author: "Sofía M.", // Cambié el autor para que no se repita
    },
    // Puedes añadir más testimonios aquí
  ];

  return (
    <section className="py-[10%] px-6 text-center ">
      <h2 className="text-4xl font-semibold mb-10 text-color-t tracking-[-0.8px]">
        Lo que dicen nuestros clientes
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
        {testimonialsData.map((testimonial) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 100, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            key={testimonial.id}
            className="bg-gradient-card text-color-t p-6 tracking-[-0.8px] text-4xs  rounded-[20px] shadow max-w-sm"
          >
            “{testimonial.quote}”
            <footer className="mt-4 text-rem-1 text-color-t">
              – {testimonial.author}
            </footer>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
