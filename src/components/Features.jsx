import React from 'react'
import ContainedFeature from './ContainedFeature'
import healthRecord from "../assets/healthRecord.png";
import videoConsultation from "../assets/videoConsultation.png";
import practitionerGrp from "../assets/practitionerGrp.png";
import healthInsights from "../assets/healthInsights.png";

export default function Features() {
  return (
    <>
       <div className='mt-16 mb-5'>
          <p className='text-[#1324BB] text-sm font-bold'>Features</p>
          <p className='text-[#171717] text-[22px] font-semibold'>Redefining the medical sectors with bespoke features</p>
       </div>
       <div className='grid grid-cols-2 mx-[10%] gap-3 mb-20'>
          <div>
            <ContainedFeature
                img={healthRecord}
                title="Universal health record"
                subSection="A universal health record aggregates an individual's medical information from various healthcare providers into a single digital platform, ensuring comprehensive and accessible health data."
            />
          </div>
          <div>
            <ContainedFeature
                img={videoConsultation}
                title="Real-time consultation"
                subSection="Real-time consultation allows users to connect with healthcare professionals remotely, enabling immediate access to medical advice and treatment recommendations."
            />
          </div>
          <div>
            <ContainedFeature
                img={practitionerGrp}
                title="Professional Medical practitioner"
                subSection="Professional medical practitioners are licensed healthcare providers who offer expertise and guidance tailored to individual health needs, ensuring accurate diagnosis and personalized plan."
            />
          </div>
          <div>
            <ContainedFeature
                img={healthInsights}
                title="Personalised health insight"
                subSection="Utilization of data analytics to offer personalized health recommendations and insights based on individual health data and trends."
            />
          </div> 
       </div>
    </>
  )
}
