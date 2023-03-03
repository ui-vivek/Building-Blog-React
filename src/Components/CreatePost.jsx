import React , {useState} from "react";
import {  useNavigate } from "react-router-dom";
import Header from "./NavBar/Header";
import handleSubmit from '../Firebase/handlesubmit'

export default function About() {
  const [title, setTitle] = useState();
  const [subtitle, setSubitle] = useState();
  const [post, setPost] = useState();

  const printData = (e) => {
    e.preventDefault(); // this is used to prevent form reloding the page
    console.log("Title", title);
    console.log("SubTitle", subtitle);
    console.log("Post", post);
    handleSubmit({
      title,
      subtitle,
      post,
      createAt : new Date()
    })
  };
  const navigate = useNavigate();
  const goto = () => {
    navigate("/");
  };
  return (
    <>
      <Header />
      <p>Create A Post</p>
      <button onClick={goto}>Go to Home</button>
      <form onSubmit={printData} className="container">
        <div className="form-field">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input
            type="text"
            onChange={(e) => {
              setSubitle(e.target.value);
            }}
          />
        </div>
        <div className="form-field">
          <label>Post</label>
          <textarea
            onChange={(e) => {
              setPost(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </>
  );
}
