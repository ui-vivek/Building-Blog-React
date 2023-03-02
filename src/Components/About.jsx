import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./NavBar/Header";

export default function About() {
  const navigate = useNavigate();
  const goto = () => {
    navigate("/");
  };
  return (
    <>
      <Header />
      <p>About Page</p>
      <button onClick={goto}>Go to Home</button>
    </>
  );
}
