import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./firebase";
const handleSubmit = (data) => {
  const ref = collection(firestore, "posts"); // Firebase creates this automatically
  let Data = {
    title:data.title,
    subtitle:data.subtitle,
    post:data.post,
    createAt : data.createAt,
    time:data.time
  };
  try {
    addDoc(ref, Data);
  } catch (err) {
    console.log(err);
  }
};
export default handleSubmit;
