import { EliteButton, EliteWideScreenHandler } from "@/components"
import { painterman } from "@/constants/imagePatht"

const Hero: React.FC = () => {
    return (
        <EliteWideScreenHandler>
            <div className="flex max-h-screen h-auto w-full pt-12 md:px-12 px-2">
                {/* Heading section */}
                <div className="md:w-1/2 w-full flex flex-col items-start gap-12 pb-28">
                    <h1 className="text-black text-8xl font-normal"
                        style={{ fontSize: "clamp(1.5rem, 4vw + 3rem, 10vw)" }}
                    >
                        Sustainable
                        <br />
                        painting
                        <br />
                        solutions
                    </h1>
                    <h1>Experience premium painting services for a flawless <br />home, quality and client satisfaction.
                    </h1>

                    <div className="flex lg:gap-12 md:gap-4 sm:gap-2  gap-4">
                        <EliteButton className="text-black py-4 text-xl">
                            view all services
                        </EliteButton>
                        <div className="border-b-2">
                            <p className="font-thin">Emergency Call</p>
                            <p className="font-semibold">+1-(XX7) 120 XX2 </p>
                        </div>
                    </div>
                </div>

                {/* image section */}
                <div className="w-1/2  md:flex justify-end hidden overflow-hidden">
                    <img
                        className="h-[45vw] "
                        src={painterman} alt="Painter" />
                </div>
            </div>
        </EliteWideScreenHandler>
    )
}
export default Hero