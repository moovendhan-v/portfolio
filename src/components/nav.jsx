import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import React, { useState } from "react";

function Nav(props) {
  const items = [
    {
      content: "Moovendhan",
      path: "/home",
    },
    {
      content: "About us",
      path: "/about",
    },
    {
      content: "Youtube",
      path: "/youtube",
    },
    {
      content: "Blogs",
      path: "/blog",
    },
    {
      content: "Gallery",
      path: "/gallery",
    },
  ];

  const [isNavCollapsed, setNavCollapsed] =  useState(true);
  const handleNavCollapse = ()=>{
    setNavCollapsed(!isNavCollapsed);
  }
  return (
    <nav className="navbar darkTheme navbar-expand-lg">
      <div className="container-fluid">
        <BranLink />
        <Brand onClick={handleNavCollapse} />
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarCollapse">
          <ul className="navbar-nav">
            {items.map((data) => (
              <Navli item={data.content} path={data.path} key={data.path} click={handleNavCollapse} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function BranLink() {
  return (
    <Link className="navbar-brand logo" to="/" rel="noreferrer">
      <img src={logo} alt="" />
    </Link>
  );
}

function Brand(props) {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={props.onClick}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

function Navli(props) {
  return (
    <li className="nav-item navbarItems">
      <Link onClick={props.click} className="nav-link" to={props.path} rel="noreferrer" data-bs-target="#navbarCollapse">
        {props.item}
      </Link>
    </li>
  );
}

export default Nav;
