'use client';

import Products from "@/types/products";
import Image from "next/image";

const ProductCard = ({ product }: { product: Products }) => {
  const handleBuy = () => {
    const message = `Hola, estoy interesado en comprar la vela "${product.name}" por $${product.price}.`;
    const url = `https://wa.me/573001112233?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      key={product.id}
      className="flex flex-col justify-between text-color-t bg-gradient-card pb-6 rounded-xl shadow"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h3 className="tracking-text text-color-t mt-4 text-[16px] font-normal text-center">
        {product.name}
      </h3>
      <span className="font-bold">$ {product.price}</span>
      <button
        onClick={handleBuy}
        className="bg-button py-1 rounded-[100px] w-[50%] mx-auto text-2xs tracking-text"
      >
        Comprar ahora
      </button>
    </div>
  );
};

export default ProductCard;
