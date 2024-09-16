
import React from "react";
import { LandingPage } from "@/pages";


interface RoutDocument{
    href : string;
    page  : React.FC;
}

const CUSTOMER_ROUTES: RoutDocument[] = [
    {
      href: "",
      page: LandingPage,
    },
  
  ];


  export {
    CUSTOMER_ROUTES,
  }
  