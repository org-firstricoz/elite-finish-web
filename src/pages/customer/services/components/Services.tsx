import { EliteImageCard } from "@/components"
import EliteHeading from "@/components/EliteHeading"
import { paintergirl, painterman2, painterman3, painterman4 } from "@/constants/imagePath"
import React from "react"

const Services:React.FC = () => {
    const dataForCard=[
        {
            image:paintergirl,
            title:"interior painting",
            time:"4",
            price:"60"
        },
        {
            image:painterman3,
            title:"Commercial painting",
            time:"4",
            price:"60"
        },
        {
            image:painterman2,
            title:"interior painting",
            time:"4",
            price:"60"
        },
        
        {
            image:painterman4,
            title:"interior painting",
            time:"4",
            price:"60"
        },
       
        {
            image:painterman2,
            title:"interior painting",
            time:"4",
            price:"60"
        },
    ]
  return (
    <div className="min-h-screen h-auto ">
        <EliteHeading classname="text-left py-12">We’re highly rated painting <br /> service provider.
        </EliteHeading>
        <div className="grid grid-cols-12 lg:gap-16 gap-4 ">
            {
                dataForCard.map((item,index)=>{
                    return(
                        <div key={`DATA_${index}`} className="   md:col-span-4 col-span-12 place-items-center">
                        <EliteImageCard
                            image={item.image}
                            title={item.title}
                            time={item.time}
                            price={item.price}
                            className="lg:w-[35rem] w-full"
                        />
                        </div>
                    )
                })
            }
           
        </div>
        
    </div>
  )
}
export default Services