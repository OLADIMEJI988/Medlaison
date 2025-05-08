import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './PricingCategory.css'

export default function PricingCategory({benefits, tier, price, img}) {

  const priceRef = useRef(null);  
  const benefitsRef = useRef([]);  

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.killTweensOf(benefitsRef.current);


    if (priceRef.current) {
      gsap.fromTo(
        priceRef.current,
        {
          innerText: 0, 
        },
        {
          innerText: price,
          duration: 2, 
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: priceRef.current,  
            start: 'top 80%',  
            toggleActions: 'play none none none', 
            once: true,
          },
          snap: { innerText: 1 }, // makes sure the counter animates in whole numbers
        }
      );
    }

    // sequential animation for each benefit when the price element is in view
    gsap.fromTo(
      benefitsRef.current, 
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,  
        scrollTrigger: {
          trigger: priceRef.current, 
          start: 'top 100%',  
          toggleActions: 'play none none none', 
          once: true,
          markers: false, 
        },
      }
    );
  }, [price]);

  return (
    <div className='border border-[#EFEFEF] w-[275px] px-4 py-3 mb-10 rounded-lg'>
        <div className='flex-col justify-center items-center bg-[#9DA7FF1A] py-3 rounded-md'>
            <div className='flex justify-center items-center gap-[3px]'>
                <img className='h-[17px]' src={img} alt="" />
                <p className='text-[#1324BB] font-medium text-[13px] tracking-[0.020em]'>{tier}</p>
            </div>
            <div className='flex items-center justify-center gap-1 mt-[2px]'>
                <p className='text-[#171717] font-semibold text-xl'>
                    $  
                </p>

                <p className='text-[#727272] text-[13px] tracking-wide'>
                    <span
                    ref={priceRef}  
                    className='text-3xl font-semibold text-[#171717]'>
                    {price}
                    </span>
                    per/month
                </p>
            </div>  
        </div>

        <ul className='mt-9'>
            {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[10px] mb-[15px]"
                  ref={el => benefitsRef.current[index] = el}
                >
                    <img src={benefit.icon} alt="" className="h-[13.5px]" />
                    <span className='text-sm text-[#171717]'>{benefit.label}</span>
                </div>
            ))}
        </ul>
        <button className='text-[#1324BB] bg-[#9DA7FF1A] w-[100%] py-2 rounded-md text-sm font-semibold mt-2 hoverEffectBtn transition'>Subscribe</button>
    </div>
  )
}
