import ImageCard from "@/components/ImageCard"

const Gallery = () => {
    return (
        <>
            <div className=" w-full  mt-24">
                <div className="min-h-auto ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <h1 className="font-semibold md:text-lg text-sm mb-4">Gallery</h1>
                            <div className=" lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-bold sm:font-semibold ">
                                <h1 >Spectacular Works from Our</h1>
                                <h1>Digital Print Services</h1>
                            </div>
                        </div>
                    </div>
                    <div className=" min-h-auto h-screen my-20   lg:px-32 sm:px-8 px-2 ">

                        <div className="grid grid-cols-12 h-1/2 gap-4  md:mb-6  mb-4">
                            <div className=" col-span-6  ">
                                <ImageCard />
                            </div>
                            <div className="col-span-3  ">
                                <ImageCard />
                            </div>
                            <div className="col-span-3 h-full">
                                <ImageCard />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 h-1/2   gap-4 ">
                            <div className="col-span-4">
                                <ImageCard />
                            </div>
                            <div className="col-span-4 bg-slate-200/50  ">
                                <ImageCard />
                            </div>
                            <div className="col-span-4">
                                <ImageCard />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Gallery