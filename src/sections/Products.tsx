import Image from 'next/image'
import image1 from '../../public/images/products/vela1.png'
import image2 from '../../public/images/products/vela2.png'
import image3 from '../../public/images/products/vela3.png'

const productos = [
  { nombre: "Lavanda & Vainilla", imagen: image1 },
  { nombre: "Canela & Naranja", imagen: image2},
  { nombre: "Jazmín & Coco", imagen: image3 },
];

function Products() {
  return (
    <section id="products" className="py-20 text-center font-rubik">
        <h2 className="text-4xl mb-4 font-semibold tracking-[-0.8px] text-color-t">Nuestras velas</h2>
        <p className="mt-2 tracking-[-0.8px] text-color-t">Algunos de nuestros diseños más amados</p>
      <div className="mt-[6%] grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {productos.map((p, i) => (
          <div key={i} className="text-color-t bg-gradient-card pb-6 rounded-xl shadow">
            <Image src={p.imagen} alt={p.nombre} width={500} height={500} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="tracking-[-1px] text-color-t mt-4 text-[16px] font-light">{p.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products
