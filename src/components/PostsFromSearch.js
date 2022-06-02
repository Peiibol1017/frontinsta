export const PostsFromSearch = ({ posts }) => {
  return (
    <ul className="posts">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <img src={post.image} alt="algo" />
            <p>{post.mess}</p>
          </li>
        );
      })}
    </ul>
  );
};
