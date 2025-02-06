import { MoveRight } from "lucide-react";
import React from "react";

interface MainServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const MainServiceCard: React.FC<MainServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col  justify-between gap-2 bg-white  transition-shadow duration-300 ">
      <div className="rounded-xl aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold ">{title}</h2>
        <p className="text-black/80">{description}</p>
        <div className="flex items-center justify-start gap-2 text-elite-red font-semibold">
          Read More <MoveRight />{" "}
        </div>
      </div>
    </div>
  );
};

export default MainServiceCard;
