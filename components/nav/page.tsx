

import Image from "next/image";
import { nav } from "@/data/dummy";

const Navigation = () => {
  return (
    <div className='w-full flex flex-row items-center justify-between p-8 fixed'>
        <div className='flex flex-row items-center gap-x-10'>
          <div className="w-[30%]">
            <Image
              src={'/logo.png'}
              alt="stonepay-admin-app"
              width={100}
              height={100}
              className="w-full h-full object-cover"
              quality={100}
              priority
            />
          </div>
          <div className="flex items-center gap-x-10 w-full text-lg">
            {
                nav.map((item, id) => (
                    <h2
                        key={id}
                        className="capitalize font-bold"
                    >
                        {item}
                    </h2>
                ))
            }
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-10">
            <h2 className="capitalize font-bold  text-lg">login</h2>
            <button className="bg-black font-semibold text-lg text-white capitalize rounded-4xl text-center py-3 px-5">try the web app</button>
        </div>
    </div>
  )
}

export default Navigation
