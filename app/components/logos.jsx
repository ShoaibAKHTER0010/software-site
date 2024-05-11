import Marquee from "react-fast-marquee";
import React from 'react'

const Logos = () => {
  return (
    <section className='w-full'>
      <main className='mx-auto  py-16'>
        {/* main div */}
        <div className="w-full ">
        
          {/* first div */}
          <div className=" py-12 bg-[#1d1c1c] border-t-2 border-e-red-700 border-b-2 hover:border-rose-400">
          <Marquee direction="right">
            {/* logo one */}
           <div className="px-6"><img src="./images/logos/logo-1.png" alt="logo-1" /></div>

             {/* logo two */}
            <div  className="px-6"><img src="./images/logos/logo-2.png" alt="logo-2" /></div>

             {/* logo three */}
            <div  className="px-6"><img src="./images/logos/logo-3.png" alt="logo-3" /></div>\

                {/* user four */}
               <div  className="px-6"><img src="./images/logos/logo-4.png" alt="logo-4" /></div>

              {/* logo five */}
             <div  className="px-6"><img src="./images/logos/logo-5.png" alt="logo-5" /></div>

             {/* logo six */}
             <div  className="px-6"><img src="./images/logos/logo-6.png" alt="logo-6" /></div>

             {/* logo seven */}
             <div  className="px-6"><img src="./images/logos/logo-7.png" alt="logo-7" /></div>

             {/* logo eight */}
             <div  className="px-6"><img src="./images/logos/logo-8.png" alt="logo-8" /></div>   
          
</Marquee>

          </div>
        </div>
      </main>
    </section>
  )
}

export default Logos