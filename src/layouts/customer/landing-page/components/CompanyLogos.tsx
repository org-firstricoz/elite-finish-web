import React from "react"

export const CompanyLogos:React.FC = () => {
  return (
    <>
    <div className="flex justify-between gap-2 pt-5 py-3 sm:py-7 lg:px-32 sm:px-8 px-2 flex-wrap ">
         <img src="/public/assets/logodemo1.svg" alt="logo" />
         <img src="/public/assets/logodemo2.svg" alt="logo" />
         <img src="/public/assets/logodemo3.svg" alt="logo" />
         <img src="/public/assets/logodemo4.svg" alt="logo" />
    </div>
    </>
  )
}