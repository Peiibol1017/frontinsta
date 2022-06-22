import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const useLikedPosts = () => {
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
       const { token } = useContext(UserContext);

      const getLikedPosts = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/liked/user`, {
          headers: {
            Authorization: token,
          },
        });
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json.message);
        }
        return json.data;
      };
  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const data = await getLikedPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };    
    getPosts();
  },[]);

  const deletedLikedPost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  console.log(posts)
  return { posts, error, loading, deletedLikedPost };
};
export default useLikedPosts;
