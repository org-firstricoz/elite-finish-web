import { EliteButton, EliteIcons, EliteWideScreenHandler } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import React from "react"

const Booking: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            {/* <div className="md:px-24 px-2" >
                <h1 className="text-8xl text-center  "
                    style={{ fontSize: "clamp(1.8rem, 4vw + 2rem, 8vw)" }}
                >Got a project in mind?</h1>
                <EliteIcons className="my-8" variant="arrow" />
                <div className="  flex justify-center">
                    <p className="text-sm md:w-4/12 w-9/12  ">We deploy world-class creative design, team on demand. that can design surest measure’s of success is when a client partner with build, ship scale your vision most efficient.</p>
                </div>
                <div className="flex md:justify-end justify-center">
                    <EliteButton
                        className=" py-4 px-8 my-12 font-karlaRegular ">
                        Booking A Schedule
                    </EliteButton>
                </div>
            </div> */}

            <div className=" h-auto w-full md:px-24 px-4 my-12 text-white">
                <div className= "h-[16rem] bg-elite-green rounded-2xl flex flex-col gap-3 items-center justify-center">
                    <EliteHeading>Got a project in mind?</EliteHeading>
                    <p className="sm:text-sm text-xs text-center sm:w-7/12 w-11/12 ">We deploy world-class creative design, team on demand. that can design surest measure’s of success is when a client partner with build, ship scale your vision most efficient.</p>
                    <EliteButton className="rounded-lg px-6" variant="secondary">Booking  A Schedule</EliteButton>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Booking