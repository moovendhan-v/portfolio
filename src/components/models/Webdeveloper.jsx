import React from "react";
import porfolio from "../../assets/img/moovendhan.png"
import photogram from "../../assets/img/photogram.png"

function Webdeveloper(){
    return(
        <div
        className="modal fade "
        id="web-developer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div
            className="modal-content"
            style={{ backgroundColor: "#89a6ff" }}
          >
            <div className="modal-header">
              <h1
                className="modal-title fs-5 white"
                id="staticBackdropLabel"
              >
                My Projects
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <div className="row text-center">
                <div
                  className="col-6 p-3"
                  style={{ backgroundColor: "rgba(56, 55, 55, 0.253)" }}
                >
                  <a
                    href="https://github.com/agricreation/moovendhanv.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="white poppins mb-2 h6">
                      My personal website
                    </h4>
                    <img
                      className="img-fluid rounded"
                      src={porfolio}
                      alt="moovendhan website"
                    />
                  </a>
                </div>
                <div
                  className="col-6 p-3"
                  style={{ backgroundColor: "rgba(56, 55, 55, 0.253)" }}
                >
                  <a
                    href="https://git.selfmade.ninja/moovendhan/photogram-agri.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="white poppins mb-2 h6">
                      Photogram (Github)
                    </h4>
                    <img
                      className="img-fluid rounded"
                      src={photogram}
                      alt="photogram moovendhan"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a
                href="https://git.selfmade.ninja/moovendhan"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="btn poppins white"
                  style={{
                    backgroundColor: "rgba(255, 175, 3, 0.836);",
                  }}
                >
                  sna gitlab
                </button>
              </a>
              <a href="https://github.com/agricreation" target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="btn poppins white"
                  style={{ backgroundColor: "rgba(190, 0, 0, 0.836)" }}
                >
                  visit github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
        )
}

export default Webdeveloper;