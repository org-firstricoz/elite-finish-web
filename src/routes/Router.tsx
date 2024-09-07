
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CUSTOMER_ROUTES } from "./constants";
import { EliteScrollToTop } from "@/components";
import Navbar from "@/pages/customer/landing-page/components/Navbar";
import { NotFoundPage } from "@/pages/customer/notFound";
import { Footer } from "@/pages/customer/landing-page/components/Footer";
import { RootCustomerLayout } from "@/layouts";



const Router: React.FC = () => {
  return (
    <BrowserRouter>
    <EliteScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path="*" element={React.createElement(NotFoundPage)} />
      <Route path="/" element={React.createElement(RootCustomerLayout)}>
      {CUSTOMER_ROUTES.map((route, i) => (
        <Route
        key={`CUSTOMER_ROUTE_${i}`}
        path={route.href}
        element={React.createElement(route.page)}
        />
      ))}
      </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
