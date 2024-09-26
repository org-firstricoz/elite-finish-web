import { EliteButton, EliteIcons, EliteWideScreenHandler } from "@/components"
import React from "react"

const Booking: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            <div >
                <h1 className="text-8xl text-center  md:px-12 px-2"
                    style={{ fontSize: "clamp(1.8rem, 4vw + 2rem, 8vw)" }}
                >Got a project in mind?</h1>
                <EliteIcons className="my-8" variant="arrow" />
                <div className="  flex justify-center">
                    <p className="text-sm md:w-4/12 w-9/12  ">We deploy world-class creative design, team on demand. that can design surest measure’s of success is when a client partner with build, ship scale your vision most efficient.</p>
                </div>
                <div className="flex md:justify-end justify-center md:px-12 px-2">
                    <EliteButton
                        className=" py-4 px-8 my-12 font-karlaRegular ">
                        Booking A Schedule
                    </EliteButton>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Booking