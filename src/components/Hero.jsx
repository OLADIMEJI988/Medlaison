import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import floatingImg1 from "../assets/floatingImg1.png";
import floatingImg2 from "../assets/floatingImg2.png";
import floatingImg3 from "../assets/floatingImg3.png";
import floatingImg4 from "../assets/floatingImg4.png";
import Header from './Header';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.animate-in');
    const buttons = containerRef.current.querySelectorAll('.hero-buttons button');
    const floatingImgs = containerRef.current.querySelectorAll('.floating-img');

    elements.forEach((el, i) => {
      let delay = i < 2 ? 0.5 + i * 0.3 : i * 0.5;

      gsap.fromTo(
        el,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay,
          onComplete: () => {
            // Apply bounce animation to the images after they are fully animated in
            if (el.classList.contains('floating-img')) {
              gsap.to(el, {
                y: 20,
                duration: 2,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
              });
            }

            // Apply bounce animation to the buttons
            if (i === 0 && buttons.length >= 2) {
              gsap.to(buttons[0], {
                y: 10,
                duration: 0.8,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
              });

              gsap.to(buttons[1], {
                y: 10,
                duration: 1,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: 0.3
              });
            }
          }
        }
      );
    });
  }, []);

  return (
    <>
      <div className='heroBg pt-5 relative'>
        <Header />
        <div ref={containerRef}>
          <div className='flex justify-between animate-in'>
            <img
              className='h-28 hoverEffectImgSlide transition animate-in floating-img'
              src={floatingImg1}
              alt=""
              style={{ opacity: 0 }}
            />
            <img
              className='h-36 hoverEffectImg transition animate-in floating-img'
              src={floatingImg2}
              alt=""
              style={{ opacity: 0 }}
            />
          </div>

          <div className='absolute left-1/2 -translate-x-1/2 w-[890px] translate-y-[52px] leading-[1.3] top-[210px] flexBlock justify-center animate-in'>
            <p className='text-[43px] font-semibold text-[#171717]'><span className='text-[#1324BB] tracking-tight'>Manage health </span>with virtual consultations, record and real-time tracking</p>
            <p className='text-[#787878] text-[13px] w-[500px] mt-4 font-medium'>Effortlessly oversee your health through virtual consultation with doctors, extensive health records, and continuous real-time tracking</p>
          </div>

          <div className='mt-[165px] font-semibold animate-in hero-buttons'>
            <button className='bg-[#1324BB] text-white text-[11px] px-[17px] py-2 rounded-md mr-4 transition'>Sign up for free</button>
            <button className='bg-[#9DA7FF1A] text-[#1324BB] text-[11px] px-[15px] py-2 rounded-md transition'>Learn more</button>
          </div>

          <div className='flex justify-between pl-[7%] pr-[5%] -translate-y-9 animate-in -mt-8'>
            <img className='h-32 hoverEffectImg transition animate-in floating-img' src={floatingImg3} alt="" />
            <img className='h-28 hoverEffectImg transition animate-in floating-img' src={floatingImg4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
