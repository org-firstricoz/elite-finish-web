import { ChevronDown, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Shape } from "../../../../components/Shapes"
import React from "react"

type ShapeVariant = "callIcon" | "messageIcon" | "locationIcon" | "null" | "triangleGreen" | "halfCircleGreen" | "brokeCircle" | "squareVoilet" | "brokeCircleVoilet" | "crownIcon" | "docsIcon" | "teamIcon" | "arrowDownIcon";


const SERVICES = {
    id: 1,
    content: ["Digital Print", "Doc Print", "Shirt Print", "Sticker Print"]
}

const LINKS = {
    id: 2,
    content: ["Term of use", "Privacy Policy"]
}

const CONTACT = {
    id: 3,
    content: [
        {
            redirect: '/#',
            content: "+14 5464 8272",
            icon: "callIcon" as ShapeVariant
        },
        {
            redirect: '/#',
            content: "rona@domain.com",
            icon: "messageIcon" as ShapeVariant
        },
        {
            redirect: '/#',
            content: "",
            icon: "locationIcon" as ShapeVariant
        },
    ]

}

export const Footer: React.FC = () => {
    const [isShowOptions, setShowOptions] = React.useState<number | null>()

    const optionShowhandler = (id: number) => {
        setShowOptions((prev) => prev === id ? null : id)
    }
    return (
            <div className=" w-full min-h-screen h-auto flex items-center">
                <div className="md:min-h-[65%] min-h-full  h-auto bg-elite-blue w-full flex flex-col items-center justify-evenly  lg:px-32 sm:px-8 px-2">
                    <h1 className="text-2xl font-bold text-center text-white py-6 lg:py-12">Ricoz</h1>
                    <div className="w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 border-y-2 border-y-white py-8">

                        <div className="col-span-1 text-white w-full">
                            <div className="flex justify-between w-full  border-b-[1px] border-b-white/75 md:border-b-0 mb-2 md:mb-0">
                                <h1 className="text-xl md:pb-8 pb-2  " >Services</h1>
                                <ChevronDown className={`block md:hidden transition duration-350 ease-in-out ${isShowOptions === SERVICES.id ? "rotate-180" : ""}`}
                                    onClick={() => { optionShowhandler(SERVICES.id) }} />
                            </div>
                            <div className={` ${isShowOptions === SERVICES.id ? "flex" : "hidden md:flex "} 
                            flex-col  text-sm gap-2 md:gap-4 mb-5 md:mb-0`}>
                                {
                                    SERVICES.content.map((opt, i) =>
                                        <h1 key={`SERVICES_${i}`}><a href="/#"> {opt} </a></h1>
                                    )
                                }
                            </div>
                        </div>

                        {/* links*/}
                        <div className="col-span-1 text-white ">
                            <div className="flex justify-between w-full  border-b-[1px] border-b-white/75 md:border-b-0 mb-2 md:mb-0">
                                <h1 className="text-xl md:pb-8 pb-2  " >Links</h1>
                                <ChevronDown className={`block md:hidden transition duration-350 ease-in-out ${isShowOptions === LINKS.id ? "rotate-180" : ""}`}
                                    onClick={() => { optionShowhandler(LINKS.id) }} />
                            </div>
                            <div className={` ${isShowOptions === LINKS.id ? "flex" : "hidden md:flex "}
                             flex-col  text-sm gap-2 md:gap-4 mb-5 md:mb-0`}>
                                {
                                    LINKS.content.map((opt, i) =>
                                            <h1 key={`LINKS_${i}`}><a href="/#"> {opt} </a></h1>
                                        )
                                }
                            </div>
                        </div>

                        {/* contact us */}
                        <div className="col-span-1 text-white ">
                            <div className="flex justify-between w-full  border-b-[1px] border-b-white/75 md:border-b-0 mb-2 md:mb-0">
                                <h1 className="text-xl md:pb-8 pb-2  " >Contact Us</h1>
                                <ChevronDown className={`block md:hidden transition duration-500 ease-in-out ${isShowOptions === CONTACT.id ? "rotate-180" : ""}`}
                                    onClick={() => { optionShowhandler(CONTACT.id) }} />
                            </div>
                            <div className={` ${isShowOptions === CONTACT.id ? "flex" : "hidden md:flex "} flex-col  text-sm gap-2 md:gap-4`}>
                                {
                                    CONTACT.content.map((opt, i) =>
                                            <div key={`CONTACT_${i}`} className="flex gap-3 items-center  ">
                                                <Shape variant={opt ? opt.icon : "null"} className="h-5 w-5 " />
                                                <p className=" text-sm ">{opt.content}</p>
                                            </div>
                               ) }
                            </div>
                        </div>

                        <div className="md:col-span-1 my-5  lg:my-0   text-white h-auto  ">
                            <h1 className="text-xl pb-8" >Maps</h1>
                            <div className="w-full h-full flex flex-col  text-sm gap-2">
                                <div className="w-2/4 h-[15vw] md:h-[4vw] bg-red-200 bg-cover"
                                    style={{ backgroundImage: `url(${'/public/assets/mapdemo.png'})` }}
                                >

                                </div>
                            </div>
                        </div>


                        <div className="md:col-span-1 my-5 lg:my-0 text-white ">
                            <h1 className="text-xl pb-8" >Social Media</h1>
                            <div className="flex   text-sm gap-2">
                                <div className="bg-white rounded-full p-2 ">
                                    <Instagram color="#012069" size={20} />
                                </div>
                                <div className="bg-white rounded-full p-2 ">
                                    <Facebook color="#012069" size={20} fill="#012069" />
                                </div>
                                <div className="bg-white rounded-full p-2 ">
                                    <Youtube color="#012069" size={20} />
                                </div>
                                <div className="bg-white rounded-full p-2 ">
                                    <Twitter color="#012069" size={20} fill="#012069" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-white text-sm font-light py-6 lg:py-12 ">copyright rona@2023 all right reserved</h1>
                    </div>
                </div>
            </div>
    )
}