import BlogCard from "./BlogCard"

const Blog = () => {
    return (
        <>
            <div className=" w-full ">
                <div className="h-auto ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <h1 className="font-semibold md:text-lg text-sm mb-4">Blog</h1>
                            <div className=" lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-bold sm:font-semibold ">
                                <h1 >Digital Printing Industry Update Latest</h1>
                                <h1>News and Information</h1>
                            </div>
                        </div>
                    </div>
                    <div className="  min-h-screen h-auto   lg:px-32 sm:px-8 px-2">
                        <div className="grid grid-cols-12 py-12 gap-4 ">

                            <div className="md:col-span-6  col-span-12 flex justify-center ">
                                <BlogCard />
                            </div>
                            <div className="md:col-span-6  col-span-12 flex justify-center ">
                                <BlogCard />
                            </div>
                            <div className="md:col-span-6   col-span-12 flex justify-center ">
                                <BlogCard />
                            </div>
                            <div className="md:col-span-6   col-span-12 flex justify-center ">
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Blog