import React, { useEffect, useState } from "react";
import Navlinks from "./Navlinks";
import NavbarRight from "./NavbarRight";
import { EliteIcons,} from "@/components";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { motion, useAnimation, useInView } from "framer-motion";

interface NavbarProps {
    heroRef: React.RefObject<HTMLDivElement>;
    isMainHero?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ heroRef, isMainHero }) => {
    const [isShowMobileNav, setIsShowMobileNav] = React.useState(false);
    const [lastScrollY, setLastScrollY] = useState(0); // To track last scroll position
    const [isScrollingUp, setIsScrollingUp] = useState(true); // To track scroll direction
    const controls = useAnimation();
    const isHeroInView = useInView(heroRef, { once: false });

    // Handling navbar hide on scroll down and show on scroll up
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setIsScrollingUp(false); // User is scrolling down
        } else {
            setIsScrollingUp(true); // User is scrolling up
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


    useEffect(() => {
        if (isHeroInView) {
            controls.start({ backgroundColor: 'rgba(255, 255, 255, 0)' });

            // controls.start({ backgroundColor: 'red' });
        } else {
            controls.start({ backgroundColor: '#ffff', color: '#000000' });
        }
    }, [isHeroInView, controls]);

    return (

        < >
            <MobileNavbar isShowNav={isShowMobileNav} setShowNav={setIsShowMobileNav} />
            {/* Animated navbar with scroll behavior */}
            <motion.nav
                className={`fixed top-0 right-0 z-[55]   w-full   md:px-24 px-4 py-4 flex justify-between items-center   ${!isScrollingUp ? '-translate-y-full' : 'translate-y-0'}`}
                animate={controls}
                initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
            >
                <div className="flex items-center gap-1">
                    <Menu
                        onClick={() => setIsShowMobileNav(!isShowMobileNav)}
                        className={`md:hidden block ${isHeroInView ? 'invert' : 'invert-0'}`}
                        size={28}
                        strokeWidth={1.25}
                    />
                    <Link to={'/'}>
                        <EliteIcons size="6rem" variant="EliteLogo"
                            className={`invert md:invert-0 ${isHeroInView ? 'invert' : 'invert-0'}`} />
                    </Link>
                </div>
                <Navlinks isHeroInView={isHeroInView} isMainHero={isMainHero} />
                <NavbarRight />
            </motion.nav>



        </>
    );
};

export default Navbar;
