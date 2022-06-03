import { Errors } from "../components/Errors";
import { GetPosts } from "../components/GetPosts";
import { Loading } from "../components/Loading";
import { usePosts } from "../hooks/usePosts"

export const Home = (searchedPosts) => {
    const {posts, loading, error} = usePosts();
    if (loading) return <Loading/>;
    if (error) return <Errors message={error} />;
if (searchedPosts.searchedPosts.length !== 0) 
    return (
      <div>
        <GetPosts posts={searchedPosts.searchedPosts} />
      </div>
    );
     return (
      <div>
        <GetPosts posts={posts} />
      </div>
    );
}