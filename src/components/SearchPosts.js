import { Link } from "react-router-dom";

export const SearchPosts = ({ setSearchedPosts }) => {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const text = e.target.elements.search.value;
      if (!text) {throw new Error ("buscar algo es obligatorio")}

      const searchParams = new URLSearchParams();
      searchParams.append("text", text);

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/search?${searchParams.toString()}`
      );
      const results = await res.json();
      if (results.length === 0) {throw new Error ("No hay resultados para tu busqueda")}
      console.log(results.data);
      setSearchedPosts(results.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Buscar:</label>
      <input id="search" name="search" type="search" />
      <button>
        GO!
      </button>
    </form>
  );
};
          
