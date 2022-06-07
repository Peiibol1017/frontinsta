import "../Css/Header.css";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { SearchPosts } from "./SearchPosts";

export const Header = ({ setSearchedPosts }) => {
  return (
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
      {/* Perfil */}
      {/* likedposts */}
      {/* uploadpost */}
    </header>
  );
};
