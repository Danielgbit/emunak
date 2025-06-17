"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import clsx from "clsx";
import useScrollDirection from "@/hooks/useScrollDirection";
import NAV_LINKS from "@/lib/links";

const Navbar = () => {

  const showNavbar = useScrollDirection();


  return (
    <header className={clsx('fixed w-full text-light z-50 transition-transform duration-300', 
      {
        'translate-y-0' : showNavbar,
        '-translate-y-full' : !showNavbar
      }
    )}
    >
      <nav className="w-full py-2 px-8 flex items-center justify-between bg-navbar shadow-md">
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
          <li>{NAV_LINKS.map((item, index) => (
            <Link key={index} className="mx-5 tracking-text text-[14px]" href={item.href}>{item.label}</Link>
          ))}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
