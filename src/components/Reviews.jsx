import React from 'react'
import ClientReviews from './ClientReviews'

export default function Reviews() {
  return (
    <>
        <div className='mt-20 mb-7 font-semibold'>
            <p className='text-[#1324BB] text-sm font-bold'>Reviews</p>
            <p className='text-[#171717] text-[25px] mt-[2px]'>Testimony from over 100k users</p>
       </div>
       <ClientReviews />
    </>
  )
}
