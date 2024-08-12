
import React from 'react'

const Main = () => {
  return (
    <section className='w-full bg-[#151515]'>
        <main className='mx-auto max-w-7xl  '>
            {/* main-div */}
            <div className='w-full flex flex-col md:flex-row pl-0 md:pl-10 pt-14 md:pt-0 '>
                {/* first--div */}
                <div className='w-full justify-center md:justify-start md:w-1/2 text-white py-0 md:py-28 flex flex-col items-center md:items-start'>
                  {/* paragraph */}
                 <div className=" text-zinc-300 text-[45px] font-bold font-['Poppins'] leading-[55px] md:leading-[64px] ">
                 Great <span className="text-fuchsia-800 "> software </span>is <br />
                 built by great  <span className='text-fuchsia-800 block md:inline'>teams</span>
                 </div>
                    <p className="text-zinc-300 text-center md:text-left text-lg font-normal font-['Poppins'] leading-[30px] py-12">We help build and manage a team of world-class <br /> developers to bring your vision to life</p>
                    {/* button side */}
                    <div className=''>
                        <button className="text-zinc-300 text-sm font-semibold font-['Poppins'] leading-[14px] bg-purple-900 rounded-[5px] shadow p-5">Let’s get started!</button>
                    </div>

                </div>
                {/* second-div */}
                <div className='w-full md:w-1/2 flex justify-center items-center '>
                  <img src="./images/main-img.png" alt="img-1" />

                </div>

            </div>
        </main>
    </section>
  )
}

export default Main
