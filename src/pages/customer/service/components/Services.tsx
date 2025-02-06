import React from "react";
import MainServiceCard from "./MainServiceCard";
import { EliteWideScreenHandler } from "@/components";

const Services: React.FC = () => {
  // Example data for services
  const services = [
    {
      image: "https://img.freepik.com/premium-photo/laminate-concrete-wall-view-empty-room_295303-1002.jpg",
      title: "Interior Painting",
      description: "Transform your space with our professional interior painting services.",
    },
    {
      image: "https://img.freepik.com/premium-photo/laminate-concrete-wall-view-empty-room_295303-1002.jpg",
      title: "Exterior Painting",
      description: "Enhance your home's curb appeal with our exterior painting solutions.",
    },
    {
      image: "https://img.freepik.com/premium-photo/laminate-concrete-wall-view-empty-room_295303-1002.jpg",
      title: "Wallpaper Installation",
      description: "Add style and personality to your walls with our wallpaper services.",
    },
    {
      image: "https://img.freepik.com/premium-photo/laminate-concrete-wall-view-empty-room_295303-1002.jpg",
      title: "Drywall Repair",
      description: "Fix cracks and holes in your walls with our expert drywall repair.",
    },
    {
      image: "https://img.freepik.com/premium-photo/laminate-concrete-wall-view-empty-room_295303-1002.jpg",
      title: "Deck Staining",
      description: "Protect and beautify your deck with our staining services.",
    },
    {
      image: "https://img.freepik.com/premium-photo/laminate-concrete-wall-view-empty-room_295303-1002.jpg",
      title: "Color Consultation",
      description: "Get expert advice on choosing the perfect colors for your space.",
    },
  ];

  return (
    <EliteWideScreenHandler>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-8 md:px-24 px-4 py-12">
        {services.map((service, index) => (
          <MainServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </EliteWideScreenHandler>
  );
};

export default Services;