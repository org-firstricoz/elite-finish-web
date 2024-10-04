import { EliteIcons } from "@/components"
import { ChevronDown } from "lucide-react";
import
React from "react"

const Services = [

    { type: "services", title: "Home Painting" },
    { type: "services", title: "Office Painting" },
    { type: "services", title: "Interior Painting" },
    { type: "services", title: "Custom Finishes" },
    { type: "services", title: "Commercial Painting" },
    { type: "services", title: "Exterior Painting" }
];
const NavigationLinks = [
    { type: "nav", title: "About", href: "/about" },
    { type: "nav", title: "Services", href: "/services" },
    { type: "nav", title: "Work", href: "/work" },
    { type: "nav", title: "Blog", href: "/blog" },
    { type: "nav", title: "Team", href: "/team" },
    { type: "nav", title: "Contact", href: "/contact" }
];
const Contact = [
    { type: "contact", title: "New Delhi" },
    { type: "contact", title: "+91 1234567890" },
    { type: "contact", title: "info@warehouseonhire.com" },
]

const Footer: React.FC = () => {
    const [visibleType, setVisibleType] = React.useState("")

    const isVisibleHandler = (type: string) => {
        if (visibleType === type) {
            setVisibleType("")
        } else {
            setVisibleType(type)
        }
    }

    return (
        <div className="grid grid-cols-12 bg-elite-dark pt-12 pb-20 px-4 md:px-12">
            <div className="md:col-span-6 col-span-12 flex flex-col  gap-16">
                <EliteIcons className="invert" variant="EliteLogo" />
                <div className="flex items-center    gap-4">
                    <EliteIcons size=".7rem" variant="fb" />
                    <EliteIcons size="1.2rem" variant="x" />
                    <EliteIcons size="1.2rem" variant="insta" />
                </div>

                <div className="">
                    <h1 className="text-lg font-semibold mb-2 text-white">Get latest updates and special <br />offers</h1>

                    <div className="flex items-center  bg-white border-2 w-fit rounded-full  gap-2 bg-elite-whiteSmoke  ps-4  ">
                        <input type="email"
                            className="border-0 bg-elite-whiteSmoke  rounded-full focus:border-0  focus:outline-none"
                            placeholder="Example@gamail.com" />
                        <div className="bg-elite-yellow flex justify-center items-center  bg-elite-green rounded-full  p-3 aspect-square scale-75">
                            <EliteIcons size="1.8rem" variant="send" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" md:col-span-6 col-span-12 text-white md:mt-0 ">
                <div className="grid grid-cols-3   ">
                    <div className="md:col-span-1 col-span-3  mt-12 md:mt-0 ">
                        <h1 className="font-bold flex justify-between items-center  md:border-b-0 border-b-[1px] border-white/75 pb-1" >
                            Services
                            <ChevronDown
                                className={`md:hidden ${visibleType === "services" ? "rotate-180" : "rotate-0"}`}
                                onClick={() => isVisibleHandler("services")} />
                        </h1>
                        <div className="flex flex-col gap-4 py-6 ">
                            {
                                Services.map((service, index) =>
                                    <h1 key={`SERVICES_${index}`}
                                        className={`text-sm text-white ${visibleType === "services" ? "block" : "hidden md:block"}`}
                                    >
                                        {service.title}
                                    </h1>
                                )
                            }
                        </div>
                    </div>
                    <div className="md:col-span-1 col-span-3  mt-1 md:mt-0 ">
                        <h1 className="font-bold flex justify-between items-center  md:border-b-0 border-b-[1px] border-white/75 pb-1" >
                            Company
                            <ChevronDown
                                className={`md:hidden ${visibleType === "nav" ? "rotate-180" : "rotate-0"}`}
                                onClick={() => isVisibleHandler("nav")} />
                        </h1>
                        <div className="flex flex-col gap-4 py-6">
                            {
                                NavigationLinks.map((service, index) =>
                                    <h1 key={`NAVIGATION_${index}`}
                                        className={`text-sm text-white  ${visibleType === "nav" ? "block" : "hidden md:block"}`}
                                    >
                                        {service.title}
                                    </h1>
                                )
                            }
                        </div>
                    </div>
                    <div className="md:col-span-1 col-span-3 mt-1 md:mt-0">
                        <h1 className="font-bold flex justify-between items-center  md:border-b-0 border-b-[1px] border-white/75 pb-1" >
                            Contact
                            <ChevronDown
                                 className={`md:hidden ${visibleType==="contact" ? "rotate-180": "rotate-0"}`} 
                                onClick={() => isVisibleHandler("contact")} />
                        </h1>
                        <div className="flex flex-col gap-4 py-6">
                            {
                                Contact.map((con, index) =>
                                    <h1 key={`CONTACT${index}`}
                                        className={`text-sm text-white  ${visibleType === "contact" ? "block" : "hidden md:block"}`}

                                    >
                                        {con.title}
                                    </h1>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer