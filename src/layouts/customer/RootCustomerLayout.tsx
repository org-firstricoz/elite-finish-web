import React from "react";
import { Outlet } from "react-router-dom";

const RootCustomerLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootCustomerLayout;