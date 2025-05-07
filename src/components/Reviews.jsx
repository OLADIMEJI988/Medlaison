import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ClientReviews from './ClientReviews'


gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {

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
          duration: 1.2,
          ease: 'power3.inout',
          scrollTrigger: {
            trigger: el,
            start: 'top 100%',
            end: 'top 50%',     
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1
        }
      );
    });
  }, []);


  return (
    <>
      <div ref={containerRef}>
        <div className='mt-20 mb-7 font-semibold'>
          <p className='text-[#1324BB] text-sm font-bold animate-in'>Reviews</p>
          <p className='text-[#171717] text-[25px] mt-[2px] animate-in'>Testimony from over 100k users</p>
        </div>
        <div className='animate-in'>
          <ClientReviews />
        </div>
      </div>
        
    </>
  )
}
