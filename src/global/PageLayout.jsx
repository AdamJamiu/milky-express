import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const PageLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
