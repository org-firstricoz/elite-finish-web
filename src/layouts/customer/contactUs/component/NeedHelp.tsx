import React from "react"
import { Shape } from "../../landing-page/components/Shapes"

const NeedHelp: React.FC = () => {
    return (
        <div className="relative h-full z-40">
            <div className="flex flex-col  justify-center items-center px-14 pt-20 pb-40 md:pb-0 ">
                <div className="flex flex-col gap-10">
                    <h1 className="text-3xl font-semibold">Need More Help?</h1>
                    <p className="text-base ">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor.</p>
                    <div className="flex flex-col gap-3">

                        <div className="flex gap-4 items-center">
                            <Shape variant="callIcon" className="invert w-5" />
                            <p className="text-xl font-semibold">+14 5464 8272</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Shape variant="messageIcon" className="invert w-5" />
                            <p className="text-xl font-semibold">Ricoz@domain.com</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Shape variant="locationIcon" className="invert w-5" />
                            <p className="text-xl font-semibold">George Tower 192,Burn Swiss </p>
                        </div>
                    </div>
                </div>
            </div>

            <Shape variant="squareOrange" className=" absolute md:bottom-[18vh] bottom-4 md:left-[5vw] left-10 scale-75 z-[-1]"/>
            <Shape variant="triangleVoilet" className=" absolute  bottom-6 md:left-[20vw] left-1/2 scale-75 z-[-1]"/>
            <Shape variant="pathGreen" className=" absolute md:bottom-[29vh] bottom-10 md:right-[5vw] right-10 scale-50 z-[-1]"/>
        </div>
    )
}
export default NeedHelp