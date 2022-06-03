export const GetPosts = ({ posts }) => {
            console.log(posts);
  return (
    <ul className="posts">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <img src={post.image} alt="" />
            <p>{post.mess}</p>
          </li>
        );
      })}
    </ul>
  );
};