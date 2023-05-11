import React from "react";

function Footer(){ 
    return(
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top-footer">
    <p className="col-md-4 mb-0 text-light">
      © 2023 Agricreations, All right recived
    </p>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item">
        <a href="https://blogs.agricreations.com/" className="nav-link px-2 text-primary">
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://link.agricreations.com/email"
          className="nav-link px-2 text-primary"
        >
          Contact us
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://link.agricreations.com/github"
          className="nav-link px-2 text-primary"
        >
          Github
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://link.agricreations.com/fiver"
          className="nav-link px-2 text-primary"
        >
          Hire me
        </a>
      </li>
    </ul>
  </footer>
</div>

    )
}

export default Footer;