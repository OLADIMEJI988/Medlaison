import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Onboarding.css'
import PatientSteps from './PatientSteps'
import InstitutionSteps from './InstitutionSteps';



gsap.registerPlugin(ScrollTrigger);

export default function Onboarding() {
    const [activeTab, setActiveTab] = useState('patient');

    const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.animate-in');
  
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.inout',
          scrollTrigger: {
            trigger: el,
            start: 'top 100%',
            end: 'top 50%',     
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1
        }
      );
    });
  }, []);


  return (
    <>
      <div ref={containerRef}>
            <div className='font-semibold'>
                <p className='text-[#1324BB] text-sm font-bold animate-in'>Onboarding</p>
                <p className='text-[#171717] text-[33px] -mt-1 animate-in'>How to get started</p>
                <div className={`bg-[#EFF8FF] w-[176px] mr-auto ml-auto flex gap-5 justify-center mt-[25px] mb-10 rounded-full text-[12px] tracking-wide animate-in 
                    ${activeTab === 'patient' ? 'pr-5' : activeTab === 'institution' ? 'pl-6' : ''}`}>
                    <button className={activeTab === 'patient' ? 'tab-button active' : 'tab-button'} onClick={() => setActiveTab('patient')}>Patient</button>
                    <button className={activeTab === 'institution' ? 'tab-button active' : 'tab-button'} onClick={() => setActiveTab('institution')}>Institution</button>
                </div>
            </div>
           {activeTab === 'patient' &&       
                <div className='flex justify-center gap-5 mb-20 animate-in'>
                    <PatientSteps 
                        step="1"
                        stepTitle="Sign up"
                        stepContent="Begin by visiting our platform's website or downloading our mobile app from the App Store or Google Play. Click on the 'Sign Up' button and fill out a straightforward reg form."
                    />
                    <PatientSteps 
                        step="2"
                        stepTitle="Set up your profile"
                        stepContent="After verifying your account, log in to access your dashboard. Complete your profile by adding additional details such as your date of birth, gender, and any relevant medical history."
                    />
                    <PatientSteps 
                        step="3"
                        stepTitle="Explore and use"
                        stepContent="Once your profile is set up, take a tour of our platform's features. Navigate through sections like: Comprehensive Health Records, Virtual Consultation Booking & Health Tracking."
                    />
                </div>
            }

            {activeTab === 'institution' &&       
                <div className='flex justify-center gap-5 mb-20 animate-in'>
                    <InstitutionSteps 
                        step="1"
                        stepTitle="Verify Your Email"
                        stepContent="After signing up, check your email inbox for a verification message. Click the link in the email to confirm your account and activate access to the institution's portal."
                    />
                    <InstitutionSteps 
                        step="2"
                        stepTitle="Complete Your Profile"
                        stepContent="Log in to your new account and complete your profile by providing academic details, uploading required documents, and selecting your preferred program or course."
                    />
                    <InstitutionSteps 
                        step="3"
                        stepTitle="Start Exploring Resources"
                        stepContent="Gain access to institutional resources such as course materials, student forums, and announcements. Begin engaging with faculty and peers to make the most of your experience."
                    />
                </div>
            }
      </div>
      
    </>
  )
}
