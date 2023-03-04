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
        console.log("snapshot",snapshot.data());
        setPost(snapshot.data())
      });
  }, [postId]);

  return (
    <>
    <Header/>
    <div>
      <h1>{post.title}</h1>
      <p>{post.post}</p>
    </div>
    </>
  )
}
