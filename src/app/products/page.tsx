// src/app/products/page.tsx
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | Emunak",
  description: "Descubre nuestras velas aromáticas artesanales más populares.",
};

const ProductsPage = () => {
  return (
    <section className="py-20 px-4 text-center font-rubik">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-4 font-semibold tracking-[-0.8px] text-color-t">
          Nuestras velas
        </h2>
        <p className="mt-2 mb-12 tracking-[-0.8px] text-color-t">
          Explora nuestros productos hechos con amor y dedicación.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
