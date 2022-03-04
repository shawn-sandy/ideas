import * as React from "react";
import "./navbar.scss";
export interface NavbarProps {
    /**
     * The children of the navbar use navbar-item to create the links
     */
    children: React.ReactNode;
}
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
