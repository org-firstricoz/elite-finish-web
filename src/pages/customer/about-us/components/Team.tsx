import { EliteWideScreenHandler } from "@/components";
import { TeamMember1, TeamMember2, TeamMember3 } from "@/constants/imagePath"; // Import images properly
import React from "react";

const Team: React.FC = () => {
    const TeamMemberData = [
        {
            name: "Rajesh Kumar",
            picture: TeamMember1,
            position: "CEO",
            description: "Our CEO is not just a leader but a visionary who brings a distinctive perspective to the development of our apps. With a wealth of experience and a knack for innovation, they are the driving force behind our app's success."
        },
        {
            name: "Deepak Sehgal",
            picture: TeamMember2,
            position: "Chief Operating Officer (COO)",
            description: "With 30 years of experience, our technical expert has been the backbone of technical leadership in our organization, ensuring that every project is executed with perfection."
        },
        {
            name: "Kunal Das",
            picture: TeamMember3,
            position: "Senior Front-end Developer",
            description: "With years of technical leadership experience. He possesses proven ability to succeed in leading technical teams and delivering innovative solutions."
        },
    ];

    return (
        <EliteWideScreenHandler>
            <div className="bg-[#F9FAFB] w-full h-auto md:px-24 px-4 py-12">
                <header >
                    <h1 className="text-3xl font-bold text-black">Meet Our Team</h1>
                    <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-400">Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </header>
                <section className="flex md:flex-row flex-col  gap-6 mt-12 ">
                    {
                        TeamMemberData.map((member, index) =>
                            <div
                                key={`TEAM_MEMBER_${index}`}
                                className=" border-2 rounded-md  w-full bg-white shadow-md p-3"
                            >
                                <div className="border shadow-sm w-full aspect-video">
                                    <img
                                        src={member.picture}
                                        alt="team member"
                                        className="aspect-video object-contain"
                                    />
                                </div>
                                <h1 className="font-semibold mt-2">{member.name}</h1>
                                <h1 className="text-gray-400 text-sm">{member.position}</h1>
                                <h1 className="text-sm mt-6 min-h-[10rem] h-auto">{member.description}</h1>
                            </div>
                        )
                    }
                </section>
            </div>
        </EliteWideScreenHandler>
    );
};

export default Team;
