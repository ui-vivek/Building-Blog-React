import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Header from "./NavBar/Header";
import handleSubmit from "../Firebase/handlesubmit";

export default function About() {
  // const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [subtitle, setSubitle] = useState();
  const [post, setPost] = useState();

  const printData = (e) => {
    e.preventDefault(); // this is used to prevent form reloding the page
    // console.log("Title", title);
    // console.log("SubTitle", subtitle);
    // console.log("Post", post);
    handleSubmit({
      title,
      subtitle,
      post,
      createAt: new Date().toLocaleString(),
    });
  };
  // const goto = () => {
  //   navigate("/");
  // };
  return (
    <>
      <Header />
      {/* <button onClick={goto}>Go to Home</button> */}
      <div className="container mt-5">
        <form onSubmit={printData} className="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              required
              type="text"
              className="form-control"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-field mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Sub Title
            </label>
            <input
              required
              type="text"
              className="form-control"
              onChange={(e) => {
                setSubitle(e.target.value);
              }}
            />
          </div>
          <div className="form-field mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Post
            </label>
            <textarea
              required
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setPost(e.target.value);
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary">Create Post</button>
        </form>
      </div>
    </>
  );
}
