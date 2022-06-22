import "./App.css";
import { useState } from "react";

import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { PostsList } from "./components/PostsList";
import { Post } from "./pages/Post";
import { UploadPost } from "./pages/UploadPost";
import {UserPage} from "./pages/UserPage";
import { LikedPosts } from "./pages/LikedPosts";
import { EditProfile } from "./pages/EditProfile";

function App() {
  const [searchedPosts, setSearchedPosts] = useState([]);
  return (
    <div className="App">
      <main>
        <Header setSearchedPosts={setSearchedPosts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<PostsList posts={searchedPosts} />} />
          <Route path="/upload" element={<UploadPost />} />
          <Route path="/user/:id" element={<UserPage />} />
                    <Route path="/edit/:id" element={<EditProfile/>}/>
          <Route path="/liked/user" element={<LikedPosts />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
