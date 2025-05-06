import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Header.css'
import logo from "../assets/logo.png";


gsap.registerPlugin(ScrollTrigger);

export default function Header() {
   const containerRef = useRef(null);

   useEffect(() => {
     const elements = containerRef.current.querySelectorAll('.animate-in');
 
     elements.forEach((el, i) => {
       gsap.fromTo(
         el,
         {
           opacity: 0,
           y: 100,
           scale: 0.9
         },
         {
           opacity: 1,
           y: 0,
           scale: 1,
           duration: 1.7,
           ease: 'bounce.out',
           scrollTrigger: {
             trigger: el,
             start: 'top 85%',
             toggleActions: 'play none none none'
           },
           delay: i * 0.1
         }
       );
     });
   }, []);


  return (
    <>
       <div ref={containerRef}>
         <div className='border border-[#9DA7FF] rounded-md w-[90%] mr-auto ml-auto pl-4 pr-[26px] py-[3px] flex items-center justify-between animate-in mb-2'>
            <div className='flex items-center'>
               <img className='h-11' src={logo} alt="" />
               <p className='text-[#1324BB] -ml-[6px]'><span className='font-semibold'>Med</span>laison</p>
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
       </div>
    </>
  )
}
