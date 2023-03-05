import { useEffect ,useState} from "react";
import {Link } from "react-router-dom";
// import {useNavigate } from "react-router-dom";
import Header from "./NavBar/Header";
import { firestore } from "../Firebase/firebase";
import './Home.css'

function Home() {
  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate(); // useNavigater hook is use to nevigate to another page
 
  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        // console.log('posts', posts);
        setPosts(posts);
      });
  }, []);


  // const goToCreatePost = () => {
  //   navigate("/createPost"); // we can pass the value as (-1) and it will redirect back to the pre page
  // };
  return (
    <>
      <Header />
      {/* <button onClick={goToCreatePost}>Go to Create Post</button> */}
      <h1 className="text-center m-3">Tech Blog</h1>
      <div className="container fade-in">
        {posts.map((post,index)=>(
            <div className="m-2 p-2 post-box fade-in" key={`post-${index}`}>
              <Link className="link" to={`/post/${post.id}`}>
              <h3 className="mx-4">{post.title}</h3>
              <p className="mx-4 mb-0 text-muted">{post.subtitle}</p>
              </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
