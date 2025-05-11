'use client';

import { useState } from "react";
import Card from "../card/page";
import TransparentCard from "../transparent-card/page";
import { price1, price2 } from "@/data/dummy";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLightBulb } from "react-icons/hi";
import { faq } from "@/data/dummy";

const Pricing = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='w-full md:p-10 sm:p-3'>
      <div className='w-full flex md:flex-row items-center justify-between sm:flex-col gap-10'>
        <h2 className='first-letter:capitalize md:text-5xl sm:text-3xl font-semibold text-tertiary-1'>choose the right plan <br />for your health <br />journey</h2>
        <p className="text-secondary-5 font-medium first-letter:capitalize">accessible and reliable plans thoughtfully tailored to support your<br />unique health journey and empower you with personalized care <br />options. </p>
      </div>
      <div className='w-full my-20 grid md:grid-cols-2 sm:grid-cols-1 md:gap-10 sm:gap-60'>
        <div className="h-[100vh]">
          <Card
              className="bg-secondary-5 w-full"
          >
            <div className="w-full p-2">
                <h2 className="capitalize font-bold text-secondary-10 md:text-2xl sm:text-lg">remote monitoring</h2>
                <div className="w-full md:mt-10 sm:mt-5 border-t-2 border-secondary-6 md:py-5 sm:py-3">
                    <p className="text-tertiary-1 font-semibold">Stay connected with your health from anywhere with real-time tracking <br /> personalized health reports and expert support from the comfort of<br />your home.</p>
                </div>
                <div className=" w-full md:my-10 sm:my-5">
                    <h2 className="capitalize mb-10 text-tertiary-1 md:text-2xl sm:text-lg font-semibold">feature</h2>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                    {
                          price1.map((item, id) => (
                              <div
                                  key={id}
                              >
                                  <TransparentCard>
                                      <h2 className="font-medium shadow-2xs text-center capitalize text-secondary-5 p-2">{item}</h2>
                                  </TransparentCard>
                              </div>
                          ))
                      }
                </div>

                </div>
                <h2 className="md:text-5xl sm:text-3xl font-bold text-tertiary-1">#1,000</h2>
              
            </div>
          </Card>
        </div>
        <div className="h-[100vh] ">
          <Card
              className="bg-secondary-5 w-full"
          >
            <div className="w-full p-2">
                <h2 className="capitalize font-bold text-secondary-10 md:text-2xl sm:text-lg">other services</h2>
                <div className="w-full mt-10 border-t-2 border-secondary-6 md:py-5 sm:py-3">
                    <p className="text-tertiary-1 font-semibold">Stay connected with your health from anywhere with real-time tracking <br /> personalized health reports and expert support from the comfort of<br />your home.</p>
                </div>
                <div className=" w-full md:my-10 sm:my-5">
                    <h2 className="capitalize mb-6 text-tertiary-1 md:text-2xl sm:text-lg font-semibold">feature</h2>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                    {
                          price2.map((item, id) => (
                              <div
                                  key={id}
                              >
                                  <TransparentCard>
                                      <h2 className="font-medium shadow-2xs text-center capitalize text-secondary-5 p-2">{item}</h2>
                                  </TransparentCard>
                              </div>
                          ))
                      }
                </div>

                </div>
                <div className="flex items-center md:gap-x-10 sm:gap-x-5">
                  <Link href={'https://wa.me/2347025183434'} target="_blank">
                    <div className="bg-white rounded-full md:w-14 md:h-14 sm:w-10 sm:h-10 flex items-center justify-center p-1 cursor-pointer">
                      <Image
                        src="/whatsapp-icon.png"
                        alt="MyMedicare"
                        width={1000}
                        height={600}
                        className="w-full h-auto object-cover rounded-4xl "
                        quality={100}
                        priority
                    />
                    </div>
                  </Link>
                  <h2 className="text-tertiary-1 font-medium md:text-2xl sm:text-lg">Reach us on WhatsApp for a quick <br />reply.</h2>
                </div>
            </div>
          </Card>
        </div>  
      </div>
      <h2 className="text-tertiary-1 md:text-5xl sm:text-3xl font-bold mb-10 md:mt-0 sm:mt-60">Empower your health journey with proactive <br />tracking <span className="text-secondary-5">and reduce health risk by up to 78%</span></h2>


      <div className="md:flex sm:hidden w-full h-[100vh] relative rounded-4xl overflow-hidden p-10">
          <Image
              src="/Remote-Monitoring-Float.png"
              alt="MyMedicare"
              fill
              className="w-full h-full object-cover"
              quality={100}
              priority
          />

          {/* Full overlay with white fade at the bottom and centered text */}
          <div className="absolute inset-0 flex flex-col justify-center px-20">
              {/* <p className=" text-white z-10 mt-2 font-medium text-4xl">Get personalized health <br />recommendations tailored to <br />your needs, helping you access <br />healthcare wherever you <br />are</p> */}

              {/* White gradient fade at the bottom */}
              {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" /> */}
              <div className="w-[30%] absolute bottom-5">
                <Card
                    color="white"
                >
                    <div className="p-2">
                        <div className="flex flex-row items-center gap-3">
                            <div className="bg-tertiary-1 w-10 h-10 rounded-full flex items-center justify-center p-1">
                                <HiOutlineLightBulb size={20}/>
                            </div>
                            <h2 className="text-tertiary-1 font-medium text-lg capitalize">insights</h2>
                        </div>
                        <h2 className="first-letter:capitalize font-bold text-tertiary-1 my-3 text-2xl">remote monitoring matters</h2>
                        <p className="first-letter:capitalize font-semibold text-secondary-6 text-md mt-5">discover how staying informed about your health<br /> can lead to significant improvement by up to</p>
                        <h2 className="text-tertiary-1 text-4xl font-semibold mt-10">78%</h2>
                    </div>
                </Card>
            </div>
          </div>
      </div>

      <div className="my-16 w-full">
          <h2 className="text-tertiary-1 font-semibold capitalize md:text-4xl sm:text-2xl text-center">trusted partners with</h2>
          <div className="w-full overflow-hidden relative md:py-10 sm:py-5">
        {/* Scrolling container */}
        <div className="flex items-center w-max animate-scroll-x space-x-10">
          {[
            "/img-2.png",
            "/img-7.png",
            "/img-8.png",
            
          ]
            .concat([
              "/img-2.png",
              "/img-7.png",
              "/img-8.png",
            ],) // duplicate for seamless loop
            .concat([
              "/img-2.png",
              "/img-7.png",
              "/img-8.png",
            ]) // duplicate for seamless loop
            .concat([
              "/img-2.png",
              "/img-7.png",
              "/img-8.png",
            ]) // duplicate for seamless loop
            .map((src, index) => (
              <div key={index} className="md:w-32 md:h-20 sm:w-20 sm:h-10 relative flex-shrink-0">
                <Image src={src} alt={`Partner logo ${index}`} fill className="object-contain" />
              </div>
            ))}
        </div>
      </div>

      </div>

      <div className="w-full">
      <h2 className="md:text-4xl sm:text-2xl text-tertiary-1 font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="w-full flex items-center md:flex-row sm:flex-col mt-10 gap-x-10">
          <div className="md:w-[40%] sm:w-0">
            <Image
                src="/image-32.png"
                alt="MyMedicare"
                width={1000}
                height={600}
                className="w-full h-auto object-cover rounded-4xl "
                quality={100}
                priority
            />
          </div>
          {/* FAQ Section */}
        <div className="md:w-[60%] w-full md:space-y-4 sm:space-y-2">
          {faq.map((item, index) => (
            <div key={index} className="border-b-2 hover:bg-secondary-2 border-tertiary-1 md:p-4 sm:p-2 transition-all duration-300">
              <button
                className="w-full text-left flex justify-between items-center font-medium cursor-pointer text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {item.qst}
                <span className="ml-2">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-secondary-6 px-5 text-sm font-bold">{item.ans}</p>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
