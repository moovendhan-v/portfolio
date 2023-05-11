import React from "react";
import tech from "../../assets/img/techeyguys.png"
import bestapps from "../../assets/img/bestintrestingapps.bestappsintamil.in.png"

function Blogger(){
    return(
        <div
        className="modal fade "
        id="blogger"
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
                My Blogs
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
                    href="https://techeyguys.agricreations.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="white poppins mb-2 h6">Techey guys</h4>
                    <img
                      className="img-fluid rounded"
                      src={tech}
                      alt=""
                    />
                  </a>
                </div>
                <div
                  className="col-6 p-3"
                  style={{ backgroundColor: "rgba(56, 55, 55, 0.253)" }}
                >
                  <a
                    href="https://www.bestappsintamil.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="white poppins mb-2 h6">
                      Best apps in tamil
                    </h4>
                    <img
                      className="img-fluid rounded"
                      src={bestapps}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="modal-footer pb-3">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
        )
}

export default Blogger;