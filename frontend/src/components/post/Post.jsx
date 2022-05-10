import './post.css';
import {Chip} from '@material-ui/core'
import {formatDate} from '../../_services/date-format'
import {Link} from 'react-router-dom'
import DOMpurify from 'dompurify'


export default function Post(props) { 
  const regexHTML = /\n/g // identifies newlines
  const separatedTags = props.post.tags?.split(',')
  const trimmedTags = separatedTags?.map(tag => {
        return tag.trim()
  })   
  const createMarkup = (HTML) => {
    return {
      __html: DOMpurify.sanitize(HTML).replace(regexHTML, "<br />")
    }
  }


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
            <span className="postDate"> By {props.post.creatorID} at {props.post.creationTime ? formatDate(props.post.creationTime) : "Unknown Date"} </span>            
            {trimmedTags[0] ? <Chip label={trimmedTags[0]} /> : null}
            {trimmedTags[1] ? <Chip label={trimmedTags[1]} /> : null}
            {trimmedTags[2] ? <Chip label={trimmedTags[1]} /> : null}                 
            <div className='postDesc' dangerouslySetInnerHTML={createMarkup(props.post.mainText)}/>
          

            

     </div>
     
     

     </>


  )
}
