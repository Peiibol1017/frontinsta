import './App.css';
import { SearchPosts } from './components/SearchPosts';
import { Login } from './components/Login';
import { PostsFromSearch } from './components/PostsFromSearch';
import { useState } from 'react';
import Posts from './components/Posts';

function App() {
  const [searchedPosts, setSearchedPosts] = useState([]);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>INSTAGRAM</h1>
        <SearchPosts setSearchedPosts={setSearchedPosts} />
        <Login />
        <p>Registro</p>
        {/* Perfil */}
        {/* likedposts */}
        {/* uploadpost */}
      </header>
      <main>
        <PostsFromSearch posts={searchedPosts} />
        <Posts />
      </main>
    </div>
  );
}

export default App;
