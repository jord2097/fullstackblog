import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { apiClient } from "./apiClient.js";

function App() {
  const [posts, cPosts] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const client = new apiClient();

  const refreshList = () => {
    client.getPosts().then((response) => cPosts(response.data));
  };

  useEffect(() => {
    refreshList();
  });

  return (
    <>
      <TopBar />
      <Home
        client={client}
        refreshList={refreshList}
        posts={posts}
        cPosts={cPosts}
        current={current}
        cCurrent={cCurrent}
      />
    </>
  );
}
export default App;
