import PhotoGrid from "./PhotoGrid"

const PhotoGallery = () => {
    return (
        <>
            <div className=" w-full ">
                <div className="h-auto ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <h1 className="font-semibold md:text-lg text-sm mb-4">Gallery</h1>
                            <div className=" lg:text-5xl md:text-3xl sm:text-2xl text-[6vw] text-center font-bold sm:font-semibold ">
                                <h1 >Spectacular Works from Our</h1>
                                <h1>Digital Print Services</h1>
                            </div>
                        </div>
                    </div>
                    <div className="   h-auto  lg:px-32 sm:px-8 px-2 my-12">
                        <PhotoGrid />
                    </div>
                </div>

            </div>
        </>
    )
}
export default PhotoGallery