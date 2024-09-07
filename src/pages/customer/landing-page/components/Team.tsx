import React from "react"
import demoImg from '../../../../../public/assets/demoimage.png'
export const Team: React.FC = () => {
    return (
            <div className=" w-full h-auto py-32 flex flex-col justify-center">
                <div className=" min-h-screen h-auto  w-full  lg:px-32 sm:px-8 px-2">
                    <div className="grid grid-cols-2 h-full w-full ">
                        <div className="col-span-1 flex  w-full h-[50vh] ">
                            <div className=" flex-1 bg-cover bg-center "
                                style={{ backgroundImage: `url(${demoImg})` }}></div>
                            <div className="flex flex-col flex-1 justify-center items-center gap-2 bg-Elite-voilet text-white">
                                <h1 className="text-xl font-semibold">Alliana H</h1>
                                <h1 className="text-sm lg:text-md">CEO of  Ricoz printing</h1>
                            </div>
                        </div>
                        <div className="col-span-1 w-full h-full flex justify-center items-center flex-col  ">
                            <div className="">
                                <h1 className="font-semibold md:text-lg text-sm mb-4">Our Team</h1>
                                <div className="lg:text-4xl md:text-3xl sm:text-2xl font-bold sm:font-semibold">
                                    <h1 >Unlimited Creativity</h1>
                                    <h1 > With Our Professional </h1>
                                    <h1 >Team</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 h-full w-full ">

                        <div className="col-span-1 w-full h-full flex justify-center items-center lg:px-28 md:px-16  px-0 text-sm">
                            <p className="text-start">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque</p>
                        </div>
                        <div className="col-span-1 flex  w-full h-[50vh] ">
                            <div className=" flex-1 bg-cover bg-center "
                                style={{ backgroundImage: `url(${demoImg})` }}></div>
                            <div className="flex flex-col flex-1 justify-center items-center gap-2 bg-Elite-voilet text-white">
                                <h1 className="text-xl font-semibold">Alliana H</h1>
                                <h1 className="text-sm lg:text-md">CEO of  Ricoz printing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}