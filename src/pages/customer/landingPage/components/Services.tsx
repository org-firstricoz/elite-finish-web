import { EliteButton, EliteIcons, EliteImageCard, EliteWideScreenHandler } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import React from "react"
import { paintergirl, painterman2, painterman3, painterman4 } from "@/constants/imagePath"

const Services: React.FC = () => {

    const dataForCard = [
        {
            image: paintergirl,
            title: "interior painting",
            time: "4",
            price: "60"
        },
        {
            image: painterman3,
            title: "Commercial painting",
            time: "4",
            price: "60"
        },
        {
            image: painterman2,
            title: "interior painting",
            time: "4",
            price: "60"
        },

        {
            image: painterman4,
            title: "interior painting",
            time: "4",
            price: "60"
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
        <EliteWideScreenHandler>
            <div className="flex flex-col gap-10  h-auto w-full my-12 pb-16">
                {/* heading */}
                <EliteHeading>Comprehensive Painting Services</EliteHeading>
                {/*image cards */}
                <div ref={cardContainerRef} className=" flex gap-16 overflow-x-auto hide-scrollbar  scroll-smooth md:ps-24 ps-4 ">
                    {
                        dataForCard.map((item, index) => {
                            return <EliteImageCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                time={item.time}
                                price={item.price}
                            />
                        })
                    }


                </div>

                {/* button */}
                <div className="w-full flex items-center justify-center gap-4 md:gap-24 md:px-12 px-4 3xl:px-[25rem] ">
                    <button onClick={() => scrollHandler("prev")} className="-scale-x-[1]">
                        <EliteIcons variant="play" className="invert" />
                    </button>
                    <EliteButton className=" py-3 sm:px-16 px-8 sm:text-xl text-md font-karlaRegular font-thin">view all services</EliteButton>
                    <button onClick={() => scrollHandler("next")}>
                        <EliteIcons variant="play" className="invert" />
                    </button>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Services