import Card from "../card/page";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { FaMeteor } from "react-icons/fa6";
import { skipText } from "@/data/dummy";
import TransparentCard from "../transparent-card/page";
import Image from "next/image";


const About = () => {
  return (
    <div className='w-full lg:p-10 sm:p-3'>
      <div className='w-full flex md:flex-row sm:flex-col items-center'>
        <div className='lg:w-[50%] sm:w-full flex flex-col float-left'>
            <h2 className='text-6xl font-medium'>Why should you use <br />MyMedicare today?</h2>
        </div>
        <div className='lg:w-[50%] sm:w-full flex flex-col'>
            <p className='first-letter:capitalize text-secondary-7 tracking-wider mb-5 '>we put you at the forefront of our innovation and healthcare provision <br />ensuring constant reliability and affordability of the services you <br />receive</p>
            
        </div>
      </div>
      <div className='w-full grid lg:grid-cols-3 sm:grid-cols-1 gap-5 my-10'>
        <div className="">
            <Card
                className="bg-secondary-5 w-full"
            >
                <div className="w-full p-2">
                    <h2 className="capitalize font-bold text-secondary-10 text-xl">medical professionals are at your <br /> fingertips</h2>
                    <div className="mt-[30%] border-t-1 border-secondary-4 w-full">
                        <p className="text-secondary-5 font-medium  first-letter:capitalize mt-2">we connect you to qualified medical <br />professionals saving you the stress <br />of long traffic and queues before access <br />quality care </p>
                    </div>
                    <div className="bg-secondary-5 mt-8 w-16 h-16 rounded-full flex items-center justify-center p-1">
                        <LiaStethoscopeSolid size={30}/>
                    </div>
                </div>
            </Card>
        </div>
        <div className="">
            <Card
                className="bg-secondary-5 w-full relative h-full"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-4xl"
                    style={{ backgroundImage: 'url(/hospital-queue.jpg)' }}
                >
                </div>
                <div className="relative z-10">
                    <h2 className="text-xl font-bold text-white first-letter:capitalize">skip long waiting hours at <br />the hospital</h2>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 odd:bg-white odd:text-secondary-9 mt-52">
                    {
                        skipText.map((item, id) => (
                            <div
                                key={id}
                            >
                                <TransparentCard>
                                    <h2 className="font-bold capitalize text-sm text-center p-2">{item}</h2>
                                </TransparentCard>
                            </div>
                        ))
                    }
                </div>
            </Card>
        </div>
        <div className="">
            <Card
                className="bg-secondary-5 w-full"
            >
                <div className="w-full p-2">
                    <h2 className="capitalize font-bold text-secondary-10 text-xl">access quality care</h2>
                    <div className="mt-[30%] border-t-1 border-secondary-4 w-full">
                        <p className="text-secondary-5 font-medium  first-letter:capitalize mt-2">experience personal and holistic care <br />tailored to your unique need, ensuring you <br />quality healthcare you deserve </p>
                    </div>
                    <div className="flex items-center justify-between mt-24 gap-x-2">
                        <div className="bg-secondary-5 w-16 h-16 rounded-full flex items-center justify-center p-1">
                            <FaMeteor size={30} className="rotate-180"/>
                        </div>
                        <h2 className="text-xl font-bold capitalize text-secondary-10">anyplace, anywhere</h2>
                    </div>
                </div>
            </Card>
        </div>
      </div>
      <div className="w-full flex flex-col mt-20 mb-5">
        <h2 className="capitalize text-5xl font-medium text-center">smart insights, seamless access</h2>
        <p className="text-secondary-5 font-medium text-center leading-normal tracking-widest mt-10">Stay on top of your health with intuitive charts and real-time data, all in one place</p>
      </div>
      {/* Centered Image Section */}
      <div className='bg-gradient-to-br from-white to-blue-100 w-full flex justify-center items-center'>
          <div className='relative w-[80%] h-[400px] mx-auto'>
            <Image
              src="/smart-insights-png.png"
              alt="smart-insights"
              fill
              className="object-contain rounded-4xl"
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>


    </div>
  )
}

export default About
