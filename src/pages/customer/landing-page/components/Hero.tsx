import { EliteButton } from "@/components";

const Hero = () => {
  return (
    <div className="  max-h-max h-[70vh] sm:h-[90vh] md:h-[120vh]   pt-8 pb-32 md:pb-0 md:pt-0  overflow-hidden    ">
      <div className="  md:h-screen  h-auto bg-elite-blue">
        <div className="grid grid-cols-12 ">
          <div className="md:col-span-7 h-screen col-span-12 md:pt-28 pb-32   lg:px-32 sm:px-8 px-2">
            <div className="text-white flex flex-col gap-10 mt-16 ">
              <div className="flex flex-col md:text-[4.9vw] lg:text-[3.8vw]  text-[10vw]   font-[700]  ">
                <h1 className=" sm:leading-[5rem]  leading-[1.6rem]">
                  Welcome to
                  <span className="text-elite-green px-2">Elitefinish</span>
                </h1>
                <h1 className=" sm:leading-[5rem]  leading-relaxed">
                  where the art of painting meets luxury and precision
                </h1>
              </div>
              <h1 className=" sm:text-sm text-xs ">
              We specialize in transforming homes, offices, and living spaces into elegant environments that reflect your unique style and personality
              </h1>
              <EliteButton className="w-fit"> Get Started </EliteButton>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:flex   lg:pe-32 sm:pe-8 pe-2">
            <div className="w-full flex justify-end">
              <img
                className="min-h-[120vh] w-full h-auto object-cover"
                src="/assets/landingimage.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
