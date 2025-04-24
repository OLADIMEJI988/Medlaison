import React from 'react'
import './Header.css'
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
       <div className='border border-[#9DA7FF] rounded-md w-[90%] mr-auto ml-auto pl-4 pr-[26px] py-[3px] flex items-center justify-between'>
         <div className='flex items-center'>
            <img className='h-11' src={logo} alt="" />
            <p className='text-[#1324BB] -ml-[6px] logoText'><span className='font-semibold'>Med</span>laison</p>
         </div>
         <div className='gap-8 font-semibold text-[13px] flex text-[#171717]'>
            <p className='cursor-pointer hoverEffect'>Services</p>
            <p className='cursor-pointer hoverEffect'>How it work</p>
            <p className='cursor-pointer hoverEffect'>Pricing</p>
            <p className='cursor-pointer hoverEffect'>FAQ</p>
         </div>
         <div className='font-semibold'>
            <button className='bg-[#9DA7FF1A] text-[#1324BB] text-[11px] px-[15px] py-[7px] rounded-md hoverEffectBtn transition'>Login</button>
            <button className='bg-[#1324BB] text-white text-[11px] px-[17px] py-[7px] rounded-md ml-[14px] hoverEffectBtn transition'>Sign up</button>
         </div>
       </div>
    </>
  )
}
