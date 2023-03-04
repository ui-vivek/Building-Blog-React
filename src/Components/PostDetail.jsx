import './PostDetail.css'
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../Firebase/firebase";
import Header from "./NavBar/Header";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        // console.log("snapshot",snapshot.data());
        setPost(snapshot.data())
      });
  }, [postId]);

  return (
    <>
    <Header/>
    <div className="container postdetails fade-in">
      <h1 className="m-4 text-center"><u>{post.title}</u></h1>
      <small>[ Post created at : {post.createAt} ]</small>
      <p className='mt-2'>{post.post}</p>
    </div>
    </>
  )
}
