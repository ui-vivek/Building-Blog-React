import { useNavigate } from "react-router-dom";
import Header from "./NavBar/Header";

const Home=()=>{
   const goto=useNavigate()
   const goToAbout=()=>{
      goto('/about')
   }
   return (
    <>
    <Header/>
    <p>Home Page</p>
    <button onClick={goToAbout}>Go to About</button>
    </>
   )
}

export default Home;