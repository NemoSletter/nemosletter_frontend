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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/382319422_2948265998637115_607065943778768597_n.png?_nc_cat=100&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFiSxUYcrzw4v7QXi7EzwBR5VbzvU914qvlVvO9T3Xiq44xPE2eTCoxte1SJrD_jC8X8tJTfvp7uWvxQsqHQN0g&_nc_ohc=zpYpcBn47nQAX9gS7j-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTrhWvvu1-Z1knvPNMEgMUOB8BKvc1gvgKfGOWgbpYY6g&oe=658ECF71"
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
          <Link to={`admin`} style={{ textDecoration: "none" }}>
            <div>Admin</div>{" "}
          </Link>
        </div>
        <LoginButton />
      </div>
    </>
  );
}
