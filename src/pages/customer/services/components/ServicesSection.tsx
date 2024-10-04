
import React from "react"
import { EliteWideScreenHandler } from "@/components"
import PaintingServices from "./PaintingServices"
import OtherServices from "./OtherServices"

const ServicesSection: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            <div className="h-auto w-full md:ps-24 ps-4 rounded-3xl shadow-md">

                <PaintingServices />
                <OtherServices />
            </div>
        </EliteWideScreenHandler>
    )
}
export default ServicesSection