import { useEffect, useState } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message);
        }
        setPosts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);
  return { posts, error, loading,};
};
