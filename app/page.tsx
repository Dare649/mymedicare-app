'use client';

import Navigation from "@/components/nav/page";
import Hero from "@/components/hero/page";




const Home = () => {
  return (
    <div className='w-full'>
      {/* navigation section */}
      <section className="w-full">
        <Navigation/>
      </section>
      {/* hero section */}
      <section className="w-full">
        <Hero/>
      </section>
    </div>
  )
}

export default Home
