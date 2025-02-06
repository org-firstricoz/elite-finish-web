import EliteBtnAnimWrapper from "./EliteBtnAnimWrapper"
import { EliteIcons } from "./EliteIcons"


const EliteServiceButton = ({ price }: { price: string }) => {
    return (
        <EliteBtnAnimWrapper>
            <button  className="bg-[#262626] hover:bg-black/75 text-white rounded-xl lg:px-4 px-2  py-2 flex justify-between items-center lg:gap-4 gap-2">
                <h1 className="text-start md:text-sm text-xs ">From <br />Rs.{price} sqft</h1>
                <EliteIcons variant="playWhite" />
            </button>
        </EliteBtnAnimWrapper>

    )
}
export default EliteServiceButton