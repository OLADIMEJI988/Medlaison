import React from 'react'
import floatingImg1 from "../assets/floatingImg1.png";
import floatingImg2 from "../assets/floatingImg2.png";
import floatingImg3 from "../assets/floatingImg3.png";
import floatingImg4 from "../assets/floatingImg4.png";
import Header from './Header';
import './Hero.css'

export default function Hero() {
  return (
    <>
    <div className='heroBg pt-5 relative'>
      <Header />
      <div className='flex justify-between mt-4'>
          <img className='h-28 hoverEffectImgSlide transition' src={floatingImg1} alt="" />
          <img className='h-36 hoverEffectImg transition' src={floatingImg2} alt="" />
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 w-[890px] translate-y-[72px] leading-[1.3] top-[115px] flexBlock justify-center'>
            <p className='text-[43px] font-semibold text-[#171717]'><span className='text-[#1324BB] tracking-tight'>Manage health </span>with virtual consultations, record and real-time tracking</p>
            <p className='text-[#787878] text-[13px] w-[500px] mt-4 font-medium'>Effortlessly oversee your health through virtual consultation with doctors, extensive health records, and continuous real-time tracking</p>
      </div>
      <div className='mt-[140px] font-semibold'>
            <button className='bg-[#1324BB] text-white text-[11px] px-[17px] py-2 rounded-md mr-4 hoverEffectBtn transition'>Sign up for free</button>
            <button className='bg-[#9DA7FF1A] text-[#1324BB] text-[11px] px-[15px] py-2 rounded-md hoverEffectBtn transition'>Learn more</button>
      </div>
      <div className='flex justify-between mt-4 pl-[7%] pr-[5%] -translate-y-9'>
          <img className='h-32 hoverEffectImg transition' src={floatingImg3} alt="" />
          <img className='h-28 hoverEffectImg transition' src={floatingImg4} alt="" />
      </div>
    </div>

    </>
  )
}
