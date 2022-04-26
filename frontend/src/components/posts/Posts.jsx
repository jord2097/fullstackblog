import Post from '../post/Post';
import './posts.css';
import { Grid } from '@material-ui/core'


export default function Posts(props) {
  const updatePost = (_id) => {
    props.cCurrent(_id)
  }

  const deletePost = (_id) => {
    props.client.deletePost(_id).then(() => {
      props.refreshList()
    })
  }

  return (
    <div className='posts'>

        {props.posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={7}>
            <Post post={post} updatePost={updatePost} deletePost={deletePost} currentRole={props.currentRole}/>
          </Grid>
        ))}      

    
    </div>
  )
}
