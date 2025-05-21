"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`
    fixed w-full z-50 transition-transform duration-300
    ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
    bg-navbar font-rubik font-normal text-[#fffbd2]
  `}
    >
      <nav className="max-w-7xl mx-auto py-2 flex items-center justify-between">
        <Link href="#about" className="text-2xl font-bold text-pink-600">
          <Image
            src={logo}
            width={60}
            height={60}
            alt="logo"
            className="rounded-[50%]"
          />
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        <ul
          className={`${
            open ? "block" : "hidden"
          } md:flex md:items-center md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0`}
        >
          <li>
            <a
              href="#about"
              className="text-[16px] tracking-[-0.6px] block py-2 transition-all duration-300 ease-in-out hover:text-[#dcff5c] hover:underline"
            >
              Sobre nosotros
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              className="text-[16px] tracking-[-0.6px] block py-2 transition-all duration-300 ease-in-out hover:text-[#dcff5c] hover:underline"
            >
              Beneficios
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-[16px] tracking-[-0.6px] block py-2 transition-all duration-300 ease-in-out hover:text-[#dcff5c] hover:underline"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-[16px] tracking-[-0.6px] block py-2 transition-all duration-300 ease-in-out hover:text-[#dcff5c] hover:underline"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
