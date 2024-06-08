import React from "react";
import home from "../../../assets/img/home.svg";
import logoutSvg from "../../../assets/img/logout.svg";
import group from "../../../assets/img/Group.svg";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("user");
  };
  return (
    <div className="nav">
      <div className="nav-container">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            "btn-semiround" + (isActive ? " active" : "")
          }
        >
          <img src={home} alt="home"></img>
        </NavLink>
        <NavLink
          to="/record"
          className={({ isActive }) =>
            "btn-semiround" + (isActive ? " active" : "")
          }
        >
          <img src={group} alt="group"></img>
        </NavLink>
        <NavLink to="/login">
          <button onClick={logout} className="btn-semiround">
            <img src={logoutSvg} alt="logout"></img>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
