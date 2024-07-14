import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "60vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;