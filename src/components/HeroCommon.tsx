import React from "react";
import { Shape } from "../layouts/customer/landing-page/components/Shapes";

// interface HeroCommmonProps {
//     heading: string;
//     description: string;
// }
export const HeroCommon:React.FC = () => {

    return (
        <div className="relative h-[70vh] bg-elite-blue flex justify-center">
            <div className="flex flex-col justify-center items-center text-white  w-4/5 sm:w-3/5 md:w-1/2 gap-12">
                <h1 className="text-5xl font-bold">About Us</h1>
                <h1 className=" text-xs sm:text-sm text-center leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse, dolor distinctio ullam impedit maiores recusandae aut vel dicta fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur  elit
                </h1>
            </div>
            <Shape variant="brokeCircle"/>
        </div>

    )
}