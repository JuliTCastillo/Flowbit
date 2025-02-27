import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
      </main>
      <Footer>
        {/* Contenido del pie de página */}
      </Footer>
    </div>
  );
};

export default Layout;
