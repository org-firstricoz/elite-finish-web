import React from "react";
import { AboutPage } from "../layouts/customer/about-us";
import { LandingPage } from "../layouts/customer/landing-page";
import { ServicesPage } from "../layouts/customer/services";
import { ServiceDetailPage } from "../layouts/customer/serviceDetails";


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
   
  
  ];


  export {
    CUSTOMER_ROUTES,
  }
  