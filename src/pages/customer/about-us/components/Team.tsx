import { EliteWideScreenHandler } from "@/components";
import EliteHeading from "@/components/EliteHeading";
import { TeamMember1, TeamMember2, TeamMember3 } from "@/constants/imagePath"; // Import images properly
import React from "react";

const Team: React.FC = () => {
    const TeamMemberData = [
        {
            name: "Rajesh Kumar",
            picture : TeamMember1,
            experience: "6 Yrs of experience",
            description: "Our CEO is not just a leader but a visionary who brings a distinctive perspective to the development of our apps. With a wealth of experience and a knack for innovation, they are the driving force behind our app's success."
        },
        {
            name: "Deepak Sehgal",
            picture : TeamMember2,
            experience: "30 Yrs of experience",
            description: "With 30 years of experience, our technical expert has been the backbone of technical leadership in our organization, ensuring that every project is executed with perfection."
        },
        {
            name: "Kunal Das",
            picture : TeamMember3,
            experience: "18 Yrs of experience",
            description: "With years of technical leadership experience. He possesses proven ability to succeed in leading technical teams and delivering innovative solutions."
        },
    ];

    return (
        <EliteWideScreenHandler>
            <div className="h-auto md:px-24 px-4">
                <EliteHeading >Meet Our Team</EliteHeading>
                <div className="flex flex-col gap-10 my-12">
                    {TeamMemberData.map((member, index) => (
                        <div
                            key={index}
                            className={`bg-[#f1f1f1] shadow-md rounded-3xl flex flex-col md:flex-row justify-between p-6 ${
                                index % 2 === 1 ? "md:flex-row-reverse " : ""
                            }`} // Reverse layout for even-indexed members
                        >
                            <div className="md:w-4/12 w-full flex md:block justify-center">
                                <img
                                    className="aspect-square md:w-10/12 sm:w-1/2 w-3/4 "
                                    src={member.picture} 
                                    alt={`${member.name}`}
                                />
                            </div>
                            <div className="md:w-7/12  mt-4 md:mt-0  w-full flex flex-col sm:gap-4 gap-2 items-start justify-center text-black">
                                <h1 className={`w-full md:text-4xl text-xl font-semibold ${
                                index % 2 === 1 ? "md:text-right text-center" :  "md:text-left text-center"}`}>
                                    {member.name}
                                </h1>
                                <h1 className={`w-full  md:text-xl tex-sm font-semibold text-[#C09595] ${
                                index % 2 === 1 ? "md:text-right text-center" : " md:text-left text-center"}` }>
                                    {member.experience}
                                </h1>
                                <h1 className={`w-full  md:text-sm text-xs ${
                                index % 2 === 1 ? "md:text-right text-center" : " md:text-left text-center"}`}>
                                    {member.description}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </EliteWideScreenHandler>
    );
};

export default Team;
