import "./App.css";
import { PostsFromSearch } from "./pages/PostsFromSearch";
import { useState } from "react";

import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { GetPosts } from "./components/GetPosts";

function App() {
  const [searchedPosts, setSearchedPosts] = useState([]);
  return (
    <div className="App">
      <main>
        <Header setSearchedPosts={setSearchedPosts} />
        <Routes>
          <Route path="/" element={<Home searchedPosts={searchedPosts}/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
