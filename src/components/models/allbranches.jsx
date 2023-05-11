import React from "react";

function Allbranches(){
    return(
        <div
        className="modal fade "
        id="all-branches"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "#89a6ff" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5 white" id="staticBackdropLabel">
                <i className="fa-duotone fa-browser" /> Our Products
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {/* Line  */}
            <div className="text-center text-primary">Websites</div>
            <div className="modal-body ">
              <div className="row text-center">
                <div
                  className="col-6 p-3"
                  style={{ backgroundColor: "rgba(56, 55, 55, 0.253)" }}
                >
                  <a href="https://www.bestappsintamil.in/" target="_blank">
                    <h4 className="white poppins mb-2 h6">
                      Best apps in tamil
                    </h4>
                    <img
                      className="img-fluid rounded"
                      src="assets/img/products/bestappsintamil blog agricreations.png"
                      alt="bestappsintamil blog agricreations"
                    />
                  </a>
                </div>
                <div
                  className="col-6 p-3"
                  style={{ backgroundColor: "rgba(56, 55, 55, 0.253)" }}
                >
                  <a
                    href="https://techeyguys.agricreations.com/"
                    target="_blank"
                  >
                    <h4 className="white poppins mb-2 h6">Techey guys</h4>
                    <img
                      className="img-fluid rounded"
                      src="assets/img/products/Techeyguys blogs agricreations.png"
                      alt="techeyguys blog agricreations"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* line two  */}
            <div className="text-center text-danger">Youtube</div>
            <div className="modal-body ">
              <div className="row text-center">
                <div
                  className="col-6 p-3"
                  style={{ backgroundColor: "rgba(56, 55, 55, 0.253)" }}
                >
                  <a
                    href="https://www.youtube.com/@bestappsintamil"
                    target="_blank"
                  >
                    <h4 className="white poppins mb-2 h6">@bestappsintamil</h4>
                    <img
                      className="img-fluid rounded"
                      src="assets/img/products/bestappsintamil youtube.png"
                      alt="bestappsintamil blog agricreations"
                    />
                  </a>
                </div>
                <div
                  className="col-6 p-3"
                  style={{ backgroundColor: "rgba(56, 55, 55, 0.253)" }}
                >
                  <a
                    href="https://www.youtube.com/@HkragritechsYt"
                    target="_blank"
                  >
                    <h4 className="white poppins mb-2 h6">@hkragritechsYt</h4>
                    <img
                      className="img-fluid rounded"
                      src="assets/img/products/hkragrtechs youtube.png"
                      alt="techeyguys blog agricreations"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-2b text-center bg-danger">
              <button
                style={{
                  paddingRight: "9rem !important",
                  paddingLeft: "9rem !important",
                }}
                type="button"
                className="btn btn-danger text-center"
                data-bs-dismiss="modal"
              >
                <i className="fa-sharp fa-solid fa-heart-crack" /> Close
              </button>
              {/* <a href="https://github.com/agricreation" target="_blank">
    <button type="button" class="btn poppins white" style="background-color: rgba(190, 0, 0, 0.836);">visit github</button>
  </a> */}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Allbranches;