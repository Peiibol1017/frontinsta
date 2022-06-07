export const GetSinglePost = ({post}) =>{
return (
  <article className="post">
    <p>{post.user_id}</p>
    <img
      src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
      alt={post.text}
    />
    <p>{post.mess}</p>
  </article>
);
}