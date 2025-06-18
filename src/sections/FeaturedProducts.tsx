import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

function FeaturedProducts() {
  return (
    <section id="products" className="py-20 text-center font-rubik">
        <h2 className="text-4xl mb-4 font-semibold tracking-[-0.8px] text-color-t">Nuestras velas</h2>
        <p className="mt-2 tracking-[-0.8px] text-color-t">Algunos de nuestros diseños más amados</p>
      <div className="flex flex-wrap justify-center mt-20 gap-10">
        { products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
