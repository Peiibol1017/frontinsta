export const SearchPosts = ({ setSearchedPosts }) => {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const text = e.target.elements.search.value;

      const searchParams = new URLSearchParams();
      searchParams.append("text", text);

      const res = await fetch(
        `http://localhost:3001/search?${searchParams.toString()}`
      );
      const results = await res.json();
      console.log(results);
      setSearchedPosts(results.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Buscar:</label>
      <input id="search" name="search" type="search" />
      <button>GO!</button>
    </form>
  );
};
