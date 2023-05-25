import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import React from "react";

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
  return (
    <nav className="navbar darkTheme navbar-expand-lg">
      <div className="container-fluid">
        <BranLink />
        <Brand />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map((data) => (
              <Navli item={data.content} href={data.path} />
            ))}
          </ul>
        </div>
      </div>
        {/* <Navright/> */}
    </nav>
  );
}

function BranLink() {
  return (
    <a className="navbar-brand logo" href="/" rel="noreferrer">
      <img src={logo} alt="" />
    </a>
  );
}

function Brand() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

function Navli(props) {
  return (
    <li className="nav-item navbarItems">
      <a className="nav-link" href={props.href} rel="noreferrer">
        {props.item}
      </a>
    </li>
  );
}

export default Nav;




