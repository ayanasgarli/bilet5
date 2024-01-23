import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const MainRoot = () => {
  return (
    <>
    <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainRoot;