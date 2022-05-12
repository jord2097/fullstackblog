import './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import { Container, Grow, Grid } from '@material-ui/core';

export default function Home(props) {
  return (

    <>
        <Header/>
      
        
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
            <Posts client={props.client} refreshList={props.refreshList} posts={props.posts} cPosts={props.cPosts} searchCat={props.searchCat} current={props.current} cCurrent={props.cCurrent} currentUser={props.currentUser} />
            </Grid>
            <Grid item xs={12} sm={4}>      
            <Sidebar client={props.client} refreshList={() => {
            props.refreshList()
            props.cCurrent(undefined)
            }}
            current={props.current}
            cCurrent={props.cCurrent}           
            currentUser={props.currentUser}
            loggedIn={props.loggedIn} 
            />
            </Grid> 
          </Grid>
        
      
    </>
  )
}
