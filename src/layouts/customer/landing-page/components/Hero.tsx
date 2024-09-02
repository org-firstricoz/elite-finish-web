import { EliteButton } from "../../../../components"

const Hero = () => {
    return (
        <div className="   min-h-screen md:h-[115vh] h-auto overflow-hidden ">
            <div className="bg-elite-blue h-screen ">
                <div className="grid grid-cols-12 ">
                    <div className="md:col-span-7 col-span-12  lg:px-32 sm:px-8 px-2">
                        <div className="text-white flex flex-col gap-10 mt-16 ">
                            <div className="flex flex-col md:text-[4vw] lg:text-[3.8vw] text-4xl    font-[700] md:leading-[5rem] leading-[0] ">
                                <h1 className=" leading-[5rem]">Elevate Your Brand </h1>
                                <h1 className=" leading-[5rem]">with Our
                                    <span className="text-elite-green  leading-[5rem]"> Digital</span>
                                </h1>
                                <h1 className=" leading-[5rem]">Print Services</h1>
                            </div>
                            <h1 className="text-sm ">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut <br />
                                convallis. Tempor facilisi pellentesque sem.</h1>
                            <EliteButton className="w-fit"> Get Started </EliteButton>
                        </div>


                    </div>
                    <div className="md:col-span-5 hidden md:flex  bg-red-100   lg:pe-32 sm:pe-8 pe-2">
                        <div className="w-full flex justify-end">
                            <img
                                className="min-h-[104vh] w-full h-auto object-cover"
                                src="/assets/landingimage.png" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero