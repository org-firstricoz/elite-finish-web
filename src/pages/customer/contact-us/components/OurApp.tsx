import { AppstoreButton, PlaystoreButton } from "@/constants/imagePath"
import React from "react"
import MobileApp from "../../landingPage/components/MobileApp"
import { EliteWideScreenHandler } from "@/components"

const OurApp: React.FC = () => {
    return (
        <EliteWideScreenHandler>

            <div className=" h-auto my-12  ">
                <div className="grid grid-cols-12  ">
                    <div className="col-span-12 md:col-span-6 md:order-1 order-2 flex flex-col justify-center items-center gap-5 md:px-24 px-4">
                        <h1 className="font-bold text-center md:text-left md:text-5xl" style={{ fontSize: "clamp(1rem , 3.6vw, 4rem)" }}>
                            DOWNLOAD APP & <br />
                            GET THE VOUCHER!
                        </h1>
                        <p className="text-gray-500 sm:text-lg text-sm  text-center">
                            Get 30% off for first transaction using <br />
                            Rondovision mobile app for now.
                        </p>
                        <div className="flex gap-2 justify-center">
                            <img className=" sm:h-12 h-10" src={AppstoreButton} alt="appstoreButton" />
                            <img className="sm:h-12 h-10" src={PlaystoreButton} alt="playstoreButton" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 order-1 md:order-2  h-full ">

                        <MobileApp />
                    </div>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default OurApp