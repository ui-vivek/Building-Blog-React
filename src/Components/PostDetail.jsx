import "./PostDetail.css";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { firestore } from "../Firebase/firebase";
import Header from "./NavBar/Header";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
    .collection("posts")
    .doc(postId)
    .get()
    .then((snapshot) => {
      // console.log("snapshot",snapshot.data());
      setPost(snapshot.data());
    });
  }, [postId]);

  return (
    <>
      <Header />
      <div id="postdetails" className="container mt-4 fade-in">
        <span className="position">
          <Link to={'/'} >
            <i class="bx bx-x bx-md"></i>
          </Link>
        </span>
        <h1 className="mb-2 text-center text-primary">
          <u>{post.title}</u>
        </h1>
        <small className="mb-2 px-4 text-info">[ Post created at : {post.createAt} ]</small>
        <p className="mt-3 px-4">{post.post}</p>
      </div>
    </>
  );
}
