import { useEffect ,useState} from "react";
import {useNavigate,Link } from "react-router-dom";
import Header from "./NavBar/Header";
import { firestore } from "../Firebase/firebase";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // useNavigater hook is use to nevigate to another page
 
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


  const goToCreatePost = () => {
    navigate("/createPost"); // we can pass the value as (-1) and it will redirect back to the pre page
  };
  return (
    <>
      <Header />
      <p>Home Page</p>
      <button onClick={goToCreatePost}>Go to Create Post</button>
      <h1>Tech Blog</h1>
      <div>
        {posts.map((post,index)=>(
            <div className="post" key={`post-${index}`}>
              <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
