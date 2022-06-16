import { useEffect, useState } from "react";

                     const getAllPosts = async () => {
                       const res = await fetch(
                         `${process.env.REACT_APP_BACKEND}`
                       );
                       const json = await res.json();
                       if (!res.ok) {
                         throw new Error(json.message);
                       }
                       return json.data;
                     };
                     const getUserPosts = async (id) => {
                       const res = await fetch(
                         `${process.env.REACT_APP_BACKEND}/user/${id}/posts`
                       );
                       const json = await res.json();
                       if (!res.ok) {
                         throw new Error(json.message);
                       }
                       return json.data;
                     };

const usePosts = (id) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 
      useEffect(() => {
        const getPosts = async () => {
          try {
            setLoading(true);
            const data = id 
            ? await getUserPosts(id) 
            : await getAllPosts();
            setPosts(data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        getPosts();
      }, [id]);

      const deletedPost = (id) => {

        setPosts(posts.filter((post) => post.id !== id));
      };
      return { posts, error, loading, deletedPost };
    };
export default usePosts