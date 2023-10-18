import React from "react";
import "../css/Navigation.css";
import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";

export default function Navigation() {
  return (
    <>
      <div className="navbar">
        <div className="section">
          <Link to={``} style={{ textDecoration: "none" }}>
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/382319422_2948265998637115_607065943778768597_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=m9fJTcTFQz4AX_Bijza&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSjYZQEYrvqERmSRe1mafU8au2SJgYf9-b7ZAqn47_f0w&oe=6545A431"
              alt="Logo"
              id="logo"
            />
          </Link>
        </div>

        <div className="section">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="section" id="menu">
          <Link to={`mail`} style={{ textDecoration: "none" }}>
            <div>Quản lý mail</div>
          </Link>
          <Link to={`newsletter`} style={{ textDecoration: "none" }}>
            <div>Newsletter</div>{" "}
          </Link>

          <Link to={`cv`} style={{ textDecoration: "none" }}>
            <div>Thiết kế CV</div>{" "}
          </Link>
          <Link to={`profile`} style={{ textDecoration: "none" }}>
            <div>Profile</div>{" "}
          </Link>
        </div>
        <LoginButton />
      </div>
    </>
  );
}
