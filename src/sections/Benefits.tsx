"use client";

import image from "../../public/images/benefits.png";
import Image from "next/image";
import { motion } from "framer-motion"; // corregido import

const beneficios = [
  "Aromas 100% naturales",
  "Hechas a mano con amor",
  "Envases reutilizables y ecológicos",
  "Ideales para regalar o meditar",
];

function Benefits() {
  return (
    <motion.section
      id="benefits"
      className="flex flex-col md:flex-row items-center justify-center my-[10%] gap-10 px-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Imagen */}
      <div className="flex justify-center">
        <Image
          src={image}
          alt="Imagen de vela aromática"
          width={500}
          height={500}
          className="rounded-full w-full max-w-[300px] md:max-w-[500px] transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-lg"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col items-center md:items-start max-w-xl text-center md:text-left">
        <h2 className="text-rem-2.5 text-4xl font-semibold text-color-t tracking-text mb-8">
          Beneficios
        </h2>

        <ul className="grid gap-4 sm:grid-cols-2 text-gray-700 w-full">
          {beneficios.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-card text-other font-normal text-sm tracking-[-0.6px] py-3 px-5 rounded-[20px] shadow-sm"
            >
              {b}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default Benefits;
