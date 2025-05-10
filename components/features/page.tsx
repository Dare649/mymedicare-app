import Card from "../card/page";
import Image from "next/image";

const Features = () => {
  return (
    <div className='w-full lg:p-10 sm:p-3'>
      <div className='w-full flex lg:flex-row sm:flex-col items-center'>
        <div className='lg:w-[50%] sm:w-full'>
            <h2 className='text-secondary-10 text-4xl font-medium'>Who is Mymedicare for?</h2>
        </div>
        <div className='lg:w-[50%] sm:w-full'>
            <p className='text-secondary-6 tracking-wider mb-5 leading-relaxed'>Mymedicare is designed to help you track and understand your<br />health to make informed decisions for a healthier lifestyle</p>
        </div>
      </div>
      <div className='w-full my-20 grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
            {/* patient */}
            <div className='w-full h-[110vh]'>
                <Card
                    className="bg-secondary-5 w-full h-full"
                >
                    <div className="w-full h-full p-8">
                        <h2 className="capitalize text-xl text-secondary-10">patient</h2>
                        <p className='text-secondary-6 tracking-wider my-5 leading-relaxed'>Access reliable health information and personalized resources <br />to help you make informed decisions about your wellbeing.</p>
                        <div className="">
                            <Image
                                src="/chat.png" // replace with your actual image
                                alt="MyMedicare"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover rounded-4xl"
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </Card>
            </div>
            {/* health provider */}
            <div className='w-full h-[110vh]'>
                <Card
                    className="bg-secondary-5 w-full h-full"
                >
                    <div className="w-full h-full p-8">
                        <h2 className="capitalize text-xl text-secondary-10">health providers</h2>
                        <p className='text-secondary-6 tracking-wider my-5 leading-relaxed'>Has Google made you more worried about your symptoms? Worry no more! Have a real time consultation with a doctor today.</p>
                        <div className="h-full">
                            <Image
                                src="/phone-call-968w.png" // replace with your actual image
                                alt="MyMedicare"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover rounded-4xl"
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </Card>
            </div>
            {/* prescription management */}
            <div className='w-full h-[110vh]'>
                <Card
                    className="bg-secondary-5 w-full h-full"
                >
                    <div className="w-full h-full p-8">
                        <h2 className="capitalize text-xl text-secondary-10">prescription management</h2>
                        <p className='text-secondary-6 tracking-wider my-5 leading-relaxed'>Has you blood pressure or blood sugar been high? We got you with our <br />special care plan.</p>
                        <div className="h-full">
                            <Image
                                src="/prescription-management-combined.png" // replace with your actual image
                                alt="MyMedicare"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover rounded-4xl"
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </Card>
            </div>
            {/* remote monitoring */}
            <div className='w-full h-[110vh]'>
                <Card
                    className="bg-secondary-5 w-full h-full"
                >
                    <div className="w-full h-full p-8">
                        <h2 className="capitalize text-xl text-secondary-10">remote monitoring</h2>
                        <p className='text-secondary-6 tracking-wider my-5 leading-relaxed'>Stay connected with healthcare professionals who monitor your <br />vital signs remotely for early detection of your health issues.</p>
                        <div className="h-full">
                            <Image
                                src="/remote-monitoring.png" // replace with your actual image
                                alt="MyMedicare"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover rounded-4xl"
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </Card>
            </div>
            
            
      </div>
      <div className="w-full h-[100vh] relative rounded-4xl overflow-hidden">
            <Image
                src="/happy-man-01.png"
                alt="MyMedicare"
                fill
                className="w-full h-full object-cover"
                quality={100}
                priority
            />

            {/* Full overlay with white fade at the bottom and centered text */}
            <div className="absolute inset-0 flex flex-col justify-center px-20">
                <p className=" text-white z-10 mt-2 font-medium text-4xl">Get personalized health <br />recommendations tailored to <br />your needs, helping you access <br />healthcare wherever you <br />are</p>

                {/* White gradient fade at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
            </div>
        </div>
        <div className="my-20 w-full">
            <h2 className="font-semibold text-4xl text-tertiary-1 text-center tracking-wide leading-relaxed">Simple steps to get to start <br />your health journey</h2>

            <div className=" w-full grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                <div>
                    <Card
                        className="bg-secondary-5 w-full"
                    >
                        <div className="w-full p-2">
                            <h2 className="capitalize font-bold text-secondary-10 text-4xl">step<span className="text-secondary-5"> 01</span></h2>
                            <div className="mt-[30%]  w-full">
                                <h2 className="text-tertiary-1 font-semibold capitalize text-2xl ">get the app</h2>
                            </div>
                            <div className="mt-10 border-t-2 border-secondary-6 w-full">
                                <p className="text-secondary-5 font-medium first-letter:capitalize mt-5">Download the MyMedicare app to instantly <br />connect with healthcare services and <br /> professionals.</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card
                        className="bg-secondary-5 w-full"
                    >
                        <div className="w-full p-2">
                            <h2 className="capitalize font-bold text-secondary-10 text-4xl">step<span className="text-secondary-5"> 02</span></h2>
                            <div className="mt-[30%]  w-full">
                                <h2 className="text-tertiary-1 font-semibold capitalize text-2xl ">personalize your health journey</h2>
                            </div>
                            <div className="mt-10 border-t-2 border-secondary-6 w-full">
                                <p className="text-secondary-5 font-medium first-letter:capitalize mt-5">Set your health goal for tailored wellness <br />experience, including appointments,  <br /> telemedicine, labs and remote monitoring.</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card
                        className="bg-secondary-5 w-full"
                    >
                        <div className="w-full p-2">
                            <h2 className="capitalize font-bold text-secondary-10 text-4xl">step<span className="text-secondary-5"> 03</span></h2>
                            <div className="mt-[30%]  w-full">
                                <h2 className="text-tertiary-1 font-semibold capitalize text-2xl ">monitor and archieve</h2>
                            </div>
                            <div className="mt-10 border-t-2 border-secondary-6 w-full">
                                <p className="text-secondary-5 font-medium first-letter:capitalize mt-5">embrace a healthier future by continuously  <br />tracking your progress, gaining insights and <br /> adapting to a new health innovation.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Features
