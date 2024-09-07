import React from "react";
import { Outlet } from "react-router-dom";

const PrivateCustomerLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateCustomerLayout;