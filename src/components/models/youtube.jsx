import React from "react"


function Youtube(){
    return(
      <div className="modal fade " id="yt" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content" style={{backgroundColor: "#89a6ff"}}>
          <div className="modal-header">
            <h1 className="modal-title fs-5 white" id="staticBackdropLabel">Youtube</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row text-center" >
              <div className="col-6 p-3" style={{backgroundColor: "rgba(56, 55, 55, 0.253)"}}>
                <a href="https://www.youtube.com/c/HkragritechsYt" target="_blank" rel="noreferrer" title="Hkr agri tech youtube">
                <iframe src="hkragritechs.html" className="img-fluid rounded" frameborder="0" title="hkr agri techs youtube"></iframe>
                <h4 className="white poppins mt-3 mb-2 h6">Hkr agri techs</h4> </a>
              </div>
              <div className="col-6 p-3" style={{backgroundColor: "rgba(56, 55, 55, 0.253)"}}>
                <a href="https://www.youtube.com/@bestappsintamil" target="_blank" rel="noreferrer">
                <iframe src="bestappsintamil.html" className="img-fluid rounded" frameborder="0" title="Best apps in tamil youtube"></iframe> 
                <h4 className="white poppins mt-3 mb-2 h6">Best apps in tamil</h4>
              </a>
              </div>
  
            </div>
          </div>
          <div className="modal-footer pb-3">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Youtube; 