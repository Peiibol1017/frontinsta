import "./App.css";
import { useState } from "react";

import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { PostsList } from "./components/PostsList";
import { Post } from "./pages/Post";

function App() {
  const [searchedPosts, setSearchedPosts] = useState([]);
  return (
    <div className="App">
      <main>
        <Header setSearchedPosts={setSearchedPosts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<PostsList posts={searchedPosts} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
