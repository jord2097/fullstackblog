import './post.css';
import { Chip, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import {formatDate} from '../../_services/date-format'
import {Link, useNavigate} from 'react-router-dom'
import DOMpurify from 'dompurify'
import useStyles from './styles';
import NotesIcon from '@mui/icons-material/Notes';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Post(props) {  
  const classes = useStyles();
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
          <div className={classes.manageButtons}>          
          <Button size="small" onClick={() => props.updatePost(props.post)}><NotesIcon />          
            Update
          </Button>
          
          </div>
        )
      } else if (props.currentUser.user.role === "admin"){
        return (
          <div className={classes.manageButtons}>              
            <Button size="small" onClick={() => props.updatePost(props.post)}><NotesIcon />
              Update         
            </Button>
            
            <Button size="small" onClick={() => props.deletePost(props.post._id)}><DeleteIcon />
              Delete         
            </Button>  
          </div>
        )
      } else return
    }
  }

<<<<<<< HEAD
=======
 

>>>>>>> origin
  return (
      <>
    <Card className={classes.card}>
        <CardMedia
        className={classes.media}
        image={props.post.img}
        alt='Post Cover Relating To Theme'
        />        
        <div className="postInfo"></div>
        <div className="postCats">
          <Link to={`/category?c=${props.post.category}`}>
            <span className="postCat">{props.post.category}</span>
          </Link>                  
        </div>
        <Link to={`/posts/${props.post._id}`}>
              <span className="postTitle"> {props.post.title} </span>
<<<<<<< HEAD
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
=======
        </Link>                
        <hr/>
        {/* hr adds line */}            
        <span className="postDate"> By {props.post.creatorID} at {props.post.creationTime ? formatDate(props.post.creationTime) : "Unknown Date"} </span>
        <br />            
                             
        <div className='postDesc' dangerouslySetInnerHTML={createMarkup(props.post.mainText)}/>
        <div className={classes.tags}>
          {trimmedTags[0] ?
          <Link to={`/tag?t=${trimmedTags[0]}`}>
            <Chip label={trimmedTags[0]} /> 
          </Link>
          : null}
          {trimmedTags[1] ? <Link to={`/tag?t=${trimmedTags[1]}`}>
            <Chip label={trimmedTags[1]} /> 
          </Link> : null}
          {trimmedTags[2] ? <Link to={`/tag?t=${trimmedTags[2]}`}>
            <Chip label={trimmedTags[2]} /> 
          </Link> : null}    
        </div>   
        <CardActions>
          {renderButtons()}
        </CardActions>

           
          

            

     </Card>
>>>>>>> origin
     
     

     </>


  )
}
