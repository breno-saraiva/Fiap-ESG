import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import Footer from "../../components/Footer";

export const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
