import React from "react"
import BlogContent from "./BlogContent"
import SideBlogs from "./SideBlogs"

const Blog:React.FC = () => {
  return (
    <div className=" lg:px-32 sm:px-8 px-2">
        <div className="bg-gray-300 w-full sm:aspect-[11/4] aspect-[11/6]"></div>
        <div className="grid grid-cols-12">
            <div className=" col-span-12 md:col-span-6">
                <BlogContent/>
            </div>
            <div className=" col-span-12 md:col-span-6">
                <SideBlogs/>
            </div>

        </div>
    </div>
  )
}
export default Blog 