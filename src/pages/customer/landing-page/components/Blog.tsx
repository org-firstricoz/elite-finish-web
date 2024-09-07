import { EliteLargeHeading, EliteSmallHeading } from "@/components"
import BlogCard from "@/components/BlogCard"
import React from "react"

const blogData = [
    {
        id: 1,
        heading: "Experience the Power of Digital Printing",
        content: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitconvallis. Tempor facilisi pellent",
    },
    {
        id: 2,
        heading: "Experience the Power of Digital Printing",
        content: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitconvallis. Tempor facilisi pellent",
    },
    {
        id: 3,
        heading: "Experience the Power of Digital Printing",
        content: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitconvallis. Tempor facilisi pellent",
    },
    {
        id: 4,
        heading: "Experience the Power of Digital Printing",
        content: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitconvallis. Tempor facilisi pellent",
    },

]
const Blog = () => {
    return (
            <div className=" w-full ">
                <div className="h-auto ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <EliteSmallHeading heading="Blog"/>
                            <div className=" lg:text-4xl md:text-3xl sm:text-2xl text-[5.5vw] text-center font-bold sm:font-semibold ">
                                <h1 ></h1>
                                <h1></h1>
                            </div>
                            <EliteLargeHeading headings={["Digital Printing Industry Update Latest","News and Information"]}
                            className="text-[5.5vw] leading-3 md:leading-relaxed"
                            />
                        </div>
                    </div>
                    <div className="  min-h-screen h-auto   lg:px-32 sm:px-8 px-2">
                        <div className="grid grid-cols-12 py-12 gap-4 ">
                            {
                                blogData.map((blog, i) =>
                                    <React.Fragment key={i} >
                                        <div className="md:col-span-6  col-span-12 flex justify-center ">
                                            <BlogCard
                                                id={blog.id}
                                                heading={blog.heading}
                                                content={blog.content}
                                            />
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Blog