import { EliteWideScreenHandler } from "@/components";
import Navbar from "../../landingPage/components/navbar/Navbar";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceHero: React.FC = () => {
  const heroRef = React.useRef<HTMLDivElement>(null);
  return (
    <EliteWideScreenHandler>
      <div className="relative">
        <div className=" h-auto  overflow-hidden">
          <Navbar heroRef={heroRef} isMainHero={false} />
          <div
            ref={heroRef}
            className="absolute z-50 -top-32 md:bottom-0  h-[13rem] w-full"
          />
          <div className="mt-24">
            <h1 className="font-semibold text-3xl px-24 py-5">
              Interior Painting
            </h1>
            <div className="m grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12   ">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>
    </EliteWideScreenHandler>
  );
};
export default ServiceHero;
