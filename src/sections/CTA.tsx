'use client'

import Button from "@/components/Button";
import { motion } from "framer-motion";
import React from "react";

const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      id="contacto"
      className="py-20 px-6 my-[10%] text-center text-color-t"
    >
      <h2 className="text-3xl md:text-4x1 tracking-text text-color-t font-semibold mb-4">
        ¿Te gustaría probarlas?
      </h2>
      <p className="mb-6 ">Escríbenos y descubre el aroma perfecto para ti.</p>
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        className="inline-block bg-cards tracking-[-0.8px] px-6 py-3 rounded-full font-medium hover:bg-cards transition"
      >
        <Button text="Contactanos por whatsapp" />
      </a>
    </motion.section>
  );
};

export default CTA;
