import Marquee from "react-fast-marquee";
import React from 'react'

const Slider = () => {
  return (
    <section className="w-full bg-[#1d1c1c]">
    <main className="w-full py-24">
        {/* main div */}
        <div className="flex">
        <Marquee>
            {/* card one */}
            <div className="bg-black rounded-lg p-6 px-10 shadow-lg mx-12 hover:border-2 hover:border-rose-400">
                <img src="./images/card-logo.png" alt="logo" />
                <h2 className="text-zinc-300 text-[17.15px] font-semibold font-['Poppins'] leading-normal py-4 hover:text-rose-400 ">Software Testing Service</h2>
                <p className="text-zinc-300 text-xs font-normal font-['Poppins'] leading-tight">A Website is an extension of yourself and <br /> we can help you to express it properly. <br /> Your website is your number one <br /> marketing asset because we live in a <br /> digital age.</p>
            </div>

             {/* card two */}
             <div className="bg-black rounded-lg p-6 px-10 shadow-lg hover:border-2 hover:border-rose-400">
                <img src="./images/card-logo.png" alt="logo" />
                <h2 className="text-zinc-300 text-[17.15px] font-semibold font-['Poppins'] leading-normal  py-4 hover:text-rose-400">Software Testing Service</h2>
                <p className="text-zinc-300 text-xs font-normal font-['Poppins'] leading-tight">A Website is an extension of yourself and <br /> we can help you to express it properly. <br /> Your website is your number one <br /> marketing asset because we live in a <br /> digital age.</p>
            </div>

             {/* card three */}
             <div className="bg-black rounded-lg p-6 px-10 shadow-lg mx-12 hover:border-2 hover:border-rose-400">
                <img src="./images/card-logo.png" alt="logo" />
                <h2 className="text-zinc-300 text-[17.15px] font-semibold font-['Poppins'] leading-normal  py-4 hover:text-rose-400">Software Testing Service</h2>
                <p className="text-zinc-300 text-xs font-normal font-['Poppins'] leading-tight">A Website is an extension of yourself and <br /> we can help you to express it properly. <br /> Your website is your number one <br /> marketing asset because we live in a <br /> digital age.</p>
            </div>

             {/* card four */}
             <div className="bg-black rounded-lg p-6 px-10 shadow-lg hover:border-2 hover:border-rose-400">
                <img src="./images/card-logo.png" alt="logo" />
                <h2 className="text-zinc-300 text-[17.15px] font-semibold font-['Poppins'] leading-normal  py-4 hover:text-rose-400">Software Testing Service</h2>
                <p className="text-zinc-300 text-xs font-normal font-['Poppins'] leading-tight">A Website is an extension of yourself and <br /> we can help you to express it properly. <br /> Your website is your number one <br /> marketing asset because we live in a <br /> digital age.</p>
            </div>

             {/* card five */}
             <div className="bg-black rounded-lg p-6 px-10 shadow-lg ml-12 hover:border-2 hover:border-rose-400">
                <img src="./images/card-logo.png" alt="logo" />
                <h2 className="text-zinc-300 text-[17.15px] font-semibold font-['Poppins'] leading-normal  py-4 hover:text-rose-400">Software Testing Service</h2>
                <p className="text-zinc-300 text-xs font-normal font-['Poppins'] leading-tight">A Website is an extension of yourself and <br /> we can help you to express it properly. <br /> Your website is your number one <br /> marketing asset because we live in a <br /> digital age.</p>
            </div>
          
</Marquee>
        </div>
    </main>

</section>
  )
}

export default Slider