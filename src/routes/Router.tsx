
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../layouts/customer/notFound";
import { CUSTOMER_ROUTES } from "./constants";
import Navbar from "../layouts/customer/landing-page/components/Navbar";
import { Footer } from "../layouts/customer/landing-page/components/Footer";
import EliteScrollToTop from "@/components/EliteScrollToTop";



const Router: React.FC = () => {
  return (
    <BrowserRouter>
    <EliteScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path="*" element={React.createElement(NotFoundPage)} />
      {CUSTOMER_ROUTES.map((route, i) => (
            <Route
              key={`CUSTOMER_ROUTE_${i}`}
              path={route.href}
              element={React.createElement(route.page)}
            />
          ))}

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
