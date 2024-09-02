import EliteButton from "../../../../components/EliteButton";

const BlogCard = () => {
  return (
   
    // <div className=" w-full h-72  flex items-center justify-center">
    
      <div className="grid  grid-cols-12 h-full w-full lg:gap-6 md:gap-4 p-2  ">
  
        <div className=" col-span-3 md:col-span-4 lg:col-span-6  bg-gray-300  w-full   aspect-[3/4] "></div>

    
        <div className=" col-span-9 md:col-span-8 lg:col-span-6 flex flex-col ps-4 md:ps-0 justify-center md:gap-4 gap-1 ">
          <h2 className="text-lg sm:text-2xl font-semibold ">
            Experience the Power of Digital Printing
          </h2>
          <p className="sm:text-sm text-xs text-black    text-wrap">
            Lorem ipsum dolor sit amet consectetur. Non commodo mi elit convallis. Tempor facilisi pellent
          </p>
          <EliteButton>See Details</EliteButton>
        </div>
      </div>
    // </div>
  );
}
export default BlogCard