import React from "react";

const CTA = () => {
  return (
    <section
      id="contacto"
      className="py-20 px-6 my-[5%] text-center text-color-t"
    >
      <h2 className="text-4xl tracking-[-0.8px] text-color-t font-semibold mb-4">¿Te gustaría probarlas?</h2>
      <p className="mb-6 ">Escríbenos y descubre el aroma perfecto para ti.</p>
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        className="inline-block bg-cards tracking-[-0.8px] px-6 py-3 rounded-full font-medium hover:bg-cards transition"
      >
        Contáctanos por WhatsApp
      </a>
    </section>
  );
};

export default CTA;
