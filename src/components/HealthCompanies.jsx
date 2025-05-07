import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import cigna from "../assets/cigna.png";
import centene from "../assets/centene.png";
import WHO from "../assets/WHO.png";
import CVS from "../assets/CVS.png";
import amref from "../assets/amref.png";
import './HealthCompanies.css'


gsap.registerPlugin(ScrollTrigger);


export default function HealthCompanies() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.animate-in');
  
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: 'power3.inout',
          scrollTrigger: {
            trigger: el,
            start: '-30% 100%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1,
        }
      );
    });
  }, []);
    

  return (
    <>
     <div ref={containerRef}>
        <div className='flex justify-center gap-9 mt-9 mb-[53px] animate-in'>

          <div className='w-36 leading-4 mt-[10px]'>
              <p className='text-[#787878] text-[13px]'>Partnered with World’s</p>
              <p className='text-[#787878] text-[13px] -ml-4'>top health company</p>
          </div>

          <div className='flex gap-12 items-center'>
              <img className='h-12 cursor-pointer hoverEffectBtn transition' src={cigna} alt="cigna logo" />
              <img className='h-6 mt-5 cursor-pointer hoverEffectBtn transition' src={centene} alt="centene logo" />
              <img className='h-8 cursor-pointer hoverEffectBtn transition' src={WHO} alt="WHO logo" />
              <img className='h-8 cursor-pointer hoverEffectBtn transition' src={CVS} alt="CVS logo" />
              <img className='h-8 cursor-pointer hoverEffectBtn transition' src={amref} alt="amref logo" />
          </div>
        </div>

        <div className='flex-column justify-center mt-16 animate-in'>
          <p className='text-[#171717] text-2xl font-semibold tracking-wide'><span className='text-[#1324BB]'>World's first universal </span>health record for patient.</p>
          <div className='flex justify-center mt-2'>
            <p className='text-[12.5px] tracking-wide text-[#727272] max-w-3xl'>Medlaison began with a simple yet powerful idea: to revolutionize how individuals manage their health. Founded by a team of passionate healthcare professionals and tech innovators, Medlaison aimed to bridge the gap between traditional healthcare practices and modern digital solutions. The platform was envisioned as more than just a tool for storing medical records—it became a comprehensive health management system</p>
          </div>
        </div>
      </div>    
        
    </>
  )
}
