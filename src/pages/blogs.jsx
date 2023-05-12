import React from "react";
import "../assets/css/blog.css";
function Blogs() {
    // const blogPost = [
    //     {imgSrc : "" , visitBlog:"", title:""}
    // ]
  return (
    <div className="container">
        <BlogContent />
    </div>
  );
}

function BlogContent(){
    return(
        <div className="row bg-blue p-2 mt-4">
        <div className="col-lg-4 text-center rounded-pill">
          <img
            className="imgs img-fluid"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQLiM6hjnbTUk73S2pjgkRTHrnB-FyzWKu8ZgIrwu8QGLVQ3cazloJ-_YQt7__Ka93v229WU_2ACZ0JMnRdGWKwSTEbbwZlESaFn2MgkztSoCjIppLWIKYwG52rdwRDOiZ1U41gghSWkrG0GSioERYceA0atDVbdqGVidTemBbYmb8Sto2LvsllX2LvA/s3840/how%20to%20use%20dynamic%20island%20in%20any%20android.jpg"
            alt="Best apps in tamil"
          />
        </div>
        <div className="col-lg-8 text-light p-4">
          <div className="card-body">
            <h5 className="card-title">
              Discover the Best Apps in Tamil Language on best apps in tamil
            </h5>
            <br />
            <a href="https://www.bestappsintamil.in/" className="btn btn-light">
              {" "}
              <img
                className="rounded"
                src="//4.bp.blogspot.com/-hWAgovwMgfM/ZBKv6OXPzHI/AAAAAAAAEbo/-vy40ZXvBgoxj4IqRCtfyLG7QN3HxGNTQCK4BGAYYCw/s35/profile.jpg"
                alt=""
              />{" "}
              Visit Blog
            </a>
          </div>
        </div>
      </div>
    )
}

export default Blogs;
