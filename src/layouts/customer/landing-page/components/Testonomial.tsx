import React from "react"

const Testonomial: React.FC = () => {
    return (
        <div className=" h-auto min-h-screen w-full flex items-center md:py-0 py-20">
            <div className="grid grid-cols-12 gap-3 md:gap-0 w-full  min-h-[70vh] h-auto  lg:px-32 sm:px-8 px-2">

                <div className=" md:col-span-7 col-span-12 md:order-1 order-2 h-full 
                                flex flex-col md:gap-36 gap-5" >
                    <div>
                        <h1 className="font-semibold md:text-lg text-sm mb-4">Testimonials</h1>
                        <div className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold sm:font-semibold ">
                            <h1 >Get to Know Our Digital Print</h1>
                            <h1>Services Closer Through</h1>
                            <h1 className="text-elite-green">Customer Reviews</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 lg:pe-[10rem]     md:pe-[7rem] sm:pe-32 pe-5">
                        <p className="text-sm text-left">
                            Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequat quisque pharetra.
                        </p>
                        <h1 className="text-md font-semibold">Sally Wily - Customer Rona</h1>
                    </div>
                </div>
                <div className="md:col-span-5 col-span-12 md:order-2 order-1 md:h-auto h-[19rem] ">
                    <div className="bg-gray-200 w-full h-full aspect-[1/2]md:aspect-[auto]">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testonomial