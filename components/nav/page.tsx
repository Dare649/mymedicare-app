'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { nav } from "@/data/dummy";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { IoMenuSharp, IoLogOutOutline } from "react-icons/io5";
import Modal from "../modal/page";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // function to toggle menu
  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="w-full hidden md:flex">
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
          <Link
            href={'/auth/sign-in'} 
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize font-bold cursor-pointer text-lg hover:text-white hover:bg-primary-5 text-primary-5 border-2 rounded-4xl py-3 px-5 border-primary-5">sign in</Link>
          <Link 
            href={'/auth/sign-up'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-5 hover:border-2 hover:border-primary-5 cursor-pointer hover:bg-transparent hover:text-primary-5 font-semibold text-white capitalize rounded-4xl text-center p-3">
            create an account
          </Link>
        </div>
        </div>
      </div>
      <div className="w-full flex lg:hidden">
        {/* mobile view */}
      <div className="w-full lg:hidden flex">
        <div className={`w-full border-b-2 border-primary-1 px-3 py-4 fixed top-0 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
          <div className="flex items-center justify-between">
            <div className="w-[60%]">
              <Image
                src={'/logo-2.png'}
                alt="stonepay-admin-app"
                width={100}
                height={100}
                className="w-full h-full object-cover"
                quality={100}
                priority
              />
            </div>
            <div onClick={handleToggleMenu}>
              <IoMenuSharp size={30} className={`text-primary-1 font-bold ${
          isScrolled ? 'text-primary-5' : 'text-white'
        }`}/>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for mobile menu */}
      {openMenu && (
        <Modal onClose={handleToggleMenu} visible={openMenu}>
          <div className="w-full h-screen flex">
            <div className="w-full h-full  p-5 relative">
              <div className="w-[60%]">
                <Image
                  src={'/logo-2.png'}
                  alt="stonepay-admin-app"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  quality={100}
                  priority
                />
              </div>
              <div className="py-5 w-full">
                {
                  nav.map((item, id) => (
                    <Link
                      href={item.path}
                      key={id}
                      className="p-3 flex items-center gap-x-3 border-b-2 border-primary-5 cursor-pointer focus:text-primary-1 font-semibold text-primary-5 capitalize"
                      onClick={handleToggleMenu} // Close menu when clicking a link
                    >
                      <h2>{item.title}</h2>
                    </Link>
                  ))
                }

                <Link
                  href={'/auth/sign-in'} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 flex items-center gap-x-3 border-b-2 border-primary-5 cursor-pointer focus:text-primary-1 font-semibold text-primary-5 capitalize">sign in</Link>
                <Link 
                  href={'/auth/sign-up'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 flex items-center gap-x-3 border-b-2 border-primary-5 cursor-pointer focus:text-primary-1 font-semibold text-primary-5 capitalize">
                  create an account
                </Link>
              </div>

              {/* <div 
                className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center"
              >
                <button onClick={handleSignout} className="bg-red-600 text-white font-bold capitalize rounded-lg p-2 flex items-center gap-x-1">
                  <span><IoLogOutOutline size={25}/></span>
                  <span>{ isLoading ? 'loading' : 'sign out'}</span>
                </button>
              </div> */}

              {/* <div className="flex flex-col items-center justify-end gap-x-4">
                <Link
                  href={'/auth/sign-in'} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capitalize font-bold cursor-pointer text-lg hover:text-white hover:bg-primary-5 text-primary-5 border-2 rounded-4xl py-3 px-5 border-primary-5">sign in</Link>
                <Link 
                  href={'/auth/sign-up'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-5 hover:border-2 hover:border-primary-5 cursor-pointer hover:bg-transparent hover:text-primary-5 font-semibold text-white capitalize rounded-4xl text-center p-3">
                  create an account
                </Link>
              </div> */}

              {/* Close icon */}
              <button
                className="absolute top-5 right-0 text-primary-5 font-bold text-2xl "
                onClick={handleToggleMenu}
              >
                <IoMdClose size={25}/>
              </button>
            </div>
          </div>
        </Modal>
      )}
      </div>
    </div>
  );
};

export default Navigation;
