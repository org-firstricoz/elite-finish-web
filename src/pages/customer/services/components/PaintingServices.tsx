import { EliteBtnAnimWrapper, EliteServiceCard } from "@/components"
import { Service1, Service2, Service3 } from "@/constants/imagePath"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

const PaintingServices: React.FC = () => {

    const ServiceData = [
        {
            image: Service1,
            title: "Interior painting",
            price: "60"
        },
        {
            image: Service2,
            title: "Ecterior painting",
            price: "60"
        },
        {
            image: Service3,
            title: "interior painting",
            price: "60"
        },
        {
            image: Service1,
            title: "Commercial painting",
            price: "60"
        },
        {
            image: Service2,
            title: "Ecterior painting",
            price: "60"
        },
        {
            image: Service3,
            title: "interior painting",
            price: "60"
        },
    ]

    const cardContainerRef = React.useRef<HTMLDivElement>(null);
    const scrollHandler = (action: string) => {
        if (cardContainerRef.current && action == "next") {
            cardContainerRef.current.scrollLeft += 300;
        }
        if (cardContainerRef.current && action == "prev") {
            cardContainerRef.current.scrollLeft -= 300;
        }
    }


    return (

        <div className="pt-12">
            <h1 className="font-semibold md:text-4xl text-2xl py-6">Painting Services</h1>
            <div ref={cardContainerRef} className="flex gap-4 overflow-x-auto  hide-scrollbar  scroll-smooth">
                {
                    ServiceData.map((item, index) => {
                        return <EliteServiceCard key={`SERVICE_CARDS_${index}`} image={item.image} title={item.title} price={item.price} />
                    })
                }
            </div>
            <div className="flex justify-center items-center gap-4 pt-12 pb-6   md:me-24 me-4">
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
export default PaintingServices