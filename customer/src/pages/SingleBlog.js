import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <IoArrowBackOutline className="fs-4 " />
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  suscipit ullam voluptatibus. Magnam, ea a, quibusdam, ullam
                  iusto sint eveniet ex veniam minus provident fugit cum cumque
                  deleniti impedit illum. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Odio suscipit ullam
                  voluptatibus. Magnam, ea a, quibusdam, ullam iusto sint
                  eveniet ex veniam minus provident fugit cum cumque deleniti
                  impedit illum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
