import Image from "next/image";
import Navigation from "../nav/page";
import TransparentCard from "../transparent-card/page";
import { SiMoleculer } from "react-icons/si";
import { heroText } from "@/data/dummy";
import Card from "../card/page";
import { MdOutlineLightbulb } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image */}
      <Image
        src="/img-3.jpg"
        alt="stonepay-admin-app"
        fill
        className="object-cover"
        quality={100}
        priority
      />

      
      {/* Navigation and Hero Content */}
      <div className="relative z-10 ">
        <Navigation />
        <div className="flex lg:flex-row sm:flex-col gap-y-5 p-5 h-full">
            <div className="w-[50%] flex flex-col float-left mt-28">
                <div className="w-[50%]">
                    <TransparentCard >
                        <div className="flex items-center justify-center gap-3 p-2">
                            <SiMoleculer/>
                            <h2 className="">Personalized Solution for Daily Need</h2>
                        </div>
                    </TransparentCard>
                </div>
                <h2 className="text-6xl my-5 font-bold text-white">
                    Providing Reliable <br /> and Affordable <br /> Healthcare for <br /> Africa
                </h2>
                <p className="font-bold text-white mb-5 text-xl">Get access to professional healthcare <br /> providers for a fraction of the cost with <br /> MyMedicare</p>
                <button className="bg-white text-xl font-semibold rounded-4xl text-center p-3 capitalize lg:w-[40%] sm:w-full">download the app</button>
            </div>
            <div className="w-[50%]">
                <div className="flex flex-col mt-[32%]">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 lg:w-[70%] justify-end">
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
                    <div className="w-full flex md:flex-row sm:flex-col gap-5 my-5">
                        <div className="w-[50%]">
                            <Card
                                color="white"
                            >
                                <div className="p-2">
                                    <div className="flex flex-row items-center gap-3">
                                        <div className="bg-primary-1 w-10 h-10 rounded-full flex items-center justify-center p-1">
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
