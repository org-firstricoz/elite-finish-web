import EliteHeading from '@/components/EliteHeading'
import React from 'react'

// const features = [
//   {
//     title: 'Quality',
//     description: 'We use the best practice and high-quality product outstanding cleaning results every time.'
//   },
//   {
//     title: 'Sustainability',
//     description: 'Our clients\' trust is our top priority. We ensure all our staff are thoroughly vetted and trained.'
//   },
//   {
//     title: 'Trust',
//     description: 'We are committed to using eco-friendly products and methods to protect the environment.'
//   },
//   {
//     title: 'Clients Satisfaction',
//     description: 'We listen to our customers and strive to exceed their expectations with every service.'
//   }
// ]

const FeatureTimeline:React.FC =()=> {
  return (
    <div className="h-auto my-28 md:px-12 px-4">
      <EliteHeading classname='text-start font-[400]'>Commitment to quality, trust, and customer <br /> satisfaction</EliteHeading>

      <div className="flex justify-start ps-12 gap-8  md:block">

      <div className="flex md:flex-row flex-col h-[70vh] md:h-auto md:items-center md:w-full w-auto mt-12  ">
        
        {/*  Line */}
        <div className="flex  flex-col md:flex-row items-center justify-between pb-4 pt-4 md:p-0   w-0.5 md:w-full h-full md:h-0.5   bg-gray-300">

        {/* First Circle */}
        <div className=" flex justify-center items-center h-3 w-3  rounded-full bg-yellow-300 -translate-y-2 md:translate-y-0"/>


        {/* Second Circle */}
        <div className=" flex justify-center items-center h-3 w-3  rounded-full bg-yellow-300 -translate-y-4 md:translate-y-0  md:-translate-x-[3.3rem]"/>

       

        {/* Third Circle */}
        <div className=" flex justify-center items-center h-3 w-3  rounded-full bg-yellow-300  -translate-y-7 md:translate-y-0  md:-translate-x-[6.6rem]"/>

        {/* Dotted Line */}
        {/* <div className="flex-grow translate-x-[0.33rem] md:translate-x-0  w-0.5 md:w-0 h-0 md:h-.5  border-dotted md:border-b-2 border-l-2 border-black/25"></div> */}

        {/* Fourth Circle */}
        <div className='w-ful'>
        <div className=" flex justify-center items-center h-3 w-3  rounded-full bg-yellow-300  -translate-y-10 md:translate-y-0 md:-translate-x-40  ">
        </div>
        </div>

        </div>

      </div>


{/* titles */}
      <div className="flex flex-col md:flex-row  md:items-center items-start justify-between md:w-full w-auto md:mt-2 mt-12 pb-4">
        <div className="text-start">
          <h1 className="font-semibold text-xl">Quality</h1>
          <p className="text-xs">Please Contact us use our online <br /> form to request a quote.</p>
        </div>
        <div className="text-start">
          <h1 className="font-semibold text-xl">Sustainability</h1>
          <p className="text-xs">Please Contact us use our online <br /> form to request a quote.</p>
        </div>
        <div className="text-start">
          <h1 className="font-semibold text-xl">Trust</h1>
          <p className="text-xs">Please Contact us use our online <br /> form to request a quote.</p>
        </div>
        <div className="text-start">
          <h1 className="font-semibold text-xl">Clients Satisfaction</h1>
          <p className="text-xs">Please Contact us use our online <br /> form to request a quote.</p>
        </div>
      </div>

      </div>


    </div>
  )
}

export default FeatureTimeline