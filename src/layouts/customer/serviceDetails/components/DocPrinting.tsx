import React from "react"
import { Shape } from "../../landing-page/components/Shapes"

const DocPrinting: React.FC = () => {
    return (
        <>
            <div className="  lg:px-32 sm:px-8 px-2">
                <div className="">
                    <div className="bg-gray-300 w-full aspect-[11/4]"></div>
                </div>
                <div className="grid grid-cols-12 md:my-16 mt-8 mb-12">
                    <div className="md:col-span-6 col-span-12">
                        <div className="flex flex-col md:gap-8 gap-3">
                            <h1 className="text-4xl font-semibold">Document Printing</h1>
                            <p className=" md:w-3/4 w-full text-xs">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequa</p>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12  md:mt-0 mt-4">
                        <div className="flex flex-col items-end md:gap-8 gap-3">
                            <h1 className="text-2xl font-semibold self-start">Available Hours*</h1>
                            <div className="w-full">


                                <div className="w-full flex items-center py-4 justify-between border-b-2 border-black">
                                    <h1 className="font-bold">Monday - Friday</h1>
                                    <div className="flex justify-center items-center gap-2 text-sm">
                                        <Shape variant="time" className="w-6" /> 07.00 am - 08.00 pm</div>


                                </div>
                                <div className="w-full flex items-center py-4 justify-between ">
                                    <h1 className="font-bold">Monday - Friday</h1>
                                    <div className="flex justify-center items-center gap-2 text-sm">
                                        <Shape variant="time" className="w-6" /> 07.00 am - 08.00 pm</div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default DocPrinting