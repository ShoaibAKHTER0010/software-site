'use client'
import React, { useState } from 'react';

const Navbar = () => {
    const Links = [
        { name: "About", link: "#about" },
        { name: "Services", link: "#services" },
        { name: "Cases", link: "#cases" },
        { name: "Blog", link: "#blog" },
        { name: "Works", link: "#works" },
        { name: "Hire", link: "#hire" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <main className='w-full '>
            <div className='w-full  bg-black flex '>
                <div className='flex justify-between items-center py-4 w-full  mx-auto px-6 md:px-10 '>
                    <div className="flex items-center ">
                        <div>
                        <img src="./images/logo-top.png" alt="logo" className="" />
                        </div>
                        <h2 className='text-white text-xl font-bold font-["Poppins"] cursor-pointer hover:text-gray-400 ml-2 md:text-2xl md:leading-[25px]'>Logoipusm</h2>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-6 top-4 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul className={`md:flex md:justify-end items-center  md:pb-0  absolute md:static text-white md:z-auto left-0 w-full md:w-auto md:pt-4 pt-0 bg-[#1d1c1c] md:bg-transparent transition-all duration-500 ease-in ${open ? 'top-16' : '-top-full md:top-0'}`}>
                        {Links.map((link) => (
                            <li key={link.name} className="text-sm  text-rose-400 md:text-white  md:my-0 my-7 from-neutral-200 font-['Plus Jakarta Sans] px-6 md:px-4">
                                <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))}

                        {/* button */}
                        <div className=' py-8 md:py-0 px-6'>
                            <button className='text-white font-[Poppins] py-2 px-4 bg-gradient-to-bl from-rose-400 to-purple-900 rounded-[10.04px] duration-500'>
                                Contact Us
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Navbar;
