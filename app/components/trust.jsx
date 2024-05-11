import React from 'react'

const Trust = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl py-24'>
            {/* main-div */}
            <div className="w-full flex gap-20">
                {/* first-div */}
                <div className="w-1/2">
                 {/* child */}
                 <div className='h-1 w-20 bg-gradient-to-bl from-rose-400 to-purple-900'></div>
                 <h2 className="text-zinc-300 text-[37.60px] font-normal font-['Poppins'] leading-[59.09px] py-8 ">Leading companies trust <br /> us <span className='text-zinc-300 text-[37.60px] font-bold'>to develop software</span></h2>
                 <p className="text-zinc-300 text-xl font-normal font-['Poppins'] leading-[38.68px]">We add development capacity to tech teams. Our value <br /> isn’t limited to building teams but is equally distributed <br /> across the project lifecycle. We are a custom software <br /> development company that guarantees the successful <br /> delivery of your project.</p>
                 <div className='pt-10'><img src="./images/more.png" alt="see more" /></div>

                </div>
                {/* second-div */}
                <div className="w-1/2">
                <img src="./images/trust.png" alt="img" />

                </div>
           
            </div>
        </main>
    </section>
  )
}

export default Trust