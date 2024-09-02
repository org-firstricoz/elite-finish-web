import React from "react"
import EliteButton from "./EliteButton"
import demoImage from '../../public/assets/demoimage.png'

interface EliteCommonProps{
    image? : string;
    buttonText? : string;
    href? : string;

}
export const EliteCommon: React.FC<EliteCommonProps> = () => {
    return (
        <>
          
                <div className=" md:h-[24rem] h-[16rem] w-full "
                style={{backgroundImage:`url(${demoImage})`}}
                >   <div className="h-full flex flex-col justify-center items-center md:gap-5 gap-2 bg-black/75">

                    <h1 className="font-bold md:text-5xl lg:text-6xl sm:text-3xl text-xl text-white">Get 
                        <span className="text-elite-green"> Special Offer </span>  For Today</h1>
                    <h1 className="font-bold  md:text-5xl lg:text-6xl sm:text-3xl text-xl text-white">With Rona Printing</h1>
                    <EliteButton  variant="secondary">Let's Try Ricoz</EliteButton>
                </div>
                </div>
          
        </>
    )
}