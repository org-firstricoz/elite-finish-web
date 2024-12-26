import { EliteWideScreenHandler } from "@/components"
import { bulb, direction, rocket } from "@/constants/imagePath";
import React from "react"

const WhoWeAre: React.FC = () => {
  const TeamMemberData = [
    {
      title: "Lorem Ipsum is simply",
      picture: rocket,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
    },
    {
      title: "Lorem Ipsum is simply",
      picture: bulb,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
    },
    {
      title: "Lorem Ipsum is simply",
      picture: direction,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
    },
  ];
  return (
    <EliteWideScreenHandler>
      <div className=" w-full  h-auto  md:px-24 px-4 py-12 ">
        <header >
          <h1 className="text-3xl text-center font-semibold text-black">
            <span className="text-[#FF6464]">
              WHO  {" "}
            </span>
            WE ARE
          </h1>
          <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-400 text-center">
            Lorem Ipsum is simply dummy text of
            <br />
            the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          </p>
        </header>
        <section className="flex md:flex-row flex-col lg:gap-24 gap-4 mt-12 ">
          {
            TeamMemberData.map((member, index) =>
              <div
                key={`TEAM_MEMBER_${index}`}
                className=" w-full bg-white shadow-md md:hover:shadow-xl lg:px-12 md:px-6 px-4  "
              >
                <div className=" w-full border-y-[.8rem] border-gray-300  flex flex-col  items-center h-full ">
                  <img
                    src={member.picture}
                    alt="team member"
                    className="mx-auto my-12 h-12 aspect-square  "
                  />
                  <h1 className="font-semibold  text-xl text-center">{member.title}</h1>
                  <h1 className="text-sm  h-auto py-12 text-center pb-24">{member.description}</h1>
                </div>
              </div>
            )
          }
        </section>
      </div>
    </EliteWideScreenHandler>
  )
}
export default WhoWeAre