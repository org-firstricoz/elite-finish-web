import React from "react"
import Blog from "./component/Blog"
import { HeroCommon } from "@/components"
import BlogRelated from "./component/BlogRelated"

const BlogDetailPage: React.FC = () => {
    
   
    return (
        <>

            <HeroCommon
                heading="Blog Details"
                description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan."
            />
            <Blog />
            <BlogRelated/>
        </>
    )
}
export default BlogDetailPage