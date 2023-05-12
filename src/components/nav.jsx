import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../assets/css/home.css";

function Navs() {
  // const style = {
  //   color: "#00aa85",
  // };
  const list = [
    {
      listClass: "nav-item",
      aClass: "nav-link font-black fs-5",
      content: "Moovendhan",
      path: "/home",
    },
    {
      listClass: "nav-item",
      aClass: "nav-link font-black fs-5",
      content: "About us",
      path: "/about",
    },
    {
      listClass: "nav-item",
      aClass: "nav-link font-black fs-5",
      content: "Youtube",
      path: "/youtube",
    },
    {
      listClass: "nav-item",
      aClass: "nav-link font-black fs-5",
      content: "Blogs",
      path: "/blog",
    },
    {
      listClass: "nav-item",
      aClass: "nav-link font-black fs-5",
      content: "Gallerys",
      path: "/gallery",
    },
  ];
  const link = [
    {
      listClass: "nav-item",
      aClass: "nav-link font-black fs-5",
      content: "Social Media",
      href: "https://links.agricreations.com",
    },
    {
      listClass: "nav-item",
      aClass: "nav-link font-black fs-5",
      content: "Resume",
      href: "https://link.agricreations.com/resume",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="/">
          <img src={logo} alt="Moovendhan" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav list-unstyled ">
            {list.map((data) => (
              <Navlink
                listClass={data.listClass}
                aClass={data.aClass}
                name={data.content}
                path={data.path}
              />
            ))}{" "}
            {link.map((value) => (
              <DirectLinks
                listClass={value.listClass}
                aClass={value.aClass}
                name={value.content}
                href={value.href}
              />
            ))}
            <Mail />
            <Allbranches />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Navlink(get) {
  return (
    <li className={get.listClass}>
      <Link className={get.aClass} aria-current="page" to={get.path}>
        {get.name}
      </Link>
    </li>
  );
}

function Mail() {
  const style = {
    color: "#00aa85",
  };
  return (
    <li className="nav-item px-2">
      <a
        target="_blank"
        className=" nav-link font-black fs-5"
        aria-current="page"
        href="mailto:moovendhan@agricreations.com"
        rel="noreferrer"
      >
        <i className="fa-solid fa-envelope fa-xl" style={style}></i>
      </a>
    </li>
  );
}
function Allbranches() {
  return (
    <li className="nav-item px-2">
      <button
        type="button"
        className="btn nav-link fs-5 text-primary allbranches "
        data-bs-toggle="modal"
        data-bs-target="#all-branches"
      >
        <i className="fa-solid fa-globe"></i> All Branches
      </button>
    </li>
  );
}

function DirectLinks(get) {
  return (
    <li className={get.listClass}>
      <a className={get.aClass} aria-current="page" href={get.href} target="_blank" rel="noreferrer">
        {get.name}
      </a>
    </li>
  );
}
export default Navs;
