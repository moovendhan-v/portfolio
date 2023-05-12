import React from "react";
import logo from "../assets/img/logo.png";
import Allbranches from "../components/models/allbranches";

function Youtube() {
  const hkrAgriTechs = [
    { src: "https://www.youtube.com/embed/e5PLy52bUWw?rel=0" },
    { src: "https://www.youtube.com/embed/UBMOHEDY6Uk?rel=0" },
  ];
  const bestAppsInTamil = [
    { src: "https://www.youtube.com/embed/oHAX4E3hpC4?rel=0" },
    { src: "https://www.youtube.com/embed/OoK6Ek1Iu9I?rel=0" },
    { src: "https://www.youtube.com/embed/iHOMEPwjQn4?rel=0" },
    { src: "https://www.youtube.com/embed/XgSNhXbPZ4E?rel=0" },
  ];
  return (
    <>
    <Allbranches />
      <div className="container px-3">
        <YoutubeHead name="Hkr Agri Techs" />
        <YoutubeIntro title="Hkr Agri Techs" caption="All About Tech"/>
        <div className="container text-center yt-bg">
          <div className="row">
            {hkrAgriTechs.map((value) => (
              <YoutubeVideo src={value.src} />
            ))}
          </div>
        </div>
        <YoutubeHead name="Best Apps In Tamil" />
        <YoutubeIntro title="Best apps in tamil" caption = "App Review"/>
        <div className="container text-center yt-bg">
          <div className="row">
            {bestAppsInTamil.map((value) => (
              <YoutubeVideo src={value.src} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function YoutubeHead(get) {
  return (
    <div className="col-lg-12 mx-auto p-4 align-items-center">
      <header className="d-flex align-items-center pb-3 border-bottom justify-content-center">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <img
            src={logo}
            width="50"
            height="45"
            className="me-2"
            viewBox="0 0 118 94"
            alt="agricreations logo"
          />
          <a href="hkragritechs.html">
            <span className="fs-4 white">{get.name}</span>
          </a>
          <span className="align-items-center justify-content-center">
            <a
              href="https://www.youtube.com/hkragritechsyt/list25?sub_confirmation=1"
              className="yt-subscribe poppins "
              target="_blank"
              rel="noreferrer"
            >
              Subscribe <span id="subscriberCount">live sub count</span>
            </a>
          </span>
        </a>
      </header>
    </div>
  );
}

function YoutubeIntro(get) {
    const style = {  color: "aqua" ,fontSize: "32px" }
  return (
    <div className="container about-us mt-3 poppins rounded px-3">
      <div className="row">
        <div className="col-lg-6 about-chirld">
          <h3
            className=""
            style={style}
          >
            {get.title}
            <br />
            <span style={{ fontSize: "25px", color: "white" }}>
              {get.caption}
            </span>
          </h3>
        </div>
        <div className="col-lg-6 about-yt p-3 about-chirld">
          <div className="ratio ratio-16x9 yt-about-bd" width="100%" height="auto">
            <iframe
              src="https://www.youtube.com/embed/qKYzsAVqaOc?rel=0"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

function YoutubeVideo(get) {
  return (
    <div className="col-md-6 white mt-3 ">
      <div className="ratio ratio-16x9 yt-bd b-3">
        <iframe src={get.src} title="YouTube video" allowfullscreen></iframe>
      </div>
    </div>
  );
}
export default Youtube;
