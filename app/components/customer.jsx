import React from 'react'

const Customer = () => {
  return (
    <section className='w-full'>
        <main className='max-auto'>
            {/* main div */}
            <div className='w-full flex flex-col justify-center items-center'>
                {/* first div */}
                <div className=''>
                  <h2 className="text-center text-white text-[35px] font-bold font-['Poppins'] leading-[55px]">
                  Why cutomers love <br />
                  working with us
                  </h2>
                  <p className="text-center text-zinc-300 text-lg font-normal font-['Poppins'] leading-9"> <span className='inline-flex '><img src="./images/comma.png" alt="comma"/></span>
                  Without any doubt I recommend Alcaline Solutions as one <br /> of the best web design and digital marketing agencies.<br /> One of the best agencies  I’ve came across so far. Wouldn’t <br /> be hesitated to introduce their work to someone else.
                  <img src="./images/comma.png" alt="comma" className='rotate-180 inline-flex'/>
                  </p>

                </div>
                {/* second div */}
                <div className=' py-16 pl-20 md:pl-0 '>
                {/* part-1 */}
                <div className='flex gap-16 md:gap-6 flex-wrap'>
                  {/* person-1  */}
                  <div>
                    <img src="./images/clients/p-1.png" alt="p-1" />
                  </div>

                   {/* person-2  */}
                   <div><img src="./images/clients/p-2.png" alt="p-2" /></div>

                    {/* person-3 */}
                  <div><img src="./images/clients/p-1.png" alt="p-1" /></div>

                   {/* person-4  */}
                   <div><img src="./images/clients/p-4.png" alt="p-4" /></div>

                    {/* person-5 */}
                  <div><img src="./images/clients/p-5.png" alt="p-5" /></div>
                </div>
                {/* part-2 */}
              <div className='w-full flex  justify-center pt-16'>
              <div className='w-[72px] h-[72px] bg-gradient-to-bl from-rose-400 to-purple-900 rounded-full'>
                 {/* empty */}
                </div>
              </div>

                  {/* part-3 */}
                  <div className='w-full flex  justify-center pt-6'>
              <div className='w-[69px] h-[5px] bg-gradient-to-bl from-rose-400 to-purple-900'>
                 {/* empty */}
                </div>
              </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Customer