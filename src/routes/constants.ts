
import React from "react";
import { AboutUsPage, ContactPage, LandingPage, ServicePage } from "@/pages";
import { TermAndCondition } from "@/pages/customer/term-and-condition";
import { PrivacyAndPolicy } from "@/pages/customer/privacy-policy";


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
    {
      href: "term-and-conditions",
      page: TermAndCondition,
    },
    {
      href: "privacy-and-policy",
      page: PrivacyAndPolicy,
    },
  
  ];


  export {
    CUSTOMER_ROUTES,
  }
  