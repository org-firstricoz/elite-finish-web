import React from "react";
import { About } from "../layouts/customer/about-us";
import { LandingPage } from "../layouts/customer/landing-page";


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
      page: About,
    },
   
  
  ];


  export {
    CUSTOMER_ROUTES,
  }
  