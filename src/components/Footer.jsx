import React from 'react'
import logo from "../assets/logo.png";
import LinkedinIcon from "../assets/Linkedin icon.png";
import facebookIcon from "../assets/facebookIcon.png";
import instagramLogo from "../assets/instagramLogo.png";
import youtubeIcon from "../assets/youtubeIcon.png";


import './Footer.css'

export default function Footer() {
  return (
    <div className='background pt-9 flex justify-between px-[7%] mt-[66px]'>
        <div>
            <div className='flex items-center'>
                <img className='h-[62px]' src={logo} alt="" />
                <p className='text-[#1324BB] -ml-[8px] text-[23px] mt-[8px]'><span className='font-semibold'>Med</span>laison</p>
            </div>
            <p className='max-w-52 text-start text-[13px] ml-[13px] leading-[17px] -mt-[3px] text-[#171717]'>Medlaison began with a simple yet powerful idea: to revolutionize how individuals manage their health.</p>
            <div className='mt-[18px] flex gap-[9px] mb-8 ml-3'>
                <button className='p-[14px] rounded-[8px] bg-white hoverEffectBtn transition'>
                   <img className='h-[11px]' src={LinkedinIcon} alt="" />
                </button>

                <button className='py-[14px] px-[15px] rounded-[8px] bg-white hoverEffectBtn transition'>
                   <img className='h-[11px]' src={facebookIcon} alt="" />
                </button>

                <button className='p-[14px] rounded-[8px] bg-white hoverEffectBtn transition'>
                   <img className='h-[11px]' src={instagramLogo} alt="" />
                </button>

                <button className='p-[13px] rounded-[8px] bg-white hoverEffectBtn transition'>
                   <img className='h-[11px]' src={youtubeIcon} alt="" />
                </button>
            </div>
        </div>
        <div className='text-start flex gap-14 text-[#232323]'>
            <ul className='text-[13px]'>
                <li className='font-medium text-[#171717] text-sm'>Link</li>
                <li className='my-2 cursor-pointer hoverEffectBtn transition'>Service</li>
                <li className='cursor-pointer hoverEffectBtn transition'>How it works</li>
                <li className='my-2 cursor-pointer hoverEffectBtn transition'>Pricing</li>
                <li className='cursor-pointer hoverEffectBtn transition'>FAQ</li>
            </ul>

            <ul className='text-[13px]'>
                <li className='font-medium text-[#171717] text-sm'>About us</li>
                <li className='my-2 cursor-pointer hoverEffectBtn transition'>About app</li>
                <li className='cursor-pointer hoverEffectBtn transition'>Brand center</li>
                <li className='my-2 cursor-pointer hoverEffectBtn transition'>Career</li>
                <li className='cursor-pointer hoverEffectBtn transition'>Target PPL & BSS</li>
            </ul>

            <ul className='text-[13px]'>
                <li className='font-medium text-[#171717] text-sm'>Products</li>
                <li className='my-2 cursor-pointer hoverEffectBtn transition'>For patient</li>
                <li className='cursor-pointer hoverEffectBtn transition'>For Institution</li>
            </ul>

            <ul className='text-[13px]'>
                <li className='font-medium text-[#171717] text-sm'>Privacy</li>
                <li className='my-2 cursor-pointer hoverEffectBtn transition'>Terms of services</li>
                <li className='cursor-pointer hoverEffectBtn transition'>Private policy</li>
                <li className='my-2 cursor-pointer hoverEffectBtn transition'>Data security</li>
            </ul>
        </div>
    </div>
  )
}
