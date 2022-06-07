
export const PostsList = ({ posts}) => {
           
  return (
    <ul className="posts">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <p>{post.user_id}</p>
            <img
              src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
              alt={post.text}
            />
            <p>{post.mess}</p>
          </li>
        );
      })}
    </ul>
  );
};