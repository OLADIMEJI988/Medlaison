import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ContainedFeature from './ContainedFeature';

import healthRecord from "../assets/healthRecord.png";
import videoConsultation from "../assets/videoConsultation.png";
import practitionerGrp from "../assets/practitionerGrp.png";
import healthInsights from "../assets/healthInsights.png";


gsap.registerPlugin(ScrollTrigger);

export default function Features() {
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
    <div ref={containerRef}>
      <div className='mt-16 mb-5 animate-in'>
        <p className='text-[#1324BB] text-sm font-bold'>Features</p>
        <p className='text-[#171717] text-[22px] font-semibold'>
          Redefining the medical sectors with bespoke features
        </p>
      </div>

      <div className='grid grid-cols-2 mx-[10%] gap-3 mb-20'>
        <div className='animate-in'>
          <ContainedFeature
            img={healthRecord}
            title="Universal health record"
            subSection="A universal health record aggregates an individual's medical information from various healthcare providers into a single digital platform, ensuring comprehensive and accessible health data."
          />
        </div>

        <div className='animate-in'>
          <ContainedFeature
            img={videoConsultation}
            title="Real-time consultation"
            subSection="Real-time consultation allows users to connect with healthcare professionals remotely, enabling immediate access to medical advice and treatment recommendations."
          />
        </div>

        <div className='animate-in'>
          <ContainedFeature
            img={practitionerGrp}
            title="Professional Medical practitioner"
            subSection="Professional medical practitioners are licensed healthcare providers who offer expertise and guidance tailored to individual health needs, ensuring accurate diagnosis and personalized plan."
          />
        </div>

        <div className='animate-in'>
          <ContainedFeature
            img={healthInsights}
            title="Personalised health insight"
            subSection="Utilization of data analytics to offer personalized health recommendations and insights based on individual health data and trends."
          />
        </div>
      </div>
    </div>
  );
}
