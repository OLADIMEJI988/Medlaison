import React from 'react'
import capsule from "../assets/capsule.png";
import './PricingCategory.css'

export default function ({benefits, tier, price, img}) {
  return (
    <>
        <div className='border border-[#EFEFEF] w-[275px] px-4 py-3 mb-10 rounded-lg'>
            <div className='flex-col justify-center items-center bg-[#9DA7FF1A] py-3 rounded-md'>
                <div className='flex justify-center items-center gap-[3px]'>
                    <img className='h-[17px]' src={img} alt="" />
                    <p className='text-[#1324BB] font-medium text-[13px] tracking-[0.020em]'>{tier}</p>
                </div>
                <div>
                   <p className='text-[#727272] text-[13px] tracking-wide'><span className='text-3xl font-semibold text-[#171717]'>{price}</span>/per month</p>
                </div>  
            </div>

            <ul className='mt-9'>
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-[10px] mb-[15px]">
                        <img src={benefit.icon} alt="" className="h-[13.5px]" />
                        <span className='text-sm text-[#171717]'>{benefit.label}</span>
                    </div>
                ))}
            </ul>
            <button className='text-[#1324BB] bg-[#9DA7FF1A] w-[100%] py-2 rounded-md text-sm font-semibold mt-2 hoverEffectBtn transition'>Subscribe</button>
        </div>

    </>
  )   
}
