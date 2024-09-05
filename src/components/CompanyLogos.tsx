import React from "react"
import { Shape } from "./Shapes"

export const CompanyLogos: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2 pt-5 py-3 sm:py-7 lg:px-32 sm:px-8 px-2 flex-wrap  ">
        <Shape variant="companyLogo1" className="w-20 sm:w-24 md:w-auto" />
        <Shape variant="companyLogo2" className="w-20 sm:w-24 md:w-auto" />
        <Shape variant="companyLogo3" className="w-20 sm:w-24 md:w-auto" />
        <Shape variant="companyLogo4" className="w-20 sm:w-24 md:w-auto" />
      </div>
    </>
  )
}