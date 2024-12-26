import { EliteWideScreenHandler } from '@/components'
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

const FeatureTimeline: React.FC = () => {
  return (
    <EliteWideScreenHandler>

      <div className="h-auto my-28 md:px-24 px-4">
        <EliteHeading classname='text-center font-semibold '>Commitment to quality, trust, and <br /> customer  satisfaction</EliteHeading>
        <div className='  md:w-6/12 w-full  m-auto my-8'>
          <p className='text-gray-400 text-center md:text-sm text-xs'>We deploy world-class creative design, team on demand. that can design surest measure’s of success is when a client partner with more than oncebuild, scale your vision most efficient.</p>
        </div>


        {/* titles */}
        <div className="grid grid-cols-12 w-full   md:mt-2 mt-12 pb-4 ">
          <div className='md:col-span-3 col-span-6 ' >
            <div className="text-start flex flex-col gap-3">
              <h1 className="font-semibold text-xl">Quality</h1>
              <p className="text-xs">
                we use the best practice and  <br />
                high-quality product outstanding <br />
                cleaning results every time.</p>
            </div>
          </div>
          <div className='md:col-span-3 col-span-6 ps-2 md:ps-0'>
            <div className="text-start flex flex-col gap-3">
              <h1 className="font-semibold text-xl">Sustainability</h1>
              <p className="text-xs">
                our clients trust is our top priority. <br />
                We ensure all our staff are <br />
                thoroughly vetted and trained.</p>
            </div>
          </div>
          <div className='md:col-span-3 col-span-6 '>
            <div className="text-start flex flex-col gap-3">
              <h1 className="font-semibold text-xl">Trust</h1>
              <p className="text-xs">We are committed to using eco- <br />
                friendly products and methods to <br />
                protect the environment.</p>
            </div>
          </div>
          <div className='md:col-span-3 col-span-6 ps-2 md:ps-0'>
            <div className="text-start flex flex-col gap-3" >
              <h1 className="font-semibold text-xl">Clients Satisfaction</h1>
              <p className="text-xs">
                We listen to our customers and <br />
                strive to exceed their expectations <br />
                with every service-</p>
            </div>
          </div>

        </div>

      </div>
    </EliteWideScreenHandler>



  )
}

export default FeatureTimeline