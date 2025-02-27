import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
      </main>
      <footer>
        {/* Contenido del pie de página */}
      </footer>
    </div>
  );
};

export default Layout;
