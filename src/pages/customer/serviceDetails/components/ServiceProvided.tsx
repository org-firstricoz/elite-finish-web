import { Shape } from "@/components/Shapes"

const ServicesProvided = () => {
    return (
            <div className="h-full w-full  lg:px-32 sm:px-8 px-2">
                <div className="w-full">
                    <h1 className="font-semibold md:text-4xl text-2xl mb-4 text-center">Services Provides</h1>

                    <div className="my-20 grid grid-cols-2 gap-10 md:flex md:justify-between">
                        <div className="flex justify-center items-center flex-col gap-2  md:gap-5">
                            <Shape variant="docs2" className=" sm:h-auto w-28 md:w-auto" />
                            <div className="text-center  sm:text-xl text-lg font-semibold">
                                <h1>Document</h1>
                                <h1>Photocopy</h1>
                            </div>
                        </div>

                        <div className="flex justify-center items-center flex-col gap-2  md:gap-5">
                            <Shape variant="text" className="sm:h-auto w-28 md:w-auto" />
                            <div className="text-center   sm:text-xl text-lg font-semibold">
                                <h1>Making Stamps</h1>
                                <h1>And Seals</h1>
                            </div>
                        </div>

                        <div className="flex justify-center items-center flex-col text-xl font-semibold gap-2  md:gap-5">
                            <Shape variant="docBinding" className="sm:h-auto w-28 md:w-auto" />
                            <div className="text-center sm:text-xl text-lg font-semibold">
                                <h1>Document</h1>
                                <h1>Binding</h1>
                            </div>
                        </div>

                        <div className="flex justify-center items-center flex-col gap-2  md:gap-5">
                            <Shape variant="printer" className=" sm:h-auto w-28 md:w-auto" />
                            <div className="text-center  sm:text-xl text-lg  font-semibold ">
                                <h1>Document</h1>
                                <h1>Lamination</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ServicesProvided