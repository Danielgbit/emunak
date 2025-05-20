import Image from 'next/image'
import image1 from '../../public/images/products/vela1.png'

const productos = [
  { nombre: "Lavanda & Vainilla", imagen: image1 },
  { nombre: "Canela & Naranja", imagen: "/vela2.png" },
  { nombre: "Jazmín & Coco", imagen: "/vela3.png" },
];

function Products() {
  return (
    <section id="products" className="py-20 text-center">
        <h2 className="text-4xl mb-4 font-semibold tracking-[-0.8px] text-color-t">Nuestras velas</h2>
        <p className="mt-2 tracking-[-0.8px] text-color-t">Algunos de nuestros diseños más amados</p>
      <div className="mt-[6%] grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {productos.map((p, i) => (
          <div key={i} className="text-color-t bg-gradient-card pb-6 rounded-xl shadow">
            <Image src={p.imagen} alt={p.nombre} width={500} height={500} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="tracking-[-0.8px] text-color-t mt-4 text-xl font-light">{p.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products
