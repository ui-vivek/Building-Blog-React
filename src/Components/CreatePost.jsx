import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Header from "./NavBar/Header";
import handleSubmit from "../Firebase/handlesubmit";

export default function About() {
  // const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [subtitle, setSubitle] = useState();
  const [post, setPost] = useState();

  const submitForm = (e) => {
    e.preventDefault(); // this is used to prevent form reloding the page
    // console.log("Title", title);
    // console.log("SubTitle", subtitle);
    // console.log("Post", post);
    handleSubmit({
      title,
      subtitle,
      post,
      createAt: new Date().toLocaleString(),
      time: new Date(),
    });

    setTitle("");
    setSubitle("");
    setPost("");
    callAlert();
  };
  // const goto = () => {
  //   navigate("/");
  // };
  
  //This function is use to show the Alert after post created
  const callAlert = () => {
    const divv = document.getElementById("alertMsg");
    divv.style.display = "block";
    setTimeout(() => {
      divv.style.display = "none";
    }, 2000);
  };

  return (
    <>
      <Header />
      {/* The below button to go any other page using useNavigate Hook */}
      {/* <button onClick={goto}>Go to Home</button> */}
      <div
        style={{ display: "none" }}
        id="alertMsg"
        className="alert alert-dismissible alert-primary"
        role="alert"
      >
        <div className="text-center">Post created and published 😇👍.</div>
      </div>
      <div className="container mt-5">
        <form onSubmit={submitForm} className="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              required
              value={title}
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
              value={subtitle}
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
              value={post}
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
