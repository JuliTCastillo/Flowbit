import React from "react";
import { Link } from "react-router-dom";

function Header(params) {
    return(
        <>
            <header>
                <div>
                    <Link to="/">Inicio</Link>
                </div>
                <div>
                    <Link to="/login">Ingresar</Link>
                </div>
            </header>
        </>
    )
}

export default Header;