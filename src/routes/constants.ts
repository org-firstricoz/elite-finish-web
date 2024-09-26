
import React from "react";
import { AboutUsPage, ContactPage, LandingPage, ServicePage } from "@/pages";


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
      page: AboutUsPage,
    },
    {
      href: "services",
      page: ServicePage,
    },
    {
      href: "contact-us",
      page: ContactPage,
    },
  
  ];


  export {
    CUSTOMER_ROUTES,
  }
  