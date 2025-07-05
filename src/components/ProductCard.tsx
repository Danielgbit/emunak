'use client';

import Products from "@/types/products";
import Image from "next/image";
import useCurrency from "@/hooks/useCurrency";

const ProductCard = ({ product }: { product: Products }) => {
  const { formatCOP } = useCurrency();

  const handleBuy = () => {
    const message = `Hola, estoy interesado en comprar la vela "${product.name}" por ${formatCOP(product.price)}.`;
    const url = `https://wa.me/573001112233?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      key={product.id}
      className="flex w-[250px] gap-3 h-auto flex-col justify-between text-color-t bg-gradient-card pb-6 rounded-xl shadow"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h3 className="tracking-text text-color-t mt-4 text-[14px] font-semibold text-center">
        {product.name}
      </h3>
      <span className="font-bold text-center">{formatCOP(product.price)} COP</span>
      <button
        onClick={handleBuy}
        className="bg-button py-1 font-semibold rounded-[100px] w-[50%] mx-auto text-2xs tracking-text"
      >
        Comprar ahora
      </button>
    </div>
  );
};

export default ProductCard;
