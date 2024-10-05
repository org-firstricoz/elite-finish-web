import EliteServiceButton from "./EliteServiceButton"
import React from "react"


interface Props{
    image : string,
    title : string,
    price : string
}
const EliteServiceCard:React.FC<Props> = ({image, title, price}) => {
  return (
    <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }} className="sm:h-[25rem] h-[16rem] aspect-[12/16] p-4  rounded-xl flex flex-col  justify-end gap-2 items-end">
        <h1 className="text-white sm:text-2xl text-md  font-bold text-center w-full">{title}</h1>
        <EliteServiceButton price={price} />
    </div>
  )
}
export default EliteServiceCard