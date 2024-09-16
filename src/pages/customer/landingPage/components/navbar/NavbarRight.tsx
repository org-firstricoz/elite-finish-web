import { EliteButton, EliteIcons } from "@/components"
import React from "react"

const NavbarRight: React.FC = () => {
    return (
        <div className="flex items-center">
            <div className="pe-4  border-r-[1px] border-[#50555C]">
                <EliteIcons size="22px" variant="cart" />
            </div>
            <div className="ps-4">
                <EliteButton
                    variant="primary"
                    className="px-2 py-1 text-black"
                > Sign Up! </EliteButton>
            </div>
        </div>
    )
}
export default NavbarRight