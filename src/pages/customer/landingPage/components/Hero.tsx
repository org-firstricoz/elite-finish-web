import { EliteButton, EliteWideScreenHandler } from "@/components"
import { painterman } from "@/constants/imagePath"

const Hero: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            <div className="flex max-h-screen h-auto w-full my-12 md:px-12 px-4">
                <div className="rounded-[58px] w-full h-full   md:px-16 sm:px-12 px-4 bg-elite-blue flex ">

                    {/* Heading section */}
                    <div className="md:w-1/2 w-full py-12 flex flex-col  items-start justify-center gap-12  bg-blue-">
                        <div>
                            <EliteButton className="flex items-center gap-2 px-3 shadow-xl" variant="secondary">
                                <img
                                    src="/assets/images/oldPaper.png"
                                    className="h-4"
                                />
                                Hot Deals
                            </EliteButton>

                            <h1 className="text-black text-5xl font-semibold mt-4"
                                style={{ fontSize: "clamp(1.2rem, 1vw + 3rem, 10vw)" }}
                            >
                                Sustainable painting
                                <br />
                                solutions
                            </h1>
                        </div>
                        <h1 className="text-xl font-karlaRegular font-normal">
                            Experience premium painting services for a flawless <br />home, quality and client satisfaction.
                        </h1>

                        <div className="flex lg:gap-12 md:gap-4 sm:gap-2  gap-4">
                            <EliteButton className=" py-4 font-karlaRegular font-normal">
                            view all services
                            </EliteButton>
                            <div className="border-b-2">
                                <p className="font-thin">Emergency Call</p>
                                <p className="font-semibold">+1-(XX7) 120 XX2 </p>
                            </div>
                        </div>
                    </div>

                    {/* image section */}
                    <div className="w-1/2  md:flex justify-end items-end hidden overflow-hidden">
                        <img
                            className="h-[42vw]  "
                            src={painterman} alt="Painter" />
                    </div>
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Hero