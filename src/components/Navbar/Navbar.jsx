import React from "react";
import style from "./Navbar.module.css";
import { Outlet } from "react-router-dom";
import NavBtn from "./Navbtn/Navbtn";

const Navbar = () => {
  return (
    <>
      <nav className={style.sidebar}>
        <NavBtn name="News" />
        <NavBtn name="Messages" />
        <NavBtn name="Music" />
        <NavBtn name="Profile" />
        <NavBtn name="Settings" />
        <NavBtn name="Users" />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
