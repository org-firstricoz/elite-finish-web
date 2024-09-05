import { EliteButton } from "@/components";
import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  heading: string;
  content: string;
}
const BlogCard: React.FC<BlogCardProps> = ({
  id,
  heading,
  content
}) => {
  return (


    <div className="grid  grid-cols-12 h-full w-full lg:gap-6 md:gap-4 p-2  ">

      <div className=" col-span-3 md:col-span-4 lg:col-span-6  bg-gray-300 w-full   aspect-[3/3.5] "></div>


      <div className=" col-span-9 md:col-span-8 lg:col-span-6 flex flex-col ps-4 md:ps-0 items-start justify-evenly md:gap-4 gap-1 ">
        <h2 className=" md:text-2xl sm:text-xl text-lg font-semibold ">
          {heading}
        </h2>
        <p className="lg:text-sm sm:text-xs text-[3vw] text-black    text-wrap">
          {content}
        </p>
        <Link to={`blog/${id}`}>
          <EliteButton>See Details</EliteButton>
        </Link>
      </div>
    </div>
  );
}
export default BlogCard