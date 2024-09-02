import React from "react"

const ImageCard: React.FC = () => {
    return (
        <>
            <div className="group relative h-full w-full overflow-hidden  bg-red-800/50">

                <img src="/public/assets/demoimage.png" alt=""
                    className=" object-cover h-full w-full"
                />

                <div className="absolute inset-0    bg-gradient-to-b from-transparent via-black/25 to-black translate-y-[20rem] group-hover:-translate-y-0 transition ease-in-out delay-300  "></div>
                <div className="absolute flex  flex-col gap-3  px-12 transition ease-in-out delay-300  group-hover:-translate-y-36 text-white">
                    <div className="text-4xl font-semibold">
                        <h1>Flower</h1>
                        <h1>3D Print</h1>
                    </div>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </>
    )
}
export default ImageCard