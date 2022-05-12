import Post from '../post/Post';
import './posts.css';
import { Grid, Button, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';


export default function Posts(props) {
  const [postView, cPostView] = useState("default")
  const classes = useStyles();  
  const navigate = useNavigate()

  const updatePost = (_id) => {
    props.cCurrent(_id)
    navigate('/add')
  }

  const deletePost = (_id) => {
    props.client.deletePost(_id).then(() => {
      props.refreshList()
    })
  }  

  const showDrafts = () => {
    cPostView("drafts")
  }
  
  const showUnpublished = () => {
    cPostView("unpublished")
  }

  const showDefault = () => {
    cPostView("default")
  }

  const renderPosts = () => {
    if (postView === "drafts") {
      console.log(props.posts)
      return (
        props.posts.filter(post => post.draft === true).map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} searchCat={props.searchCat} updatePost={updatePost} deletePost={deletePost} currentUser={props.currentUser} />
          </Grid>
      ))   
      )
    } else if (postView === "unpublished") {
      return (
        props.posts.filter(post => post.published === false).map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} searchCat={props.searchCat} updatePost={updatePost} deletePost={deletePost} currentUser={props.currentUser} />
          </Grid>
      ))
      )
    } else {
      return (        
        props.posts.filter(post => post.draft === false && post.published === true).map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} searchCat={props.searchCat} updatePost={updatePost} deletePost={deletePost} currentUser={props.currentUser} />
          </Grid>
      ))
      )
    }
        
  }
  switch (props.currentUser.user?.role) {
    case "author":
    case "admin":
      return ( 
        <>
        
        <Toolbar className={classes.toolbar} >
          <Button className="toolbarButtons" style={{ marginRight: 16 }} variant="contained" onClick={showDrafts}>View Drafts</Button>
          <br />
          <Button className="toolbarButtons" style={{ marginRight: 16 }} variant="contained" onClick={showUnpublished} >View Unpublished</Button>
          <br />
          <Button className="toolbarButtons" style={{ marginRight: 16 }} variant="contained" onClick={showDefault}> Default</Button>
        </Toolbar>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {renderPosts()}   
          
        </Grid>
        </>
      )
    default: return (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {renderPosts()}   
      </Grid>
    )
  }
  
}
