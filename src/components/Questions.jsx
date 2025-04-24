import React, { useState } from 'react'

export default function Questions({question, arrowDown, answer, arrowUp}) {
    const [isOpen, setIsOpen]= useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

  return (
    <div className='max-w-[70%] mx-auto mb-3'>
        <div className={`border flex justify-between items-center px-6 py-[13px] rounded-lg ${isOpen ? 'border-[#2E3DC3]' : 'border-[#EFEFEF]'}`}>
            <p className='font-medium text-[#171717] text-[15px]'>{question}</p>

            {isOpen ? 
                <button>
                    <img className='h-[8px] w-[14px]' onClick={closePopup} src={arrowUp} alt="" />
                </button>
            : 
                <button>
                <img className='h-[8px] w-[14px]' onClick={openPopup} src={arrowDown} alt="" />
                </button>
            }
        </div>
        {isOpen && 
            <div className='border-t-0 border border-[#EFEFEF] mx-[7px] px-2 py-3 text-[#787878] text-[13px] rounded-b-md tracking-wide text-left'>
            <p>{answer}</p>
            </div>
        }
    </div>
  )
}
