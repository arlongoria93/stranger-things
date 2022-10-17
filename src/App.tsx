import { useState, useEffect } from "react";
import { fetchAllPosts } from "../utils/helpers";
import "./App.css";

function App() {
  useEffect(() => {
    const fetch = async () => {
      const posts = await fetchAllPosts();
      console.log(posts);
    };
    fetch();
  }, []);

  return <div className="App"></div>;
}

export default App;
