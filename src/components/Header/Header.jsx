import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>React!</header>

      <div className={style.loginBlock}>
        <div>{props.login}</div>
        {props.isAuth ? (
          <div>
            <span onClick={props.logOut}>Log Out</span>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </>
  );
};

export default Header;
