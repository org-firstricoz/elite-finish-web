import React from "react"

export const AboutUs: React.FC = () => {
    return (
        <>
            <div className="relative w-full min-h-screen h-auto grid grid-cols-12 md:pt-0 pt-12  items-center lg:px-32 sm:px-8 px-2 ">
                <div className="relative md:col-span-6 col-span-12 flex items-center  justify-center md:justify-start  ">

                    <div className="h-[28rem] w-[28rem] bg-gray-300 z-50 ">
                        {/* image placeholder */}
                    </div>
                </div>
                <div className="relative md:col-span-6 col-span-12 h-full  md:py-0 py-8 flex items-center justify-center px-4 ">
                     <div className="flex flex-col gap-5 ">
                        <h1 className="font-semibold md:text-lg text-sm mb-4">About Us</h1>
                        <div className="font-semibold md:text-4xl lg:text-5xl sm:text-3xl text-2xl">
                        <h1>Experience the Power </h1>
                        <h1>of Digital Printing</h1>
                        </div>
                        
                        <h1 className="text-sm">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequa</h1>
                     </div>
                </div>
            </div>
        </>
    )
}