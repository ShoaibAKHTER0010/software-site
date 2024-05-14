import Marquee from "react-fast-marquee";
import React from 'react'

const Feature = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl py-16'>
            {/* main div */}
            <div className='w-full'>
              
               {/* heading-sec */}
               <div className='py-12 w-full flex flex-col justify-center items-center'>
                    {/* empty */}
                    <div className="w-[120px] h-[5px] bg-gradient-to-bl from-rose-400 to-purple-900"></div>
                    <h2 className=" py-6 text-center text-zinc-300 text-[35px] font-bold font-['Poppins'] leading-[55px]"><span className="text-zinc-300 text-4xl font-normal ">Featured </span> <br />
                    Resources</h2>
                </div>

                 {/* first div */}
          <div className=" py-12 ">
          <Marquee direction="right">

            {/* logo one */}
           <div className="px-6"><img src="./images/features/res-1.png" alt="res-1" />
           <p className=" text-slate-100 text-sm font-medium font-['Poppins'] leading-normal py-4">How to Build a Scalable <br /> Application up to 1 Million Users <br /> on AWS</p>
            {/* button */}
            <div className="w-full flex justify-end pt-2">
                    <button className="text-purple-900 hover:text-rose-400 text-sm font-semibold font-['Inter'] leading-[14.50px]">Read more</button>
                    </div>
                    </div>

             {/* logo two */}
            <div  className="px-6"><img src="./images/features/res-2.png" alt="res-2" />
            <p className=" text-slate-100 text-sm font-medium font-['Poppins'] leading-normal py-4">How to Build a Scalable <br /> Application up to 1 Million Users <br /> on AWS</p>
            {/* button */}
            <div className="w-full flex justify-end pt-2">
                    <button className="text-purple-900 hover:text-rose-400 text-sm font-semibold font-['Inter'] leading-[14.50px]">Read more</button>
                    </div>
            </div>

             {/* logo three */}
            <div  className="px-6"><img src="./images/features/res-3.png" alt="res-3" />
            <p className=" text-slate-100 text-sm font-medium font-['Poppins'] leading-normal py-4">How to Build a Scalable <br /> Application up to 1 Million Users <br /> on AWS</p>
            {/* button */}
            <div className="w-full flex justify-end pt-2">
                    <button className="text-purple-900 hover:text-rose-400 text-sm font-semibold font-['Inter'] leading-[14.50px]">Read more</button>
                    </div>
            </div>

                {/* logo four */}
               <div  className="px-6"><img src="./images/features/res-4.png" alt="res-4" />
               <p className=" text-slate-100 text-sm font-medium font-['Poppins'] leading-normal py-4">How to Build a Scalable <br /> Application up to 1 Million Users <br /> on AWS</p>
            {/* button */}
            <div className="w-full flex justify-end pt-2">
                    <button className="text-purple-900 hover:text-rose-400 text-sm font-semibold font-['Inter'] leading-[14.50px]">Read more</button>
                    </div>
               </div>

              {/* logo five */}
             <div  className="px-6"><img src="./images/features/res-5.png" alt="res" />
             <p className=" text-slate-100 text-sm font-medium font-['Poppins'] leading-normal py-4">How to Build a Scalable <br /> Application up to 1 Million Users <br /> on AWS</p>
            {/* button */}
            <div className="w-full flex justify-end pt-2">
                    <button className="text-purple-900 hover:text-rose-400 text-sm font-semibold font-['Inter'] leading-[14.50px]">Read more</button>
                    </div>
             </div>

                
          
</Marquee>

          </div>
            </div>
        </main>
    </section>
  )
}

export default Feature