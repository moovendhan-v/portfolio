import React from "react";
import "../assets/css/about.css";
import Allbranches from "../components/models/allbranches";
// import Aboutslug from "../components/aboutslug";
// import "../assets/js/aboutus"
function Aboutus() {

  return (
    <>
    {/* <Aboutslug /> */}
      <div className="container">
        <Aboutme />
        <div className="blur" />
        <Aboutmyself />
        <div className="row">
          <Webskills />
          <Databaseskills />
          <Programmingskills />
          <Abodeskills />
        </div>
      </div>
        <Allbranches />
    </>
  );
}

function Aboutme() {
  return (
    <div className="white">
      <h3>Moovendhan v</h3>
      <p>
        I am Curies about learning new technologies visit my{" "}
        <a target="_blank" href="https://projects.agricreations.com" rel="noreferrer" >
          Projects
        </a>{" "}
        and my{" "}
        <a target="_blank" href="https://link.agricreations.com/github" rel="noreferrer">
          Github
        </a>{" "}
        Profile
      </p>
    </div>
  );
}

function Aboutmyself() {
  return (
    <div className="row what-i-do mt-3">
      <div className="col-lg-6">
        <div className="row">
          <div className="col-md-2 white">
            <span style={{ fontSize: "3em", color: "Dodgerblue" }}>
              <i className="fa-solid fa-video" />
            </span>
          </div>
          <div className="col-md-10 white">
            <h3 className="poppins-h">Video editor</h3>
            <p className="poppins-p">
              Hi this is agri, i will do a professional vidoes for your youtube
              channel. i have more than 2years of experience in this field. i
              will do a travel, wedding, educational and so on. kindly contact
              me before your order....
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-md-2 white">
            <span style={{ fontSize: "3em", color: "Dodgerblue" }}>
              <i className="fa-solid fa-terminal" />
            </span>
          </div>
          <div className="col-md-10 white">
            <h3 className="poppins-h">Web Developer</h3>
            <p className="poppins-p">
              Looking to gain a piece of knowledge about the Web development
              position at Crown Company that can benefit from huge creative
              knowledge, design skills, and web engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Webskills() {
  const webDevelopment = [
    { skills: "Html and Css", skillsValue: "80%", skillClass: "progress-bar" },
    { skills: "Javascript", skillsValue: "80%", skillClass: "progress-bar" },
    { skills: "React js", skillsValue: "70%", skillClass: "progress-bar" },
    { skills: "Mongodb", skillsValue: "50%", skillClass: "progress-bar" },
  ];
  return (
    <>
      <div className="col-sm-6">
        {/*01*/}
        <p className="white skill-heading poppins border-bottom h4 mb-4">
          Web development
        </p>
        {webDevelopment.map((data) => (
          <Skillcontent
            skills={data.skills}
            skillsValue={data.skillsValue}
            skillClass={data.skillClass}
          />
        ))}
      </div>
    </>
  );
}

function Databaseskills() {
  const dataBase = [
    {
      skills: "Mongodb",
      skillsValue: "70%",
      skillClass: "progress-bar progress-database",
    },
    {
      skills: "MySQL",
      skillsValue: "60%",
      skillClass: "progress-bar progress-database",
    },
    {
      skills: "Redis",
      skillsValue: "5%",
      skillClass: "progress-bar progress-database",
    },
    {
      skills: "PostegreSQL",
      skillsValue: "5%",
      skillClass: "progress-bar progress-database",
    },
  ];
  return (
    <>
      <div className="col-sm-6">
        {/*01*/}
        <p className="white skill-heading poppins border-bottom h4 mb-4">
          Database
        </p>
        {dataBase.map((data) => (
          <Skillcontent
            skills={data.skills}
            skillsValue={data.skillsValue}
            skillClass={data.skillClass}
          />
        ))}
      </div>
    </>
  );
}
function Programmingskills() {
  const programming = [
    {
      skills: "Javascript",
      skillsValue: "80%",
      skillClass: "progress-bar progress-programming",
    },
    {
      skills: "Php",
      skillsValue: "60%",
      skillClass: "progress-bar progress-programming",
    },
    {
      skills: "Python",
      skillsValue: "20%",
      skillClass: "progress-bar progress-programming",
    },
    {
      skills: "C",
      skillsValue: "30%",
      skillClass: "progress-bar progress-programming",
    },
  ];
  return (
    <>
      <div className="col-sm-6">
        {/*01*/}
        <p className="white skill-heading poppins border-bottom h4 mb-4">
          Programming
        </p>
        {programming.map((data) => (
          <Skillcontent
            skills={data.skills}
            skillsValue={data.skillsValue}
            skillClass={data.skillClass}
          />
        ))}
      </div>
    </>
  );
}
function Abodeskills() {
  const adobe = [
    {
      skills: "Photoshop",
      skillsValue: "80%",
      skillClass: "progress-bar progress-uiux",
    },
    {
      skills: "Adobe XD",
      skillsValue: "40%",
      skillClass: "progress-bar progress-uiux",
    },
    {
      skills: "Premier pro",
      skillsValue: "80%",
      skillClass: "progress-bar progress-uiux",
    },
    {
      skills: "After effects",
      skillsValue: "30%",
      skillClass: "progress-bar progress-uiux",
    },
  ];
  return (
    <>
      <div className="col-sm-6">
        {/*01*/}
        <p className="white skill-heading poppins border-bottom h4 mb-4">
          Adobe
        </p>
        {adobe.map((data) => (
          <Skillcontent
            skills={data.skills}
            skillsValue={data.skillsValue}
            skillClass={data.skillClass}
          />
        ))}
      </div>
    </>
  );
}

function Skillcontent(get) {
  const width = get.skillsValue;
  return (
    <>
      <div className=" d-flex skill-content ">
        <h6 className="white skill-content">{get.skills}</h6>
        <div className=" white skill-content-num">{get.skillsValue}</div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={80}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={get.skillClass} style={{ width }} />
      </div>
    </>
  );
}

export default Aboutus;
