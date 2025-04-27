import React from 'react'
import arrowDown from "../assets/arrowDown.png";
import arrowUp from "../assets/arrowUp.png";
import Questions from './Questions';

export default function Support() {
  return (
    <>
        <div className='mt-20 mb-5 font-semibold'>
            <p className='text-[#1324BB] text-sm font-bold'>Support</p>
            <p className='text-[#171717] text-[25px] mt-[2px]'>Frequently asked questions</p>
       </div>
       
       <div className='mb-20 mt-4'>
            <Questions 
                question="What is a universal health record, and how does it benefit me?"
                arrowDown={arrowDown}
                answer="A universal health record consolidates all your medical information from different healthcare providers into one secure platform. This ensures easy access to your health history anytime, anywhere, which can be crucial during emergencies or when switching doctors."
                arrowUp={arrowUp}
            />

            <Questions 
                question="How do virtual consultations work on Medlaison?"
                arrowDown={arrowDown}
                answer="Virtual consultations on Medlaison work by connecting patients with licensed healthcare professionals through secure video or audio calls, eliminating the need for physical hospital visits."
                arrowUp={arrowUp}
            />

            <Questions 
                question="Who are the medical practitioners available for consultations?"
                arrowDown={arrowDown}
                answer="Medlaison offers virtual consultations with a diverse team of licensed healthcare professionals, ensuring comprehensive care tailored to your needs. While specific practitioner details aren't publicly listed, the platform typically includes: General Practitioners (GPs), Specialists, Mental Health Professionals and Nurse Practitioners and Physician Assistants."
                arrowUp={arrowUp}
            />

            <Questions 
                question="What are personalized health insights, and how can they help me?"
                arrowDown={arrowDown}
                answer="Personalized health insights are tailored recommendations based on your unique health data, such as medical history, lifestyle, and vitals. They help you stay ahead with preventive care, make informed decisions, track your health progress, and have more effective conversations with doctors. On Medlaison, these insights are automatically generated and easy to understand, turning your data into actionable steps for better health."
                arrowUp={arrowUp}
            />

            <Questions 
                question="Is my health information secure on Medlaison?"
                arrowDown={arrowDown}
                answer="Yes, your health information on Medlaison is designed to be secure. While specific details about Medlaison's security measures aren't publicly available, reputable telehealth platforms typically implement robust data protection protocols. These often include encryption, secure servers, and compliance with relevant data privacy regulations to ensure that your personal health information remains confidential and protected."
                arrowUp={arrowUp}
            />
       </div>


    </>
  )
}
