import React from "react"
import { EliteSmallHeading } from "./EliteSmallHeading";
import { EliteDescription } from "./EliteDescription";


interface TestomonialProps {
    heading: string;
    subheading1: string;
    subheading2: string;
    subheading3: string;
    description: string;
    author: string;

}
const TestonomialSection: React.FC<TestomonialProps> = ({
    heading,
    subheading1,
    subheading2,
    subheading3,
    description,
    author
}) => {
    return (
        <div className=" h-auto min-h-screen w-full flex items-center md:py-0 py-20">
            <div className="grid grid-cols-12 gap-3 md:gap-0 w-full  min-h-[70vh] h-auto  lg:px-32 sm:px-8 px-2">
                <div className=" md:col-span-7 col-span-12 md:order-1 order-2 h-full flex flex-col md:gap-36 gap-5" >
                    <div>
                        <EliteSmallHeading heading={heading} />
                        <div className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold sm:font-semibold ">
                            <h1 >{subheading1}</h1>
                            <h1>{subheading2}</h1>
                            <h1 className="text-elite-green">{subheading3}</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 lg:pe-[10rem] md:pe-[7rem] sm:pe-32 pe-5">
                        <EliteDescription heading={description} className="text-left" />
                        <h1 className="text-md font-semibold">{author}</h1>
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
export default TestonomialSection