import ImageCard from "@/components/ImageCard"
import React from "react"

const PhotoGrid: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 md:gap-12 gap-3  ">

        <div className="col-span-5 grid md:gap-12 gap-3">
          <div className="bg-red-100 grid w-full aspect-[9/12] min-h-0 min-w-0 ">
            <ImageCard />
          </div>
          <div className="bg-red-100 grid w-full aspect-video min-h-0 min-w-0 ">
            <ImageCard />
          </div>
        </div>
        <div className="col-span-4  w-full  grid  md:gap-12 gap-3">
          <div className="bg-red-100 grid w-full aspect-auto min-h-0 min-w-0 ">
            <ImageCard />
          </div>
          <div className="bg-red-100 grid w-full aspect-auto min-h-0 min-w-0 ">
            <ImageCard />
          </div>
          <div className="bg-red-100 grid w-full aspect-auto min-h-0 min-w-0 ">
            <ImageCard />
          </div>
        </div>
        <div className="col-span-3  w-full  grid  md:gap-12 gap-3">
          <div className="bg-red-100 grid w-full aspect-auto min-h-0 min-w-0 ">
            <ImageCard />
          </div>
          <div className="bg-red-100 grid w-full aspect-auto min-h-0 min-w-0 ">
            <ImageCard />
          </div>
          <div className="bg-red-100 grid w-full aspect-auto min-h-0 min-w-0 ">
            <ImageCard />
          </div>
        </div>
      </div>

    </>
  )
}
export default PhotoGrid