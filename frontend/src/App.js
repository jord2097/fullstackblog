import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { apiClient } from "./apiClient.js";
import { Container } from '@material-ui/core'

function App() {
  const [posts, cPosts] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [token, cToken] = useState(window.localStorage.getItem("token"))
  const [currentRole, cCurrentRole] = useState("") 
  
  const client = new apiClient(
    token
  );
  
  const loggedIn = (newToken, newRole) => {
    window.localStorage.setItem("token", newToken);
    cToken(newToken)
    console.log(newRole)
    console.log(typeof newRole)
    cCurrentRole(newRole)    
  }

  const refreshList = () => {
    client.getPosts().then((response) => cPosts(response.data));
  };

  useEffect(() => {
    refreshList();    
  }, []);
 
  return (
    <Container maxWidth="lg">
      <TopBar />
      <Container>
        <Home
          client={client}
          refreshList={refreshList}
          posts={posts}
          cPosts={cPosts}
          current={current}
          cCurrent={cCurrent}
          token={token}
          loggedIn={loggedIn}
          currentRole={currentRole}          
        />
      </Container>
    </Container>
  );
}
export default App;
