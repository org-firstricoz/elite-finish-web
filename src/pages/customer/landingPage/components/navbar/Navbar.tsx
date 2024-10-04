import React, { useEffect, useState } from "react";
import Navlinks from "./Navlinks";
import NavbarRight from "./NavbarRight";
import { EliteIcons } from "@/components";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { motion, useAnimation, useInView,  } from "framer-motion"; // Import framer-motion

interface NavbarProps {
    heroRef: React.RefObject<HTMLDivElement>; // Receiving the hero section reference
}

const Navbar: React.FC<NavbarProps> = ({ heroRef }) => {
    const [isShowMobileNav, setIsShowMobileNav] = React.useState(false);
    const controls = useAnimation(); 
    const isHeroInView = useInView(heroRef, { once: false }); 

    useEffect(() => {
        if (isHeroInView) {
            console.log('>>>>>>>>>>>', heroRef, isHeroInView)
            controls.start({ backgroundColor: 'rgba(255, 255, 255, 0)' }); 
        }
        else {
            console.log('>>>>>>>>>>>', isHeroInView)
            controls.start({ backgroundColor: '#ffffff', color: '#000000'}); 
        }
    }, [isHeroInView, controls]);

    return (
        <div>
            {isShowMobileNav && <MobileNavbar setShowNav={setIsShowMobileNav} />}
            {/* Animated navbar */}
            <motion.nav
                className={`fixed top-0 z-[55]  w-full md:px-24 px-4 py-4 flex justify-between items-center transition-all duration-300`}
                animate={controls}
                initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
            >
                <div className="flex items-center gap-1">
                    <Menu 
                    onClick={() => setIsShowMobileNav(!isShowMobileNav)} 
                    className={`md:hidden block  ${isHeroInView ? 'invert' : 'invert-0'}`} 
                    size={28} 
                    strokeWidth={1.25} />
                    <Link to={'/'}>
                        <EliteIcons size="6rem" variant="EliteLogo" className={`invert md:invert-0 ${isHeroInView ? 'invert' : 'invert-0'}`}/>
                    </Link>
                </div>
                <Navlinks  />
                <NavbarRight />
            </motion.nav>
        </div>
    );
};

export default Navbar;
