import React from 'react'

const Cases = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl'>
            {/* main div */}
            <div className='w-full flex flex-col gap-12 '>
                {/* heading */}
                <div className='pb-10'>
                 <h2 className="text-center text-white text-[35px] font-bold font-['Poppins'] leading-[39px]">Our recent <br /> 
 Case studies </h2>
                </div>
                {/* case-1 */}
                <div className='w-full flex border-2 border-emerald-50 rounded-xl bg-[#1d1c1c]'>
                 {/* part-1 */}
                 <div className='w-1/2 '>
                 <img src="./images/case-1.png" alt="img" />
                 </div>

                  {/* part-2 */}
                  <div className='w-1/2 p-12 '>
                    <h2 className="text-center text-white text-[29px] font-semibold font-['Poppins'] leading-10 py-10">Website Design for SCFC Canada</h2>
                    <p className="text-zinc-300 text-sm font-normal font-['Poppins'] leading-normal">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                    {/* button */}
                    <div className="w-full flex justify-end mt-24">
                    <button className="text-rose-400 text-sm font-semibold font-['Inter'] leading-[14.50px]">Read more</button>
                    </div>
                 </div>
                </div>

                  {/* case-2 */}
                  <div className='w-full flex border-2 border-emerald-50 rounded-xl bg-[#1d1c1c]'>
                 {/* part-1 */}
                 <div className='w-1/2 '>
                 <img src="./images/case-2.png" alt="img" />
                 </div>

                  {/* part-2 */}
                  <div className='w-1/2 p-12 '>
                    <h2 className="text-center text-white text-[29px] font-semibold font-['Poppins'] leading-10 py-10">Website Design for SCFC Canada</h2>
                    <p className="text-zinc-300 text-sm font-normal font-['Poppins'] leading-normal">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                     {/* button */}
                     <div className="w-full flex justify-end mt-24">
                    <button className="text-rose-400 text-sm font-semibold font-['Inter'] leading-[14.50px]">Read more</button>
                    </div>
                 </div>
                </div>

                    {/* case-3 */}
                    <div className='w-full flex border-2 border-emerald-50 rounded-xl bg-[#1d1c1c]'>
                 {/* part-1 */}
                 <div className='w-1/2 '>
                 <img src="./images/case-3.png" alt="img" />
                 </div>

                  {/* part-2 */}
                  <div className='w-1/2 p-12 '>
                    <h2 className="text-center text-white text-[29px] font-semibold font-['Poppins'] leading-10 py-10">Website Design for SCFC Canada</h2>
                    <p className="text-zinc-300 text-sm font-normal font-['Poppins'] leading-normal">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                     {/* button */}
                     <div className="w-full flex justify-end mt-24">
                    <button className="text-rose-400 text-sm font-semibold font-['Inter'] leading-[14.50px]">Read more</button>
                    </div>
                 </div>
                </div>

            </div>
        </main>
    </section>
  )
}

export default Cases