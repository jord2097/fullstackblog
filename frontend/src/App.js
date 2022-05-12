import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { apiClient } from "./apiClient.js";
import { Container, Grow } from '@material-ui/core'
import { authService } from './_services/auth-service'
import useStyles from './styles'
import {Route, Routes, useLocation } from 'react-router-dom'
import {Search} from './pages/search/search'
import CreateNewPost from "./components/CreateNewPost"
import SinglePost from './pages/single/single'
import Login from "./pages/login/Login"

function App() {
  const [posts, cPosts] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [currentUser, cCurrentUser] = useState(authService.currentUserValue)
  const [query, cQuery] = useState("")
  const classes = useStyles()
  let location = useLocation()
  const params = new URLSearchParams(location.search)
  const queryParam = params.get('q')
  const catParam = params.get('c')
  const tagParam = params.get('t')

  window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
      localStorage.setItem("currentUser", "{}")
      localStorage.setItem("hasCodeRunBefore", true)
      window.location.reload()
    }
  }
  
  const loggedIn = () => {
    cCurrentUser(authService.currentUserValue)
  }
  
  const clientToken = currentUser?.token 
 
  const client = new apiClient(
    clientToken    
  );  

  const refreshList = () => {
    client.getPosts().then((response) => cPosts(response.data));
  };

  const search = () => {
    client.searchbar(queryParam).then((response) => cPosts(response.data))
  }

  const searchCat = () => {
    client.searchCategory(catParam).then((response) => cPosts(response.data))
  }

  const searchTag = () => {
    client.searchTag(tagParam).then((response) => cPosts(response.data))
  }

  useEffect(() => {
    if (queryParam) {      
      search()
    } else if (catParam) {
      searchCat()
    } else if (tagParam) {
      searchTag()
    } else {
      refreshList();
    }
    
    
  }, [location]);
 
  return (
    

   
    <Container maxWidth="lg">
        <TopBar query={query} cQuery={cQuery} search={search} currentUser={currentUser} loggedIn={loggedIn} />
        {/* <div className={classes.toolbar}></div>         */}
        <Routes>          
          <Route path="/search" element={<Search client={client} posts={posts} cPosts={cPosts} search={search} />} />
          <Route path="/" element={<Home
          client={client}
          refreshList={refreshList}
          posts={posts}
          cPosts={cPosts}
          searchCat={searchCat}
          current={current}
          cCurrent={cCurrent}          
          currentUser={currentUser}
          loggedIn={loggedIn} />} /> 
          <Route path='/add' element={<CreateNewPost client={client} refreshList={refreshList} current={current} cCurrent={cCurrent} currentUser={currentUser}/>}></Route>
          <Route path="/posts/:postId" element={<SinglePost client={client} currentUser={currentUser} current={current} cCurrent={cCurrent} refreshList={refreshList} />} />
          <Route path="/login" element={<Login client={client} loggedIn={loggedIn}/>} />
          <Route path="/category" element={<Search client={client} posts={posts} cPosts={cPosts} search={search} />} />
          <Route path="/tag" element={<Search client={client} posts={posts} cPosts={cPosts} search={search}/>} />
        </Routes>

        
      

      
      
    </Container>


     
  );
}
export default App;