import React from "react"

interface Props {
    mainHeading : string,
    subHeading? : string,
}
const Header:React.FC<Props> = ({mainHeading, subHeading}) => {

    return (
        <div className="flex ">
            <div className="bg-elite-red md:w-7/12 w-9/12 rounded-l-2xl p-4 px-12 border-r-transparent flex  flex-col justify-center">
            {
                subHeading &&   
                <h1 className="md:text-md text-xs text-white/75 font-thin">{subHeading}</h1>
            }
                <h1 className="md:text-3xl sm:text-lg text-white font-semibold ">{mainHeading}</h1>
            </div>
            <div className="w-0 h-0 border-t-[99px] border-r-[100px]  md:border-t-[119px] md:border-r-[228px] md:border-b-0 md:border-l-0 md:border-solid border-t-elite-red border-transparent " />
        </div>
    )
}
export default Header   