import React from 'react'

const Hire = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl py-16'>
            {/* main-div */}
            <div className="w-full flex justify-center items-center gap-52 bg-zinc-800 rounded-[20.81px] p-16">
                {/* first-div */}
                <div className='w-[70%]'>
                    <h2 className="text-zinc-300 text-4xl font-bold font-['Poppins'] leading-[57.24px]">Hire the best developers and <br /> designers around!</h2>

                </div>

                {/* second div */}
                <div className='w-[30%] '>
        <div className='px-20 py-6'><img src="./images/hire-1.png" alt="pic" /></div>
                        <button className="text-neutral-50 hover:text-neutral-400 text-lg font-bold font-['Poppins'] px-[25px] py-3.5 bg-pink-900 rounded-[5px] border border-white justify-center items-center gap-2.5 inline-flex ml-6">Hire Top Developers</button>

                        <div className='px-20 py-6 rotate-180'><img src="./images/hire-1.png" alt="pic" /></div>
                    </div>

                </div>

            
        </main>
    </section>
  )
}

export default Hire