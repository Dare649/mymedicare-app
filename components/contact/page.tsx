'use client';


import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { footerNav } from "@/data/dummy";
import Link from "next/link";

const Contact = () => {
  function getCopyrightYear() {
    const year = new Date().getFullYear();
    return `© ${year}`;
  }
  
  return (
    <div className="w-full lg:p-10 sm:p-3">
      <div className="w-full flex lg:flex-row sm:flex-col gap-y-10">
        <h2 className="text-tertiary-1 font-bold md:text-4xl sm:text-3xl md:w-[50%] sm:w-full">Transform your wellness journey with <br />MyMedicare , <span className="text-secondary-6">with personalized health <br /> insights and expert guidiance, available <br />anytime, anywhere.</span></h2>
        <div className="md:w-[50%] sm:w-full flex flex-col justify-center">
          <p className="text-secondary-5 leading-relaxed tracking-wider">Begin your health journey with <br /> MyMedicare today. Empower yourself <br />with control over your health, your data <br />and your wellness.</p>
          <div className="border-2 border-tertiary-1 rounded-4xl p-5 mt-5 text-tertiary-1 hover:border-0 hover:bg-tertiary-1 hover:text-white md:w-[50%] sm:w-full text-center font-semibold cursor-pointer">
            Download our app
          </div>
        </div>
      </div>
      <div className="w-full md:mt-28 sm:mt-10"> 
          <div className="flex sm:float-start md:float-none md:flex-row sm:flex-col gap-5 items-center justify-between">
            <Image
              src={'/logo-2.png'}
              alt="stonepay-admin-app"
              width={100}
              height={100}
              className="md:w-[40%] sm:w-full object-cover "
              quality={100}
              priority
            />
            <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-8 sm:gap-3">
              {
                footerNav.map((item, id) => (
                  <Link
                    key={id}
                    href={item.path}
                    className="text-tertiary-1 capitalize font-semibold"
                  >
                    {item.title}
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="w-full md:border-t-2 sm:border-t-0 border-secondary-4 p-5 my-10">
            <div className="w-full flex md:flex-row items-center justify-between sm:flex-col">
              <h2 className="text-secondary-5 text-lg font-semibold sm:mt-8 md:mt-0">
                {getCopyrightYear()} MyMedicare. All rights reserved.
              </h2>
              <div className="flex flex-row item-center gap-3 sm:mt-8 md:mt-0"> 
                <FaSquareFacebook size={30}/>
                <FaInstagram size={30}/>
                <FaLinkedin size={30}/>
                <FaWhatsappSquare size={30}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
