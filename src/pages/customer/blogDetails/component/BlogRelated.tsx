import React from "react"
import BlogRelatedCard from "./BlogRelatedCard"

const blogData = [
    {
        id: 1,
        heading: "Experience the Power of Digital Printing",
        description: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitconvallis. Tempor facilisi pellent",
    },
    {
        id: 1,
        heading: "Experience the Power of Digital Printing",
        description: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitconvallis. Tempor facilisi pellent",
    },
    {
        id: 1,
        heading: "Experience the Power of Digital Printing",
        description: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitconvallis. Tempor facilisi pellent",
    },
    {
        id: 1,
        heading: "Experience the Power of Digital Printing",
        description: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitconvallis. Tempor facilisi pellent",
    },
]
const BlogRelated: React.FC = () => {
    return (
        <div className="py-12">
            <div>
                <h1 className="lg:text-4xl text-[3vw] font-semibold text-center">Related Blog</h1>
            </div>
            <div className="my-20 grid grid-cols-2 gap-10 md:flex md:justify-between  lg:px-32 sm:px-8 px-2">
                {
                    blogData.map((blog, i) =>
                        <div key={`BLOG_DATA_${i}`} className="flex justify-center items-center flex-col gap-2  md:gap-5">
                            <BlogRelatedCard
                                id={blog.id}
                                heading={blog.heading}
                                description={blog.description}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default BlogRelated