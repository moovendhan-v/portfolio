import React from "react";

function Aboutslug(){
    return(
        <>
<div className="slugBg  bg-primary text-center sticky-top">
  <select
    name="slug"
    className="text-success bg-primary slugButton"
    style={{ border: "none" }}
    id="slug"
  >
    <option value="projects" className="text-light">
      Projects ✅
    </option>
    <option value="email" className="text-light">
      Email
    </option>
    <option value="gmail" className="text-light">
      Gmail
    </option>
    <option value="resume" className="text-light">
      Resume
    </option>
    <option value="gitlab" className="text-light">
      Gitlab
    </option>
    <option value="github" className="text-light">
      Github
    </option>
    <option value="linkedin" className="text-light">
      Linkedin
    </option>
    <option value="instagram" className="text-light">
      Instagram
    </option>
    <option value="youtube" className="text-light">
      Youtube
    </option>
    <option value="whatsapp" className="text-light">
      Whatsapp
    </option>
  </select>
  <a
    className="text-decoration-none text-center white poppins"
    target="_blank"
    href="#"
    id="submit"
  >
    {" "}
    <span className="" id="count">
      Redirect <i className="fa-solid fa-diamond-turn-right" />
    </span>
  </a>{" "}
  <p />
</div>

        </>
    )
}

export default Aboutslug;