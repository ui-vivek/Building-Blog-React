import { useNavigate } from "react-router-dom";
import Header from "./NavBar/Header";


const Home = () => {
  const navigate = useNavigate(); // useNavigater hook is use to nevigate to another page
  const goToCreatePost = () => {
    navigate("/createPost"); // we can pass the value as (-1) and it will redirect back to the pre page
  };
  return (
    <>
      <Header />
      <p>Home Page</p>
      <button onClick={goToCreatePost}>Go to Create Post</button>

      
    </>
  );
};

export default Home;
