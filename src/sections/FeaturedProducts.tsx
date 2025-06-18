import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

function FeaturedProducts() {
  return (
    <section id="products" className="py-20 text-center font-rubik">
        <h2 className="text-4xl mb-4 font-semibold tracking-[-0.8px] text-color-t">Nuestras velas</h2>
        <p className="mt-2 tracking-[-0.8px] text-color-t">Algunos de nuestros diseños más amados</p>
      <div className="mt-[6%] max-w-[1000px] h-[950px] w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center">
        {/* PRODUCTS CARD */}
        { products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
