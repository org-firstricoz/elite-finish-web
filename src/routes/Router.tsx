import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CUSTOMER_ROUTES } from "./constants";
import { EliteScrollToTop } from "@/components";
import { NotFoundPage } from "@/pages/customer/notFound";
import { RootCustomerLayout } from "@/layouts";
import { Footer } from "@/pages/customer/landingPage";
import Forms from "@/pages/customer/forms";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <EliteScrollToTop />
      <Routes>
        <Route path="*" element={React.createElement(NotFoundPage)} />
        <Route path="/forms/:form_title" element={<Forms />} />
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
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
