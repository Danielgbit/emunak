"use client";

import image from "../../public/images/benefits.png";
import Image from "next/image";
import { motion } from "motion/react";

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
      className="flex my-[10%]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="flex items-center flex-col justify-center mx-[5%]">
        <Image
          src={image}
          alt="Imagen de vela aromática"
          width={500}
          height={500}
          className="rounded-[50%] image transition-all duration-500 ease-in-out hover:-translate-y-5 hover:shadow-lg hover:shadow-[#1d3202]"
        />
      </div>
      <div className="flex items-center flex-col mx-[5%] my-[10%]">
        <h2 className="text-rem-2.5 text-4xl font-semibold text-color-t mb-10 w-[100%]">
          Beneficios
        </h2>
        <ul  className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto text-lg text-gray-700">
          {beneficios.map((b, i) => (
            <motion.li
              initial={{ x: 0, opacity: 100 }}
              whileInView={	{ opacity: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              key={i}
              className="bg-[#605c22] text-[#fffbbf] font-extralight text-[14px] tracking-[-0.6px] py-[4px] px-[10px] rounded-[20px]"
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
