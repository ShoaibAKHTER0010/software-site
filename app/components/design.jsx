import React from 'react'

const Design = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl flex justify-items-center flex-col py-16'>
            {/* heading */}
            <div className='w-full py-16'>
              {/* child-empty */}
              <div className="  w-[400px] h-[5px] bg-gradient-to-bl from-rose-400 to-purple-900 "></div>
              <h2 className="text-center text-white text-[35px] font-bold font-['Poppins'] leading-[55px]">
              Our design and <br />
               development approach
              </h2>
            </div>
            {/* main div */}
            <div className='w-full flex gap-10'>

            {/* first-div */}
            <div className='w-1/2 flex flex-col gap-8'>

             {/* card-one */}
             <div className='w-full flex bg-black p-10 gap-6'>
                {/* child-one */}
                <div className=''>
                    <img src="./images/design/d-1.png" alt="log-1" />
                </div>
                {/* child-two */}
                <div className='flex flex-col gap-5'>
                 <h2 className="text-slate-100 text-xl font-semibold font-['Poppins'] leading-7">UX Driven Engineering</h2>
                 <p className="text-slate-100 text-sm font-normal font-['Poppins'] leading-snug">Unlike other companies, we are a UX first development <br /> company. Projects are driven by designers and they make sure <br /> design and experiences translate to code.</p>
                </div>
             </div>

              {/* card-two*/}
              <div className='w-full flex bg-black p-10 gap-6'>
                {/* child-one */}
                <div className=''>
                    <img src="./images/design/d-2.png" alt="log-1" />
                </div>
                {/* child-two */}
                <div className='flex flex-col gap-5'>
                 <h2 className="text-slate-100 text-xl font-semibold font-['Poppins'] leading-7">UX Driven Engineering</h2>
                 <p className="text-slate-100 text-sm font-normal font-['Poppins'] leading-snug">Unlike other companies, we are a UX first development <br /> company. Projects are driven by designers and they make sure <br /> design and experiences translate to code.</p>
                </div>
             </div>

              {/* card-three */}
              <div className='w-full flex bg-black p-10 gap-6'>
                {/* child-one */}
                <div className=''>
                    <img src="./images/design/d-3.png" alt="log-1" />
                </div>
                {/* child-two */}
                <div className='flex flex-col gap-5'>
                 <h2 className="text-slate-100 text-xl font-semibold font-['Poppins'] leading-7">UX Driven Engineering</h2>
                 <p className="text-slate-100 text-sm font-normal font-['Poppins'] leading-snug">Unlike other companies, we are a UX first development <br /> company. Projects are driven by designers and they make sure <br /> design and experiences translate to code.</p>
                </div>
             </div>
              
            </div>

            {/* second-div */}
            <div className='w-1/2 flex flex-col gap-8'>

             {/* card-1 */}
            <div className='w-full flex bg-black p-10 gap-6'>

                {/* child-one */}
                <div className=''>
                    <img src="./images/design/d-4.png" alt="log-1" />
                </div>
                {/* child-two */}
                <div className='flex flex-col gap-5'>
                 <h2 className="text-slate-100 text-xl font-semibold font-['Poppins'] leading-7">UX Driven Engineering</h2>
                 <p className="text-slate-100 text-sm font-normal font-['Poppins'] leading-snug">Unlike other companies, we are a UX first development <br /> company. Projects are driven by designers and they make sure <br /> design and experiences translate to code.</p>
                </div>
             </div>

               {/* card-2 */}
             <div className='w-full flex bg-black p-10 gap-6'>
                {/* child-one */}
                <div className=''>
                    <img src="./images/design/d-5.png" alt="log-1" />
                </div>
                {/* child-two */}
                <div className='flex flex-col gap-5'>
                 <h2 className="text-slate-100 text-xl font-semibold font-['Poppins'] leading-7">UX Driven Engineering</h2>
                 <p className="text-slate-100 text-sm font-normal font-['Poppins'] leading-snug">Unlike other companies, we are a UX first development <br /> company. Projects are driven by designers and they make sure <br /> design and experiences translate to code.</p>
                </div>
             </div>

                {/* card-3 */}
             <div className='w-full flex bg-black p-10 gap-6'>
                {/* child-one */}
                <div className=''>
                    <img src="./images/design/d-6.png" alt="log-1" />
                </div>
                {/* child-two */}
                <div className='flex flex-col gap-5'>
                 <h2 className="text-slate-100 text-xl font-semibold font-['Poppins'] leading-7">UX Driven Engineering</h2>
                 <p className="text-slate-100 text-sm font-normal font-['Poppins'] leading-snug">Unlike other companies, we are a UX first development <br /> company. Projects are driven by designers and they make sure <br /> design and experiences translate to code.</p>
                </div>
             </div>
            </div>
            </div>
        </main>
    </section>
  )
}

export default Design