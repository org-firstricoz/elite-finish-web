import React from "react"
import Navlinks from "./Navlinks"
import NavbarRight from "./NavbarRight"
import { EliteIcons } from "@/components"

const Navbar: React.FC = () => {
    return (
            <nav className="md:px-12 px-2 py-4 border-b-[1px] flex justify-between items-center">
                <EliteIcons size="6rem" variant="EliteLogo" />
                <Navlinks />
                <NavbarRight />
            </nav>
    )
}
export default Navbar