import "../Css/Header.css";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { SearchPosts } from "./SearchPosts";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Header = ({ setSearchedPosts }) => {
  const {user, logout} = useContext(UserContext)
  return user ? (
    <header className="header">
      <h1 className="title">
        <Link to={"/"}>INSTAGRAM</Link>
      </h1>
      <div className="search">
        <SearchPosts setSearchedPosts={setSearchedPosts} />
      </div>
      <div className="profile">
        <Link to={`/user/${user.id}`}>Perfil</Link>
      </div>
      <div className="liked">PostGusta</div>
      <div className="upload">
        <Link to={"/upload"}>UP</Link>
      </div>
      <button onClick={() => logout()}>LogOut</button>
    </header>
  ) : (
    <header className="header">
      <h1 className="title">
        <Link to={"/"}>INSTAGRAM</Link>
      </h1>
      <div className="search">
        <SearchPosts setSearchedPosts={setSearchedPosts} />
      </div>
      <div className="register">
        Aún no tienes una cuenta?
        <Link to={"/register"}>Regístrate!</Link>
      </div>
      <div className="login">
        <Login />
      </div>
    </header>
  );
};
