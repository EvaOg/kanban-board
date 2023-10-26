import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
