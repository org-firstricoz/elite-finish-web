import React from "react"

const SideBlogs: React.FC = () => {

    const blogData = [
        {
            heading: "Experience the Power of Digital Printing",
            content: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitcon see more"
        },
        {
            heading: "Experience the Power of Digital Printing",
            content: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitcon see more"
        },
        {
            heading: "Experience the Power of Digital Printing",
            content: "Lorem ipsum dolor sit amet consectetur. Non commodo mi elitcon see more"
        },
    ]
    return (
        <div className=" h-full w-full flex flex-col gap-12 md:items-end py-12">
            {
                blogData.map((blog, i) =>
                    <React.Fragment key={i}>
                        <div className="flex justify-between gap-4 sm:gap-8 md:gap-6 h-auto   lg:w-[85%] md:w-[95%] ">
                            <div className="md:w-[60%] w-[80%] aspect-square bg-gray-300"></div>
                            <div className="flex flex-col justify-evenly gap-4">
                                <h1 className="md:text-[1.5vw] text-2xl font-semibold text-wrap">{blog.heading}</h1>
                                <h1 className="lg:text-sm md:text-xs text-sm">{blog.content}</h1>
                            </div>
                        </div>
                    </React.Fragment>)
            }

        </div>
    )
}
export default SideBlogs