import { AboutPage, BlogDetailPage, BlogPage, ContactUsPage, FaqPage, GalleryPage, LandingPage, PricingPage, ServiceDetailPage, ServicesPage, TeamPage } from "@/pages";
import React from "react";


interface RoutDocument{
    href : string;
    page  : React.FC;
}

const CUSTOMER_ROUTES: RoutDocument[] = [
    {
      href: "",
      page: LandingPage,
    },
    {
      href: "about-us",
      page: AboutPage,
    },  
    {
      href: "services",
      page: ServicesPage,
    },  
    {
      href: "services/details",
      page: ServiceDetailPage,
    },
    {
      href: "gallery",
      page: GalleryPage,
    },
    {
      href: "team",
      page: TeamPage,
    },
    {
      href: "pricing",
      page: PricingPage,
    },
    {
      href: "blog",
      page: BlogPage,
    },
    {
      href: "blog/details",
      page: BlogDetailPage,
    },
    {
      href: "contact-us",
      page: ContactUsPage,
    },
    {
      href: "faq",
      page: FaqPage,
    },
   
  
  ];


  export {
    CUSTOMER_ROUTES,
  }
  