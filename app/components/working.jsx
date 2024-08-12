
import Marquee from "react-fast-marquee";

const Working = () => {
  return (
    <section id="services" className='w-full'>
      <main className=' py-16 mx-auto max-w-7xl '>
        {/* main div */}
        <div className="w-full ">
          {/* first div */}
          <div className="py-10 w-full md:w-1/2  md:py-28 flex flex-col sm:items-center md:items-start ">
            {/* child */}
            <div className="h-1 w-36 bg-gradient-to-bl from-rose-400 to-purple-900 "></div>
            <h2 className="text-zinc-300 py-8 text-[34.53px] font-normal font-['Poppins'] leading-[43.26px]">Meet the People <br />
<span className="text-zinc-300 text-[36.53px] font-bold font-['Poppins'] leading-[43.26px]">Who are Working With us</span></h2>
          </div>
          {/* second div */}
          <div className=" py-8 transition-all duration-500 ease-in-out">
          <Marquee pauseOnHover={true}>
            {/* user one */}
            <div className="rounded-xl shadow-2xl mx-12 hover:border-2 hover:border-rose-400 p-6 ">
               <img src="./images/pic-a.jpg" alt="person-1" className="h-[160px] md:h-[200px]  rounded-full" />
               <h2 className="font-bold text-xl pt-4 text-center ">James Anderson</h2>
               <p className="text-center py-2">(ceo)Full-stack Developer</p>
            </div>

             {/* user two */}
             <div className="rounded-xl shadow-lg mx-12 hover:border-2 hover:border-rose-400 p-6">
             <img src="./images/pic-b.jpg" alt="person-2" className="h-[160px] md:h-[200px] rounded-full" />
               <h2 className="font-bold text-xl pt-4 text-center">Matthew Scott</h2>
               <p className="text-center py-2">Front-end Developer</p>
               </div>

             {/* user three */}
             <div className="rounded-xl shadow-lg mx-12 hover:border-2 hover:border-rose-400 p-6">
             <img src="./images/pic-c.jpg" alt="person-3" className="h-[160px] md:h-[200px] rounded-full" />
               <h2 className="font-bold text-xl text-center pt-4">Sarah Thompson</h2>
               <p className="text-center py-2">Ui/Ux Designer</p>
                  </div>
                {/* user four */}
                <div className="rounded-xl shadow-lg mx-12 hover:border-2 hover:border-rose-400 p-6">
             <img src="./images/pic-d.jpg" alt="person-4" className="h-[160px] md:h-[200px] rounded-full" />
               <h2 className="font-bold text-xl text-center pt-4">Ashley Roberts</h2>
               <p className="text-center py-2">Full-stack Developer</p>
               
            </div>

              {/* user five */}
              <div className="rounded-xl shadow-lg mx-12 hover:border-2 hover:border-rose-400 p-6">
             <img src="./images/pic-e.jpg" alt="person-4" className="h-[160px] md:h-[200px] rounded-full" />
               <h2 className="font-bold text-xl text-center pt-4">James Anderson</h2>
               <p className="text-center py-2">Senior-Designer</p>
               
            </div>

            {/* user six */}
            <div className="rounded-xl shadow-lg mx-12 hover:border-2 hover:border-rose-400 p-6">
             <img src="./images/pic-f.jpg" alt="person-4" className="h-[160px] md:h-[200px] rounded-full" />
               <h2 className="font-bold text-xl text-center pt-4">John Carter</h2>
               <p className="text-center py-2">Front-end Developer</p>
               
            </div>


             

             
          
</Marquee>

          </div>
        </div>
      </main>
    </section>
  );
}

export default Working;
