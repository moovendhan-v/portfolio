import React from "react";
import instagram from "../assets/img/svg/instagram.svg";
import github from "../assets/img/svg/github.svg";
import linkedin from "../assets/img/svg/linkedin.svg";
import youtube from "../assets/img/svg/youtube.svg";

const svg = [
    {src:github , alt:"Agricreations github", link:"https://github.com/agricreation"},
    {src:instagram , alt:"Agricreations instagram", link:"https://www.instagram.com/moovendhan_agriculture/"},
    {src:youtube , alt:"Agricreations youtube",target:"#yt",toggle:"modal", link:"#"},
    {src:linkedin , alt:"Agricreations linkedin",link:"https://www.linkedin.com/in/moovendhanv"},
]
function Svgicons(){
    return(
    svg.map((result)=>(
       <a
       data-bs-toggle={result.toggle}
        data-bs-target={result.target}
        href={result.link}
        className="social-logo"
        type="button"

      >
        <img src={result.src} alt={result.alt} />
      </a>
        ))
    )
}
export default svg;
export {Svgicons};