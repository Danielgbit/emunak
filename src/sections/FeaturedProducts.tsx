import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

function FeaturedProducts() {
  return (
<section id="products" className="py-20 px-4 text-center font-rubik">
  <h2 className="text-3xl md:text-4xl mb-4 font-semibold tracking-text text-color-t">
    Nuestras velas
  </h2>
  <p className="mt-2 text-sm md:text-base tracking-[-0.8px] text-color-t">
    Algunos de nuestros diseños más amados
  </p>

  <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
    {products.slice(0, 4).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</section>

  );
}

export default FeaturedProducts;
