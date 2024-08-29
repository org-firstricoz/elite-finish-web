import React from "react"
import EliteButton from "../../../components/EliteButton"
import Navbar from "./components/Navbar"
import { CompanyLogos } from "./components/CompanyLogos"
import { AboutUs } from "./components/AboutUs"
import { Why } from "./components/Why"
import { Services } from "./components/Services"

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="   min-h-screen md:h-[115vh] h-auto overflow-hidden">
        <div className="bg-elite-blue h-screen ">
          <Navbar />
          <div className="grid grid-cols-12 ">
            <div className="md:col-span-6 col-span-12  lg:px-32 sm:px-8 px-2">
              <div className="text-white flex flex-col gap-5 mt-16 ">
                <div className="flex flex-col md:text-5xl text-3xl font-[700]  ">
                  <h1>Elevate Your Brand </h1>
                  <h1>with Our <span className="text-elite-green">Digital</span></h1>
                  <h1>Print Services</h1>
                </div>
                <h1 className="text-sm ">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut <br />
                  convallis. Tempor facilisi pellentesque sem.</h1>
                <EliteButton className="w-fit"> Get Started </EliteButton>
              </div>


            </div>
            <div className="md:col-span-6 hidden md:flex ">
              <div className="w-full flex   ">
                <img
                  className="h-[104vh]"
                  src="/assets/landingimage.png" />

              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyLogos />
      <AboutUs/>
      <Why/>
      <Services/>
    </>
  )
}

export default LandingPage