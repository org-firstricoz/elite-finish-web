import React from "react";
import { LandingPage } from "@/layouts/customer/landing-page";
import { ServicesPage } from "@/layouts/customer/services";
import { ServiceDetailPage } from "@/layouts/customer/serviceDetails";
import { GalleryPage } from "@/layouts/customer/gallery";
import { TeamPage } from "@/layouts/customer/team";
import { PricingPage } from "@/layouts/customer/pricing";
import { BlogPage } from "@/layouts/customer/blog";
import ContactUsPage from "@/layouts/customer/contactUs/ContactUsPage";
import { BlogDetailPage } from "@/layouts/customer/blogDetails";
import { FaqPage } from "@/layouts/customer/Faq";
import  AboutPage  from "@/layouts/customer/about-us/AboutUs";

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
  