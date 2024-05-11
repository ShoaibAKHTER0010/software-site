'use client'
import React, { useState } from 'react'


const Navbar = () => {
    let Links =[
      {name:"About",link:"/"},
      {name:"Services",link:"/"},
      {name:"Cases",link:"/"},
      {name:"Blog",link:"/"},
      {name:"Works",link:"/"},
      {name:"Hire",link:"/"},
     
    ];
    let [open,setOpen]=useState(false);
  return (
    <main className='w-full  '>
    <div className='w-full top-0 left-0  bg-black flex justify-center '>
      <div className='md:flex items-center justify-between  py-4 md:max-w-7xl w-full mx-auto  '>
      <div className=" inline-flex gap-2"> <img src="./images/logo-top.png" alt="logo" /><h2 className='text-white md:text-2xl text-xl font-bold font-["Poppins"] leading-[16px] md:leading-[25px]'>Logoipusm</h2></div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

<div className=''>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  text-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-o pl-9  transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className=" text-sm md;text-xl md:my-0 my-7 from-neutral-200 font-['Plus Jakarta Sans] px-8">
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        {/* button */}
        <div className=' lg:ml-32 md:ml-10'>
        <button className=' text-white font-[Poppins] lg:p-2.5 md:p-2 pl-2 bg-gradient-to-bl from-rose-400 to-purple-900 rounded-[10.04px] duration-500 '>
      Contact Us
    </button>
    </div>
      </ul>
      </div>

      </div>
    </div>
    </main>
  )
}

export default Navbar