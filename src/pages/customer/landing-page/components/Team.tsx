import React from "react"
import demoImg from '../../../../../public/assets/demoimage.png'
export const Team: React.FC = () => {
    return (
        <div className=" w-full h-auto py-32 flex flex-col justify-center">
            <div className=" h-auto  w-full  lg:px-32 sm:px-8 px-2">
                <div className="grid md:grid-cols-2 grid-cols-1 h-full w-full ">
                    <div className="col-span-1 order-2 md:order-1 flex  w-full md:h-[50vh] h-[30vh]  ">
                        <div className=" flex-1 bg-cover bg-center "
                            style={{ backgroundImage: `url(${demoImg})` }}></div>
                        <div className="flex flex-col flex-1 justify-center items-center gap-2  bg-Elite-voilet text-white">
                            <h1 className="text-xl font-semibold">Alliana H</h1>
                            <h1 className="text-sm lg:text-md">CEO of  Ricoz printing</h1>
                        </div>
                    </div>
                    <div className="col-span-1 w-full h-full flex md:order-2 order-1  justify-center md:items-center flex-col  ">
                        <div className="ps-3">
                            <h1 className="font-semibold md:text-lg text-sm mb-4">Our Team</h1>
                            <div className="lg:text-4xl md:text-3xl sm:text-2xl font-bold sm:font-semibold my-4">
                                <h1 >Unlimited Creativity</h1>
                                <h1 > With Our Professional Team</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid md:grid-cols-2 grid-cols-1 h-full w-full ">

                    <div className="col-span-1 order-2 md:order-1 w-full h-full flex justify-center items-center lg:px-28 md:px-16 py-3 md:py-0 px-0 text-sm ">
                        <p className="text-start text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque</p>
                    </div>
                    <div className="col-span-1 order-1 md:order-2 flex  w-full md:h-[50vh] h-[30vh] ">
                        <div className=" flex-1 order-2 bg-cover bg-center "
                            style={{ backgroundImage: `url(${demoImg})` }}>
                        </div>
                        <div className="flex flex-col order-1 md:order-2 flex-1 justify-center items-center gap-2 bg-Elite-voilet text-white">
                            <h1 className="text-xl font-semibold">Alliana H</h1>
                            <h1 className="text-sm lg:text-md">CEO of  Ricoz printing</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}