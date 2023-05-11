import React from "react";

function Button(get){
    return(
        <button type="button" className="btn-info px-4 mb-1 poppins">
        <i className={get.icon}></i> {get.name}
      </button>
    )
}

export default Button;