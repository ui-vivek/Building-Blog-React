import { Link } from "react-router-dom";

const Home=()=>{
   return (
    <>
    <header>
      <ul>
         <li> <Link to="/">Home</Link></li>
         <li> <Link to="/about">About</Link></li>
         <li> <Link to="/contact">Contact</Link></li>
      </ul>
    </header>
    <p>Home Page</p>
    </>
   )
}

export default Home;