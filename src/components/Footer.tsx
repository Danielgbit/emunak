import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-footer text-color-t font-rubik mt-40 pt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        {/* Marca */}
        <div>
          <Image
            src={logo}
            width={90}
            height={90}
            alt="logo"
            className="rounded-[50%]"
          />
          <p className="mt-6 text-[14px] tracking-[-0.8px]">
            Velas artesanales hechas con amor en Colombia. Diseños únicos y
            aromas que transforman espacios.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-semibold mb-5 text-sm">Navegación</h4>
          <ul className="space-y-2 text-sm text-4xs">
            <li>
              <a href="#about" className="tracking-[-0.8px] hover:text-pink-600 transition">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#benefits" className="tracking-[-0.8px] hover:text-pink-600 transition">
                Beneficios
              </a>
            </li>
            <li>
              <a href="#gallery" className="tracking-[-0.8px] hover:text-pink-600 transition">
                Galería
              </a>
            </li>
            <li>
              <a href="#contacto" className="tracking-[-0.8px] hover:text-pink-600 transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-2 text-sm">Contacto</h4>
          <ul className="text-4xs space-y-2">
            <li>
              <a
                href="mailto:contacto@emunak.com"
                className="tracking-[-0.8px] hover:text-pink-600 transition"
              >
                contacto@emunak.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-[-0.8px] hover:text-pink-600 transition"
              >
                +57 300 123 4567
              </a>
            </li>
            <li className="tracking-[-0.8px]">Medellín, Colombia</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-semibold mb-2 text-sm">Síguenos</h4>
          <ul className="flex gap-4 mt-2">
            <li>
              <a
                href="https://www.instagram.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.5-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
            </li>
            {/* Agrega más redes si deseas */}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-4 text-[12px]">
        © {new Date().getFullYear()} Emunak. Todos los derechos reservados.
      </div>
    </footer>
  );
}
