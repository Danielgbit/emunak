'use client'
import { motion } from 'motion/react'

function About() {
  return (
<motion.section
  id="about"
  className="py-20 md:py-32 text-center px-4"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false, amount: 0.5 }}
>
  <h2 className="text-3xl md:text-4xl font-semibold text-color-t mb-6">
    ¿Quiénes somos?
  </h2>
  <p className="text-base md:text-lg max-w-2xl mx-auto text-color-t leading-relaxed">
    En <strong>Emunak</strong>, creemos que una vela puede ser más que luz:
    puede ser una experiencia. Diseñamos cada pieza con intención, mezclando
    aromas naturales que invitan al descanso, la inspiración y el bienestar.
  </p>
</motion.section>

  );
}

export default About;
