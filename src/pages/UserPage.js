import "../Css/Profile.css"
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Errors } from "../components/Errors";
import { Loading } from "../components/Loading";
import { PostsList } from "../components/PostsList";
import { UserContext } from "../contexts/UserContext";
import  {usePosts}  from "../hooks/usePosts";
import  {useUser}  from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const {user, loading, error } =  useUser(id);
  const {token} = useContext(UserContext);
  const { posts } = usePosts(user.id);

  if (loading) return <Loading />;
  if (error) return <Errors message={error} />;

  return token ? (
    <div>
       <div className="profileinfo">
      <p className="name">
        {user.name} {user.surname}
      </p>
      <p className="age">Edad: {user.age} años</p>
      <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
      <Link to={`/edit/${id}`}><button>Edita perfil</button></Link>
      <PostsList posts={posts} />
    </div>
  ) : (
    <div>
      <div className="profileinfo">
      <p>
        {user.name} {user.surname}
      </p>
      <p>Edad: {user.age} años</p>
      <p>Correo: {user.email}</p>
      </div>
      <PostsList posts={posts} />
    </div>
  );
};
