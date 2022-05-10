import Post from '../post/Post';
import './posts.css';
import { Grid } from '@material-ui/core'
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
      return (
        props.posts.filter(post => post.draft === true).map((post) => (
          <Grid key={post._id} item xs={12} sm={7}>
            <Post post={post} updatePost={updatePost} deletePost={deletePost} currentUser={props.currentUser} />
          </Grid>
      ))   
      )
    } else if (postView === "unpublished") {
      return (
        props.posts.filter(post => post.published === false).map((post) => (
          <Grid key={post._id} item xs={12} sm={7}>
            <Post post={post} updatePost={updatePost} deletePost={deletePost} currentUser={props.currentUser} />
          </Grid>
      ))
      )
    } else {
      return (
        props.posts.filter(post => post.draft === false && post.published === true).map((post) => (
          <Grid key={post._id} item xs={12} sm={7}>
            <Post post={post} updatePost={updatePost} deletePost={deletePost} currentUser={props.currentUser} />
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
        
        <div className="postFilters">
          <button onClick={showDrafts}>View Drafts</button>
          <br />
          <button onClick={showUnpublished} >View Unpublished</button>
          <br />
          <button onClick={showDefault}> Default</button>
        </div>
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
