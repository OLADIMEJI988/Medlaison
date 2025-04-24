import React from 'react'
import TopLeftEllipse from '../assets/TopLeft Ellipse.png';
import TopRightEllipse from '../assets/TopRight Ellipse.png';
import BottomLeftEllipse from '../assets/BottomLeft Ellipse.png';
import BottomRightEllipse from '../assets/BottomRight Ellipse.png';


export default function MottoFrame() {
  return (
    <>
      <div className='bg-[#EDEEFF] w-[85%] mx-auto mb-10 rounded-xl'>

        <div className='flex justify-between h-28'>
            <img src={TopLeftEllipse} alt="" />
            <img src={TopRightEllipse} alt="" />
        </div>
        <div>
            <div className='text-4xl text-[#171717] font-semibold tracking-tight leading-[1.32] -translate-y-5'>
                <p><span className='text-[#1324BB]'>MedLaison</span> your go to healthcare</p>
                <p>platform.</p>
                <button className='bg-[#1324BB] text-sm text-white py-[9px] px-5 flex items-center justify-center mx-auto tracking-wide font-normal mt-[17px] rounded-md'>Get started now</button>
            </div>
        </div>
        <div className='flex justify-between h-16'>
            <img src={BottomLeftEllipse} alt="" />
            <img src={BottomRightEllipse} alt="" />
        </div>

      </div>
    </>
  )
}
