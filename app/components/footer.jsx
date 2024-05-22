import React from 'react'


const Footer = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl py-16'>
            {/* main-div */}
            <div className='w-full flex gap-12 md:gap-28 px-6 md:px-0'>
                {/* first div */}
                <div className=''>
                <div className=" inline-flex gap-2  "> <img src="./images/logo-top.png" alt="logo" /><h2 className='text-white md:text-2xl text-xl font-bold font-["Poppins"] leading-[16px] md:leading-[25px] cursor-pointer hover:text-gray-400'>Logoipusm</h2>
                </div>
                <p className="text-slate-100 text-lg font-normal font-['Inter'] leading-[30px] py-8">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </p>
                <img src="./images/google.png" alt="img" />
                </div>
                {/* second div */}
                <div className='flex flex-col gap-4'>
                 <h2 className="text-slate-100 text-lg font-bold font-['Inter']">Links</h2>
                 <a href="#">About Us</a>
                 <a href="#">Services</a>
                 <a href="#">Case Studies</a>
                 <a href="#">How it works</a>
                 <a href="#">Blog</a>
                 <a href="#">Careers</a>
                 <a href="#">Areas We Serve</a>
                
                </div>
               {/* 2nd-div */}
               <div>
                 {/* third div */}
                 <div className=''>
                    <h2 className="text-slate-100 text-lg font-bold font-['Inter']">Contact us</h2>
                    <p className="text-slate-100 text-lg font-normal font-['Inter'] leading-[30px] py-8 hidden md:flex">Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. </p>
                    <p className="text-slate-100 text-md md:text-lg font-normal font-['Inter'] leading-0 md:leading-[30px]">+908 89097 890</p>
                </div>
                {/* fourth div */}
                <div className='pt-8 flex flex-col md:flex-row gap-4 cursor-pointer'>
                <ion-icon name="logo-facebook" size="large"></ion-icon>
                <ion-icon name="logo-instagram" size="large"></ion-icon>
                <ion-icon name="logo-github" size="large"></ion-icon>
                <ion-icon name="logo-twitter" size="large"></ion-icon>
                </div>

               </div>
            </div>
            <p className="pt-10 flex justify-center items-center">© 2023 Copyright by Agency Solutions. <br /> All rights reserved.</p>
        </main>
    </section>
  )
}

export default Footer