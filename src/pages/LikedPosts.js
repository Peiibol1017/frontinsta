import { Errors } from "../components/Errors";
import { Loading } from "../components/Loading";
import { PostsList } from "../components/PostsList";
import useLikedPosts from "../hooks/useLikedPosts";


export const LikedPosts = () => {
  const { posts , loading, error } = useLikedPosts();

  if (loading) return <Loading />;
  if (error) return <Errors message={error} />;

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
};
