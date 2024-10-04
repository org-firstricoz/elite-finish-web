import { EliteIcons } from "./EliteIcons"


const EliteServiceButton = ({price}:{price : string}) => {
    return (
        <div>
            <button className="bg-[#262626] hover:bg-black/75 text-white rounded-xl lg:px-4 px-2  py-2 flex justify-between items-center lg:gap-4 gap-2">
                <h1 className="text-start md:text-sm text-xs ">From <br />Rs.{price } sqft</h1>
                <EliteIcons variant="playWhite" />
            </button>
        </div>
    )
}
export default EliteServiceButton