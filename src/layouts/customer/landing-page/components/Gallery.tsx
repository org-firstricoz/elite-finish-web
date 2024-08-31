const Gallery = () => {
  return (
    <>
            <div className=" w-full ">
                <div className="grid grid-rows-12 min-h-scree h-auto ">
                    <div className="row-span-3 bg-blue-50">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <h1 className="md:font-bold font-semibold md:text-md text-sm ">Gallery</h1>
                            <div className=" lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-bold sm:font-semibold ">
                                <h1 >Spectacular Works from Our</h1>
                                <h1>Digital Print Services</h1>
                            </div>
                        </div>
                    </div>
                   <div className="row-span-9 bg-pink-200 h-screen">

                   </div>
                </div>

            </div>
        </>
  )
}
export default Gallery