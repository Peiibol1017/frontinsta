import "../Css/PostsList.css";
import { GetSinglePost } from "./GetSinglePost";
export const PostsList = ({posts, deletedPost, deletedLikedPost}) => {
           
  return (
    <ul className="postslist">
      {posts.map((post) => {
        return (
          <li key={post.id} className="post">
              <GetSinglePost post={post} deletedPost={deletedPost} deletedLikedPost={deletedLikedPost}/>
          </li>
        );
      })}
    </ul>
  );
};