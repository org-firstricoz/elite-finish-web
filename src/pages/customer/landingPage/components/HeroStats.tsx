import React from "react"

const HeroStats: React.FC = () => {
    return (
        <div className=" absolute bottom-12 flex md:gap-24 gap-12 justify-center w-full md:px-24 px-4 ">
            <div>
                <h1 className="text-3xl font-semibold text-elite-red">20+</h1>
                <p  className="text-gray-400">Years of experience</p>
            </div>

            <div>
                <h1 className="text-3xl font-semibold text-elite-red">20+</h1>
                <p  className="text-gray-400">Years of experience</p>
            </div>

            <div>
                <h1 className="text-3xl font-semibold text-elite-red">20+</h1>
                <p className="text-gray-400">Years of experience</p>
            </div>
        </div>
    )
}
export default HeroStats