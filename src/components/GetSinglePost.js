import { useContext, useState } from "react"
import {UserContext} from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
export const GetSinglePost = ({post, deletedPost, deletedLikedPost}) =>{

  const {user, token} = useContext(UserContext)
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const deletePost = async (id, token) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/post/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message);
    }
     if (deletedPost){
    deletedPost(id);
    navigate("/");}
  };

  const likePost = async (id, token) => {
    try{
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND}/post/${id}/liked`,
      {
        method: "POST",
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }         
     return data.data 
    }
    catch(error)
    {setError(error.message)}}
  


  const dislikePost = async (id, token) => {
    try{
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND}/post/${id}/liked`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await res.json();
    if (deletedLikedPost) {
      deletedLikedPost(data.id);
    }
    if (!res.ok) {
      likePost(id, token);
}} catch (error) {
  setError(error.message)
}
  };
return (
  <article className="post">
    <Link to={`/user/${post.user_id}`}>
      <p>{post.username}</p>
    </Link>

    <Link to={`/post/${post.id}`}>
      <img
        src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
        alt={post.text}
      />
    </Link>
    <p>{post.mess}</p>
    <p>{new Date(post.created_at).toLocaleString()}</p>

    {user && user.id ? (
      <section>
        <button
          onClick={() => {
            dislikePost(post.id, token);
          }}
        >
        Like
        </button>
      </section>
    ) : null}
    {user && user.id === post.user_id ? (
      <section>
        <button
          onClick={() => {
            if (window.confirm("Seguro que deseas borrar la publicación?"))
              deletePost(post.id, token);
          }}
        >
          Delete
        </button>
        {error ? <p className="error">{error}</p> : null}
      </section>
    ) : null}
  </article>
);}
