import Image from "next/image";
import Navigation from "../nav/page";
import TransparentCard from "../transparent-card/page";
import { SiMoleculer } from "react-icons/si";
import { heroText } from "@/data/dummy";
import Card from "../card/page";
import { MdOutlineLightbulb } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image */}
      <Image
        src="/hero-section-image.png"
        alt="MyMedicare"
        className="object-cover"
        fill
        quality={100}
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      
      {/* Navigation and Hero Content */}
      <div className="relative z-10 ">
        <Navigation />
        <div className="flex md:flex-row sm:flex-col gap-y-5 p-5 h-full">
            <div className="md:w-[50%] sm:w-full flex flex-col float-left md:mt-28 sm:mt-20">
                <div className="md:w-[50%] sm:w-full">
                    <TransparentCard >
                        <div className="flex items-center justify-center md:gap-3 sm:gap-1 md:p-2 sm:p-1">
                            <SiMoleculer/>
                            <h2 className="">Personalized Solution for Daily Need</h2>
                        </div>
                    </TransparentCard>
                </div>
                <h2 className="md:text-6xl sm:text-4xl md:my-5 sm:my-2 font-bold text-white">
                    Providing Reliable <br /> and Affordable <br /> Healthcare for <br /> Africa
                </h2>
                <p className="font-bold text-white mb-5 md:text-xl sm:text-md">Get access to professional healthcare <br /> providers for a fraction of the cost with <br /> MyMedicare</p>
                <Link 
                href={'https://play.google.com/store/apps/details?id=com.mymedicare.app'} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white md:text-xl sm:text-md font-semibold rounded-4xl text-center md:p-3 sm:p-1 capitalize lg:w-[40%] sm:w-full">download the app</Link>
            </div>
            <div className="lg:w-[50%] sm:w-full">
                <div className="flex flex-col mt-[32%]">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 md:w-[70%] sm:hidden justify-end">
                        {
                            heroText.map((item, id) => (
                                <div
                                    key={id}
                                >
                                    <TransparentCard>
                                        <h2 className="text-white font-bold capitalize p-2 text-center">{item}</h2>
                                    </TransparentCard>
                                </div>
                            ))
                        }
                    </div>

                    {/* insights */}
                    <div className="w-full flex sm:hidden md:flex-row sm:flex-col gap-5 my-5">
                        <div className="w-[50%]">
                            <Card
                                color="white"
                            >
                                <div className="p-2">
                                    <div className="flex flex-row items-center gap-3">
                                        <div className="bg-primary-5 w-10 h-10 rounded-full flex items-center justify-center p-1">
                                            <MdOutlineLightbulb size={20}/>
                                        </div>
                                        <h2 className="text-tertiary-1 font-medium text-lg capitalize">insights</h2>
                                    </div>
                                    <h2 className="first-letter:capitalize font-bold text-tertiary-1 my-3 text-xl">personalized care and <br /> demand</h2>
                                    <p className="first-letter:capitalize font-semibold text-tertiary-1 mt-5 text-sm">enable remote monitoring for <br /> everyday wellness and advanced <br />health insights</p>
                                </div>
                            </Card>
                        </div>
                        <div className="w-[50%]">
                            <Card color="white" className="relative h-full">
                                <div
                                    className="absolute inset-0 bg-cover bg-center rounded-4xl"
                                    style={{ backgroundImage: 'url(/img-3.jpg)' }}
                                ></div>
                                <div className="relative p-2 z-10">
                                    <h2 className="text-2xl font-bold text-tertiary-1">10+</h2>
                                    <h2 className="capitalize font-medium text-tertiary-1">doctors</h2>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
