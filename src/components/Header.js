import { Link } from "react-router-dom";
import { Login } from "./Login";
import { SearchPosts } from "./SearchPosts";

export const Header = ({setSearchedPosts}) => {
  return (
    <header>
      <h1><Link to={"/"}>INSTAGRAM</Link></h1>
      <div>    
      <SearchPosts setSearchedPosts={setSearchedPosts} />
      <Login />
      </div>
      <p><Link to={"/register"}>Regístrate!</Link></p>
      {/* Perfil */}
      {/* likedposts */}
      {/* uploadpost */}
    </header>
  );
};
