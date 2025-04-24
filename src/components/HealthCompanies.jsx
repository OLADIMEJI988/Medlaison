import React from 'react'
import cigna from "../assets/cigna.png";
import centene from "../assets/centene.png";
import WHO from "../assets/WHO.png";
import CVS from "../assets/CVS.png";
import amref from "../assets/amref.png";
import './HealthCompanies.css'

export default function HealthCompanies() {
  return (
    <>
        <div className='flex justify-center gap-9 my-[53px]'>

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

        <div className='flex-column justify-center mt-16'>
           <p className='text-[#171717] text-2xl font-semibold tracking-wide'><span className='text-[#1324BB]'>World's first universal </span>health record for patient.</p>
           <div className='flex justify-center mb-14 mt-2'>
              <p className='text-[12.5px] tracking-wide text-[#727272] max-w-3xl'>Medlaison began with a simple yet powerful idea: to revolutionize how individuals manage their health. Founded by a team of passionate healthcare professionals and tech innovators, Medlaison aimed to bridge the gap between traditional healthcare practices and modern digital solutions. The platform was envisioned as more than just a tool for storing medical records—it became a comprehensive health management system</p>
           </div>
        </div>
    </>
  )
}
