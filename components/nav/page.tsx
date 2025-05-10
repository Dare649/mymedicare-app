'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { nav } from "@/data/dummy";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full p-8 grid md:grid-cols-3 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
        <Image
          src={'/logo-2.png'}
          alt="stonepay-admin-app"
          width={100}
          height={100}
          className="w-[60%] object-cover"
          quality={100}
          priority
        />
      <div className={`flex items-center justify-center gap-x-5 w-full text-lg ${ isScrolled ? 'text-tertiary-1': 'text-white'}`}>
          {nav.map((item, id) => (
            <Link
              href={item.path}
              key={id}
              className="capitalize font-bold"
            >
              {item.title}
            </Link>
          ))}
        </div>
      <div className="flex flex-row items-center justify-end gap-x-4">
        <h2 className="capitalize font-bold cursor-pointer text-lg hover:text-white hover:bg-primary-5 text-primary-5 border-2 rounded-4xl py-3 px-5 border-primary-5">sign in</h2>
        <button className="bg-primary-5 hover:border-2 hover:border-primary-5 cursor-pointer hover:bg-transparent hover:text-primary-5 font-semibold text-white capitalize rounded-4xl text-center p-3">
          create an account
        </button>
      </div>
    </div>
  );
};

export default Navigation;
