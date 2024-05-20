'use client'
import React, { useState } from 'react';

const Navbar = () => {
    const Links = [
        { name: "About", link: "/" },
        { name: "Services", link: "/" },
        { name: "Cases", link: "/" },
        { name: "Blog", link: "/" },
        { name: "Works", link: "/" },
        { name: "Hire", link: "/" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <main className='w-full'>
            <div className='w-full top-0 left-0 bg-black flex '>
                <div className='flex flex-col  py-4  md:max-w-7xl w-full mx-auto md:px-6'>
                    <div className="flex items-center">
                        <img src="./images/logo-top.png" alt="logo" className="h-10 md:h-auto" />
                        <h2 className='text-white text-xl font-bold font-["Poppins"] cursor-pointer hover:text-gray-400 ml-2 md:text-2xl md:leading-[25px]'>Logoipusm</h2>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul className={`md:flex md:justify-end  md:pb-0  absolute md:static text-white md:z-auto left-0 w-full md:w-auto md:pt-4 pt-0 bg-[#1d1c1c] md:bg-transparent transition-all duration-500 ease-in ${open ? 'top-20' : '-top-full md:top-0'}`}>
                        {Links.map((link) => (
                            <li key={link.name} className="text-sm md:text-md text-rose-400 md:text-white  md:my-0 my-7 from-neutral-200 font-['Plus Jakarta Sans] px-8">
                                <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))}

                        {/* button */}
                        <div className='pb-4 md:pb-0 px-2'>
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
