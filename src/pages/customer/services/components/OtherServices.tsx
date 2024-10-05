import { EliteBtnAnimWrapper, EliteImageCard } from "@/components"
import React from "react"
import { Painterman7, Wall1, Wall2, Wall3 } from "@/constants/imagePath"
import { ChevronLeft, ChevronRight } from "lucide-react";
const OtherServices: React.FC = () => {

    const otherServicesData = [
        {
            image: Wall1,
            title: "Home Renovation",
            price: "60",
            isLike: true
        },
        {
            image: Wall2,
            title: "Texture ",
            price: "60",
            isLike: false
        },
        {
            image: Wall3,
            title: "Commercial painting",
            price: "60",
            isLike: false
        },
        {
            image: Wall1,
            title: "Home Renovation",
            price: "60",
            isLike: true
        },
        {
            image: Wall2,
            title: "Office Renovation",
            price: "60",
            isLike: false
        },
    ]

    const cardContainerRef = React.useRef<HTMLDivElement>(null);
    const scrollHandler = (action: string) => {
        if (cardContainerRef.current && action == "next") {
            cardContainerRef.current.scrollLeft += 500;
        }
        if (cardContainerRef.current && action == "prev") {
            cardContainerRef.current.scrollLeft -= 500;
        }
    }
    return (
        <div>
            <h1 className="font-semibold md:text-4xl text-2xl py-6 ">Other Services</h1>

            <div ref={cardContainerRef} className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth">
                {
                    otherServicesData.map((item, index) =>
                        <EliteImageCard key={`OTHER_SERVICES_${index}`}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            isLike={item.isLike}
                        />
                    )}
            </div>
            <div className="flex justify-center items-center gap-4 py-12 md:me-24 me-4">
                <EliteBtnAnimWrapper>

                    <button onClick={() => scrollHandler("prev")} className="border-2 border-black p-2  rounded-full mt-4 shadow-md">
                        <ChevronLeft />
                    </button>
                </EliteBtnAnimWrapper>

                <EliteBtnAnimWrapper>
                    <button onClick={() => scrollHandler("next")} className=" p-2  rounded-full mt-4 bg-elite-green shadow-md">
                        <ChevronRight color="white" />
                    </button>
                </EliteBtnAnimWrapper>

            </div>
        </div>
    )
}
export default OtherServices