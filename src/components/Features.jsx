import React from 'react'
import ContainedFeature from './ContainedFeature';
import ScrollFadeMotion from './ScrollFadeMotion';

import healthRecord from "../assets/healthRecord.png";
import videoConsultation from "../assets/videoConsultation.png";
import practitionerGrp from "../assets/practitionerGrp.png";
import healthInsights from "../assets/healthInsights.png";


export default function Features() {
  return (
    <>
       <div className='mt-16 mb-5'>
        <ScrollFadeMotion>
          <p className='text-[#1324BB] text-sm font-bold autoShow'>Features</p>
        </ScrollFadeMotion>
        <ScrollFadeMotion>
          <p className='text-[#171717] text-[22px] font-semibold'>Redefining the medical sectors with bespoke features</p>
        </ScrollFadeMotion>
       </div>
       <div className='grid grid-cols-2 mx-[10%] gap-3 mb-20'>
          <div>
            <ScrollFadeMotion>
              <ContainedFeature
                img={healthRecord}
                title="Universal health record"
                subSection="A universal health record aggregates an individual's medical information from various healthcare providers into a single digital platform, ensuring comprehensive and accessible health data."
              />
            </ScrollFadeMotion>
          </div>

          <div>
            <ScrollFadeMotion>
              <ContainedFeature
                img={videoConsultation}
                title="Real-time consultation"
                subSection="Real-time consultation allows users to connect with healthcare professionals remotely, enabling immediate access to medical advice and treatment recommendations."
              />
            </ScrollFadeMotion>
          </div>

          <div>
            <ScrollFadeMotion>
              <ContainedFeature
                img={practitionerGrp}
                title="Professional Medical practitioner"
                subSection="Professional medical practitioners are licensed healthcare providers who offer expertise and guidance tailored to individual health needs, ensuring accurate diagnosis and personalized plan."
              />
            </ScrollFadeMotion>
          </div>

          <div>
            <ScrollFadeMotion>
              <ContainedFeature
                img={healthInsights}
                title="Personalised health insight"
                subSection="Utilization of data analytics to offer personalized health recommendations and insights based on individual health data and trends."
              />
            </ScrollFadeMotion>
          </div> 
          
       </div>
    </>
  )
}
