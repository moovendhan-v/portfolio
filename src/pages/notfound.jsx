import React from "react";
import { Link } from "react-router-dom";
function Notfound() {
 return(
    <div className="text-center text-danger">
      <h1 >404</h1>
        <h1>Page not found</h1>
        <Link to="/home"> Return Home </Link>
    </div>
 )
}

export default Notfound;
