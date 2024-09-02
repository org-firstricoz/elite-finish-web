import { Link } from "react-router-dom"
import { EliteButton } from "../../../../components"

const Services = () => {
    return (
        <div className=" w-full  my-28 lg:px-32 sm:px-8 px-2 ">
            <div className="h-auto ">
                <div className="row-span-3 ">
                    <div className="w-full flex flex-col gap-4 justify-center items-center">
                        <div className=" lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center font-bold sm:font-semibold ">
                            <h1 >Easy and Fast Print Customization</h1>
                            <h1>with Digital Print Services</h1>
                        </div>
                    </div>
                </div>
                <div className="  h-auto    mt-12">
                    <div className="h-screen grid grid-cols-12 grid-rows-2 bg">
                        <div className="col-span-6 bg-gray-300"></div>
                        <div className="col-span-6 flex  justify-center items-center ">
                            <div className="flex  md:w-3/5 w-4/5 flex-col gap-5">
                                <h1 className="md:text-4xl text-xl font-semibold">Digital Printing</h1>
                                <p className=" md:text-sm text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni hic voluptatum nihil a deleniti?</p>
                                <Link to={'/services/details'}>
                                    <EliteButton>See Details</EliteButton>
                                </Link>
                            </div>

                        </div>
                        <div className="col-span-6  flex  justify-center items-center ">
                            <div className="flex  md:w-3/5 w-4/5 flex-col gap-5">
                                <h1 className="md:text-4xl text-xl font-semibold">Document Printing</h1>
                                <p className=" md:text-sm text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni hic voluptatum nihil a deleniti?</p>
                                <Link to={'/services/details'}>
                                    <EliteButton>See Details</EliteButton>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-6 bg-gray-300"></div>
                    </div>

                    <div className="h-screen grid grid-cols-12 grid-rows-2 bg">
                        <div className="col-span-6 bg-gray-300"></div>
                        <div className="col-span-6  flex  justify-center items-center ">
                            <div className="flex  md:w-3/5 w-4/5 flex-col gap-5">
                                <h1 className="md:text-4xl text-xl font-semibold">Shirt Printing</h1>
                                <p className=" md:text-sm text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni hic voluptatum nihil a deleniti?</p>
                                <Link to={'/services/details'}>
                                    <EliteButton>See Details</EliteButton>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-6  flex  justify-center items-center ">
                            <div className="flex  md:w-3/5 w-4/5 flex-col gap-5">
                                <h1 className="md:text-4xl text-xl font-semibold">Sticker Printing</h1>
                                <p className=" md:text-sm text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni hic voluptatum nihil a deleniti?</p>
                                <Link to={'/services/details'}>
                                    <EliteButton>See Details</EliteButton>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-6 bg-gray-300"></div>

                    </div>
                </div>
            </div>

        </div >
    )
}
export default Services