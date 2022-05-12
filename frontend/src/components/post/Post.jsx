import './post.css';
import {Chip} from '@material-ui/core'
import {formatDate} from '../../_services/date-format'
import {Link} from 'react-router-dom'


export default function Post(props) { 
  const regexHTML = /\n/g // identifies newlines
  const separatedTags = props.post.tags?.split(',')
    const trimmedTags = separatedTags?.map(tag => {
        return tag.trim()
    })   

  function renderButtons() {
    if (props.currentUser.user){
      if (props.currentUser.user.role === "author"){
        return (
          <>
          <button onClick={() => props.updatePost(props.post)}>Update Post</button>
          <span> (Author Controls) </span>
          </>
        )
      } else if (props.currentUser.user.role === "admin"){
        return (
          <>
              
              <button onClick={() => props.updatePost(props.post)}>Update Post</button>
              <button onClick={() => props.deletePost(props.post._id)} >Delete Post</button>
              <span> (Admin Controls)  </span>
          </>
        )
      } else return
    }
  }

  return (
      <>
    <div className='post'>
        <img
        className='postImg'
        src={props.post.img}
        alt=''
        />

        <div className="postInfo"></div>
            <div className="postCats">
                <span className="postCat">{props.post.category}</span>                  
            </div>
            <Link to={`/posts/${props.post._id}`}>
              <span className="postTitle"> {props.post.title} </span>
            </Link>
            
            <br />            
            {renderButtons()}
            
            <hr/>
            {/* hr adds line */}
            
            <span className="postDate"> {props.post.creationTime ? formatDate(props.post.creationTime) : "Unknown Date"} </span>            
            <Chip label={trimmedTags[0]} />
            <Chip label={trimmedTags[1]} />     
            <div className='postDesc' dangerouslySetInnerHTML={{__html: props.post.mainText.replace(regexHTML,"<br />")}}/>
     </div>
     
     

     </>


  )
}
