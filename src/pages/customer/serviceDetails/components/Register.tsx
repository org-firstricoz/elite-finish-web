import React from "react"
import ServiceDetailForm from "./ServiceDetailForm"

const Register: React.FC = () => {
    return (
            <div className=" w-full py-32 ">
                <div className="h-fit ">
                    <div className="row-span-3 ">
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <div className=" lg:text-4xl md:text-3xl sm:text-2xl text-[5.5vw] text-center font-bold sm:font-semibold ">
                                <h1 >One Stop Shop for All Your Printing</h1>
                                <h1>Needs Let Us Help You Today!</h1>
                            </div>
                        </div>
                    </div>
                    <div className="  lg:px-32 sm:px-8 px-2">
                        <ServiceDetailForm
                            showUploadFileButton={true}
                        />
                    </div>
                </div>
            </div>
    )
}
export default Register