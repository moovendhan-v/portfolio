import React from "react";
import "../assets/css/home.css";
import logo from "../assets/images/logo.png";
import { Svgicons } from "../components/images";
import Button from "../components/button";
import Blogger from "../components/models/Blogger";
import Videoeditor from "../components/models/videoeditor";
import Webdeveloper from "../components/models/Webdeveloper";
import Youtube from "../components/models/youtube";
function Home() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-1 pt-1 ">
        <div className="row flex-lg-row-reverse align-items-center display-flex justify-content-center">
          <div className="col-10 col-sm-8 col-lg-6 mt-1  pb-3">
            <img
              src={logo}
              className="d-block mx-lg-auto img-fluid logos"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-4 white">
              Hi, I am, <br />
              Moovendhan V,
            </h1>
            <p className="lead lh-224 white">
              Hi, I am Moovendhan. Webdeveloper, I was writing an articles on a
              blog. And I am interested in multimedia also, for the past two
              years, I have been working on youtube. While doing youtube, I have
              learned lot of things like photoshop and premiere pro. 
              <a target="_blank" href="https://blogs.agricreations.com" rel="noreferrer" >
                 blog📲 Know more.....
              </a>
            </p>
                  {/* Webdeveloper */}
            <Webdeveloper />
            <div className="gap-2 d-md-flex justify-content-md-start mt-3">
              <a
                type="button"
                className=""
                data-bs-toggle="modal"
                data-bs-target="#web-developer"
                href="/"
              >
                <Button name="Web developer" icon="fa-sharp fa-solid fa-code" />
              </a>
{/* video editor  */}
              <a
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#video-editor"
                href="/"
              >
                <Button name="Video editor" icon="fa-solid fa-video" />
              </a>
            </div>
            {/* Blog  */}
            <div className="gap-2 d-md-flex justify-content-md-start mt-3">
              <a type="button" data-bs-toggle="modal" data-bs-target="#blogger" href="/"> 
                <Button name="Blogger" icon="fa-brands fa-blogger" />
              </a>
              <Blogger />
              <Svgicons />
              <Youtube />
            </div>
          </div>
          <Videoeditor />
        </div>
      </div>
    </>
  );
}

export default Home;
