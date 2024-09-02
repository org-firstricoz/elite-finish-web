import React from "react"
import EliteButton from "../../../components/EliteButton"
import Navbar from "./components/Navbar"
import { CompanyLogos } from "./components/CompanyLogos"
import { AboutUs } from "./components/AboutUs"
import { Why } from "./components/Why"
import { Services } from "./components/Services"
import { EliteCommon } from "../../../components/EliteCommon"
import { Footer } from "./components/Footer"
import { Team } from "./components/Team"
import Testonomial from "./components/Testonomial"
import Pricing from "./components/Pricing"
import Gallery from "./components/Gallery"
import Blog from "./components/Blog"

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="   min-h-screen md:h-[115vh] h-auto overflow-hidden ">
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
            <div className="md:col-span-6 hidden md:flex md:ps- lg:ps-20   lg:pe-32 sm:pe-8 pe-2">
              <div className="w-full flex justify-end">
                <img
                  className="min-h-[104vh] w-full h-auto object-cover"
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
      <Team/>
      <EliteCommon/>
      <Gallery/>
      <Pricing/>
      <Testonomial/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default LandingPage