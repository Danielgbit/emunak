"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import clsx from "clsx";
import useScrollDirection from "@/hooks/useScrollDirection";
import NAV_LINKS from "@/lib/links";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const showNavbar = useScrollDirection();
  const [showMain, setShowMain] = useState(false);

  const handleToggleMenu = () => {
    setShowMain((prev) => !prev);
  };

  return (
    <header
      className={clsx(
        "fixed w-screen z-50 transition-transform duration-300",
        {
          "translate-y-0": showNavbar,
          "-translate-y-[500px]": !showNavbar,
        }
      )}
    >
      <nav className="bg-navbar py-5 px-4 flex items-center justify-between shadow-md">
        {/* Logo */}
        <Link href="#about">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Logo"
            className="rounded-full"
          />
        </Link>

        <div className="md:hidden cursor-pointer text-white" onClick={handleToggleMenu}>
          <FaBars size={24} />
        </div>

        {/* Menú de navegación */}
        <ul
          className={clsx(
            "absolute top-full left-0 md:w-[80%] flex-col bg-navbar md:bg-transparent md:static md:flex md:flex-row md:items-center md:justify-evenly md:w-auto",
            {
              "flex": showMain,
              "hidden": !showMain,
            }
          )}
        >
          {NAV_LINKS.map((item, index) => (
            <li key={index} className="text-center  md:px-3 py-3 md:py-0">
              <Link
                href={item.href}
                className="block px-4 py-2 text-links tracking-text text-4xs md:text-[14px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
