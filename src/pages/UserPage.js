import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Errors } from "../components/Errors";
import { Loading } from "../components/Loading";
import { PostsList } from "../components/PostsList";
import { UserContext } from "../contexts/UserContext";
import  usePosts  from "../hooks/usePosts";
import  useUser  from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const {user, loading, error } =  useUser(id);
  const {token} = useContext(UserContext);
  const { posts } = usePosts(user.id);

  if (loading) return <Loading />;
  if (error) return <Errors message={error} />;

  return token ? (
    <div>
      <p>
        {user.name} {user.surname}
      </p>
      <p>Edad: {user.age} años</p>
      <p>Correo: {user.email}</p>
      <Link to={`/edit/${id}`}>Edita tu perfil</Link>
      <PostsList posts={posts} />
    </div>
  ) : (
    <div>
      <p>
        {user.name} {user.surname}
      </p>
      <p>Edad: {user.age} años</p>
      <p>Correo: {user.email}</p>
      <PostsList posts={posts} />
    </div>
  );
};
