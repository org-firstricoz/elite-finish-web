import { EliteWideScreenHandler } from "@/components"
import React from "react"
import { PaintingServices } from "../../services/components"

const Services: React.FC = () => {



    return (
        <EliteWideScreenHandler>
            <div className="h-auto w-full  md:ps-24 ps-4  rounded-3xl shadow-md">
                <PaintingServices />
            </div>
        </EliteWideScreenHandler>
    )
}
export default Services