import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { apiClient } from "./apiClient.js";
import { Container } from '@material-ui/core'
import { authService } from './_services/auth-service'

function App() {
  const [posts, cPosts] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [currentUser, cCurrentUser] = useState(authService.currentUserValue)
  
  const loggedIn = () => {
    cCurrentUser(authService.currentUserValue)
  }
  
  const clientToken = currentUser.token 
 
  const client = new apiClient(
    clientToken    
  );  

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
          currentUser={currentUser}
          loggedIn={loggedIn}   
        />
      </Container>
    </Container>
  );
}
export default App;