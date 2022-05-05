import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { apiClient } from "./apiClient.js";
import { Container } from '@material-ui/core'
import { authService } from './_services/auth-service'
import useStyles from './styles'
import {Route, Routes, useLocation } from 'react-router-dom'
import {Search} from './pages/search/search'

function App() {
  const [posts, cPosts] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [currentUser, cCurrentUser] = useState(authService.currentUserValue)
  const [query, cQuery] = useState("")
  const classes = useStyles()
  let location = useLocation()
  const params = new URLSearchParams(location.search)
  const queryParam = params.get('q')
  
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

  const search = () => {
    client.searchbar(query).then((response) => cPosts(response.data))
  }

  useEffect(() => {
    if (queryParam) {      
      search()
    } else {
      refreshList();   
    }
    
  }, [location]);
 
  return (
    <Container maxWidth="lg">
      <TopBar query={query} cQuery={cQuery} search={search} />
      <Container>
        <div className={classes.toolbar}></div>
        <Routes>          
          <Route path="/search" element={<Search client={client} posts={posts} cPosts={cPosts} />} />
          <Route path="/" element={<Home
          client={client}
          refreshList={refreshList}
          posts={posts}
          cPosts={cPosts}
          current={current}
          cCurrent={cCurrent}          
          currentUser={currentUser}
          loggedIn={loggedIn} />} />         
        </Routes>
        
      </Container>
    </Container>
  );
}
export default App;