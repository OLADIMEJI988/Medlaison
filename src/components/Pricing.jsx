import React from 'react'
import PricingCategory from './PricingCategory'
import capsule from "../assets/capsule.png";
import blueStethoscope from "../assets/blue-stethoscope.png";
import syringe from "../assets/syringe.png";

const basicBenefits = [
    { icon: capsule, label: "Health Record Storage" }, 
    { icon: capsule, label: "Appointment Reminders" }, 
    { icon: capsule, label: "Health Tips and Articles" }, 
    { icon: capsule, label: "Basic Health Metrics" }, 
    { icon: capsule, label: "Unlimited Blog" }, 
    { icon: capsule, label: "Vitals Checks" }, 
    { icon: capsule, label: "Balds Check" }, 
];

const goldBenefits = [
    { icon: blueStethoscope, label: "Virtual Consultations" }, 
    { icon: blueStethoscope, label: "Advanced Health Metrics" }, 
    { icon: blueStethoscope, label: "Medication Reminders" }, 
    { icon: blueStethoscope, label: "Personalized Health Insights" }, 
    { icon: capsule, label: "Health Record Storage" }, 
    { icon: capsule, label: "Appointment Reminders" }, 
    { icon: capsule, label: "Health Tips and Articles" }, 
];

const premiumBenefits = [
    { icon: syringe, label: "Comprehensive Health Dashboard" }, 
    { icon: syringe, label: "24/7 Health Support" }, 
    { icon: syringe, label: "Personalized Nutrition Plans" }, 
    { icon: syringe, label: "Integration with Wearable Devices" }, 
    { icon: blueStethoscope, label: "Virtual Consultations" }, 
    { icon: blueStethoscope, label: "Advanced Health Metrics" }, 
    { icon: blueStethoscope, label: "Medication Reminders" }, 
];

export default function Pricing() {
  return (
    <>
       <div className='mt-20 mb-5 font-semibold'>
            <p className='text-[#1324BB] text-sm font-bold'>Pricing</p>
            <p className='text-[#171717] text-[25px] mt-[2px]'>Pricing made for healthy tomorrow</p>
       </div>
       <div className='flex justify-center mt-6 gap-8'>
        <PricingCategory benefits={basicBenefits} img={capsule} tier="Basic" price="#600" />
        <PricingCategory benefits={goldBenefits} img={blueStethoscope} tier="Gold" price="#1000" />
        <PricingCategory benefits={premiumBenefits} img={syringe} tier="Premium" price="#2000" />
       </div>
    </>

  )
}
