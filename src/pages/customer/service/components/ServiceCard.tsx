import { CalendarDays, MoveRight } from "lucide-react";
import React from "react";
import { PiUsersThreeThin } from "react-icons/pi";

const ServiceCard: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-2 p-4 ">
      <div className="max-h-[18rem] aspect-square rounded-xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
          alt="image"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col items-start  max-w-[18rem] cursor-pointer ">
        <h1 className="font-bold text-lg">Matte paint</h1>
        <h1>
          from <span className="text-elite-red font-semibold">Rs.456</span>
        </h1>
        <div className="text-elite-red/50 flex justify-between w-full">
          <div className="flex items-center gap-2 ">
            <CalendarDays size={20} />
            <p>EveryDay</p>
          </div>
          <div className="flex items-center gap-2">
            <PiUsersThreeThin size={25} />
            <p>2-10 PP</p>
          </div>
        </div>
        <p className="text-black/80 text-sm">
          the most common type of interior wall paint.
        </p>
        <div className="flex items-center justify-start gap-2 text-elite-red font-semibold">
          Read More <MoveRight />{" "}
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
