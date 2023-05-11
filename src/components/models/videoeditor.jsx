import React from "react";


function Videoeditor(){
    return(
       <>
      <div className="container about-us mt-3 poppins rounded">
        <div className="row">
          <div
            className="col-lg-6 about-chirld cards-01"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#video-editor"
          >
            <h3
              className="white card-text1"
              style={{ color: "aqua !important" }}
            >
              Hire me
              <br />
              <span className="white card-text2">as a video editor</span>{" "}
            </h3>
          </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="video-editor"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
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
                    Youtube
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="ratio ratio-16x9 yt-model b-3">
                    <iframe
                      src="https://www.youtube.com/embed/GnY3ewl2u_E?rel=0"
                      title="YouTube video"
                      allowFullScreen=""
                    />
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
                  <a href="https://www.youtube.com/@HkragritechsYt">
                    <button
                      type="button"
                      className="btn poppins white"
                      style={{ backgroundColor: "rgba(190, 0, 0, 0.836)" }}
                    >
                      Subscribe <span id="subscriberCount">live sub count</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 about-yt p-3 about-chirld">
            <div
              className="ratio ratio-16x9 yt-about-bd"
              width="100%"
              height="auto"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#video-editor"
            >
              <iframe
                src="https://www.youtube.com/embed/GnY3ewl2u_E?rel=0"
                title="YouTube video"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
       </>
        )
}

export default Videoeditor;