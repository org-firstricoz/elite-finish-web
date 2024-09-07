import React from "react"

const ImageCard: React.FC = () => {
    return (
        <>
            <div className="group relative h-full w-full overflow-hidden  ">

                <img src="/public/assets/demoimage.png" alt=""
                    className=" object-cover h-full w-full"
                />
                <div className="absolute inset-0    bg-gradient-to-b from-transparent via-black/25 to-black translate-y-[35rem] group-hover:-translate-y-0 transition ease-in-out delay-300  "></div>
                <div className="absolute flex  flex-col md:gap-3 gpa-1  md:px-12 px-3 transition ease-in-out delay-300  md:group-hover:-translate-y-36 group-hover:-translate-y-[5rem] text-white">
                    <div className="md:text-4xl text-lg font-semibold">
                        <h1 className="leading-3 sm:leading-relaxed">Flower</h1>
                        <h1>3D Print</h1>
                    </div>
                    <p className="md:text-sm text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </>
    )
}
export default ImageCard