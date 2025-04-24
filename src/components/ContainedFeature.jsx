import React from 'react'

export default function ContainedFeature({img, title, subSection}) {
  return (
      <div className='border border-[#EFEFEF] rounded-md py-[10px] px-[6px] max-w-[500px]'>
            <div><img className='h-52' src={img} alt="" /></div>
            <div className='flex flex-col items-start justify-start text-left space-y-[5px] px-[6px] pt-5 pb-1'>
                <p className='text-[#171717] text-[15px] font-semibold tracking-wide'>{title}</p>
                <p className='text-[#727272] text-left text-sm tracking-wide leading-[22px]'>{subSection}</p>
            </div>
      </div>
    )
}
