import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbtn.module.css";

const NavBtn = (props) => {
  let link = `/${props.name}`;
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? style.active : style.inactive)}
    >
      {props.name}
    </NavLink>
  );
};

export default NavBtn;
