import { EliteLargeHeading, EliteSmallHeading } from "@/components"
import PhotoGrid from "./PhotoGrid"

const PhotoGallery = () => {
    return (

        <div className=" w-full ">
            <div className="h-auto ">
                <div className="row-span-3 ">
                    <div className="w-full flex flex-col gap-4 justify-center items-center">
                        <EliteSmallHeading heading="Gallery" />
                        <EliteLargeHeading headings={["Spectacular Works from Our", "Digital Print Services"]} />
                    </div>
                </div>
                <div className="   h-auto  lg:px-32 sm:px-8 px-2 my-12">
                    <PhotoGrid />
                </div>
            </div>

        </div>

    )
}
export default PhotoGallery