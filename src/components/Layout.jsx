import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderizan las páginas (Home, Login, etc.) */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;