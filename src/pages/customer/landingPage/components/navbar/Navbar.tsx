import React from "react"
import Navlinks from "./Navlinks"
import NavbarRight from "./NavbarRight"
import { EliteIcons } from "@/components"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
    return (
        <nav className="md:px-12 px-4 py-4 bg-elite-bluelight flex justify-between items-center rounded-b-[40px]">
            <Link to={'/'}>
                <EliteIcons size="6rem" variant="EliteLogo" />
            </Link>
            <Navlinks />
            <NavbarRight />
        </nav>
    )
}
export default Navbar