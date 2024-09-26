import { EliteIcons } from "@/components"
import 
React from "react"

const Footer: React.FC = () => {
    const Services = [

        { title: "Home Painting" },
        { title: "Office Painting" },
        { title: "Interior Painting" },
        { title: "Custom Finishes" },
        { title: "Commercial Painting" },
        { title: "Exterior Painting" }
    ];
    const NavigationLinks = [
        { title: "About", href: "/about" },
        { title: "Services", href: "/services" },
        { title: "Work", href: "/work" },
        { title: "Blog", href: "/blog" },
        { title: "Team", href: "/team" },
        { title: "Contact", href: "/contact" }
      ];
      const Contact = [
        {title : "New Delhi"},
        {title : "+91 1234567890"},
        {title : "info@warehouseonhire.com"},
      ]
      

    return (
        <div className="grid grid-cols-12 bg-black pt-12 pb-20 px-4 md:px-12">
            <div className="md:col-span-6 col-span-12 flex flex-col  gap-16">
                <EliteIcons  className="invert" variant="EliteLogo" />
                <div className="flex items-center    gap-4">
                    <EliteIcons  size=".7rem" variant="fb" />
                    <EliteIcons size="1.2rem" variant="x" />
                    <EliteIcons size="1.2rem" variant="insta" />
                </div>

                <div className="">
                    <h1 className="text-lg font-semibold mb-2">Get latest updates and special <br />offers</h1>

                    <div className="flex items-center  bg-white border-2 w-fit rounded-full  gap-2 bg-elite-whiteSmoke  ps-4  ">
                        <input type="email"
                            className="border-0 bg-elite-whiteSmoke  rounded-full focus:border-0  focus:outline-none"
                            placeholder="Example@gamail.com" />
                        <div className="bg-elite-yellow flex justify-center items-center  bg-black rounded-full  p-3 aspect-square scale-75">
                            <EliteIcons size="1.8rem" variant="send" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" md:col-span-6 col-span-12 text-white">
                <div className="grid grid-cols-3 ">
                    <div className="col-span-1">
                        <h1 className="font-bold">Services</h1>
                        <div className="flex flex-col gap-4 mt-6">
                            {
                                Services.map((service, index) =>
                                    <h1 key={`SERVICES_${index}`}
                                    className="text-sm  text-white"
                                    >
                                        {service.title}
                                    </h1>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-span-1">
                    <h1 className="font-bold">Company</h1>
                        <div className="flex flex-col gap-4 mt-6">
                            {
                                NavigationLinks.map((service, index) =>
                                    <h1 key={`NAVIGATION_${index}`}
                                    className="text-sm  text-white"
                                    >
                                        {service.title}
                                    </h1>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-span-1">
                    <h1 className="font-bold">Contact</h1>
                        <div className="flex flex-col gap-4 mt-6">
                            {
                                Contact.map((con, index) =>
                                    <h1 key={`CONTACT${index}`}
                                    className="text-sm  text-white w-full truncate text-wrap"
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