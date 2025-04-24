import React from 'react'

export default function ({step, stepTitle, stepContent}) {
  return (
    <div className='flex-col items-start justify-start text-left max-w-72'>
        <p className='text-[#1324BB] font-bold pl-4'>{step}</p>
        <div className='mt-3'>
            <p className='text-[#171717] font-medium tracking-[0.021em]'>{stepTitle}</p>
            <p className='text-[#727272] text-[13px] tracking-wide mt-1'>{stepContent}</p>
        </div>
   </div>
  )
}
