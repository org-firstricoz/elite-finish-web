import { EliteButton } from "@/components"
import React from "react"
import { Link } from "react-router-dom"

interface BlogRelatedCardProps {
    id: number;
    heading: string;
    description: string
}
const BlogRelatedCard: React.FC<BlogRelatedCardProps> = ({

    heading,
    description
}) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-full bg-gray-300 aspect-[3.5/4]"></div>
            <h1 className="text-xl font-semibold">{heading}</h1>
            <h2 className="text-sm">{description}</h2>
            <Link to={"/#"}>
                <EliteButton>See Detail</EliteButton>
            </Link>
        </div>

    )
}
export default BlogRelatedCard