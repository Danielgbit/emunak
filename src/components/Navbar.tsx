"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import clsx from "clsx";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setLastScrollY(currentScroll);

      if (currentScroll > lastScrollY && currentScroll > 50) {
        setShowNavbar(false);
        console.log('scroll', showNavbar);
        
      }else {
        setShowNavbar(true);
        console.log('scroll', showNavbar);
        
      };
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [lastScrollY]);

  const links = [
    { href: "#about", label: "Sobre nosotros" },
    { href: "#benefits", label: "Beneficios" },
    { href: "#products", label: "Productos" },  
    { href: "#contacto", label: "Contacto" },
  ];  


  return (
    <header className={clsx('fixed w-full text-light z-50 transition-transform duration-300', 
      {
        'translate-y-0' : showNavbar,
        '-translate-y-full' : !showNavbar
      }
    )}
    >
      <nav className="max-w-7xl mx-auto py-2 px-8 flex items-center justify-between bg-navbar shadow-md">
        <Link href="#about">
          <Image
            src={logo}
            width={60}
            height={60}
            alt="logo"
            className="rounded-full"
          />
        </Link>

        <ul className="flex">
          <li>{links.map((item) => (
            <Link className="mx-5 tracking-text text-[14px]" href={item.href}>{item.label}</Link>
          ))}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
