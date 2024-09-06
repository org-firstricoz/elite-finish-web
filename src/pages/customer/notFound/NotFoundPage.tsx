import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [time, setTime] = React.useState<number>(5);

  React.useEffect(() => {
    if (time <= 0) navigate("/");
  }, [time]);

  React.useEffect(() => {
    setInterval(() => {
      setTime((state) => state - 1);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-5xl font-semibold">404</p>
      <p className="text-lg font-medium text-gray-500">Page Not Found</p>
      <p className="mt-4 text-sm">
        Redirecting in {time} seconds to Home...
      </p>
    </div>
  );
};

export default NotFoundPage;