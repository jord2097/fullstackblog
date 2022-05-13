import { Grid, Chip, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/'
import {formatDate} from '../../_services/date-format'
import {useEffect, useState, useMemo} from 'react'
import {Link, useParams} from 'react-router-dom'
import useStyles from './styles'
import NotesIcon from '@mui/icons-material/Notes';
import DeleteIcon from '@mui/icons-material/Delete';
import DOMpurify from 'dompurify'
import { FormControlUnstyledContext } from '@mui/base'
import { useNavigate } from 'react-router-dom';




export default function SinglePost(props) {
    const {postId} = useParams()
    const [currentPost, cCurrentPost] = useState({})
    const [tags, cTags] = useState([])  
    const classes = useStyles()
    const navigate = useNavigate()
    
    const regexHTML = /\n/g // identifies newlines
   
    const createMarkup = (HTML) => {
      return {        
        __html: DOMpurify.sanitize(HTML).replace(regexHTML, "<br />")
      }
    }

    const updatePost = (post) => {
      console.log(post)
      props.cCurrent(post)      
      navigate('/add')
    }

    const deletePost = (id) => {
      props.client.deletePost(id).then(() => {
        navigate('/')
      })
    }
    
    

    useEffect(() => {        
        const fetchData = async () => {
          const result = await props.client.getSinglePost(postId)          
          cCurrentPost(result.data)         
        }
        fetchData()
        .catch(console.error)       
    }, [])

    useEffect(() => {
      const renderTags = () => {
        const separatedTags = currentPost.tags?.split(',')
        const trimmedTags = separatedTags?.map(tag => {
          return tag.trim()
        })      
        cTags(trimmedTags)       
      }
      renderTags()
    }, [currentPost]) 
    
  
    function renderButtons() {
      if (props.currentUser.user){
        if (props.currentUser.user.role === "author"){
          return (
            <div className={classes.manageButtons}>
            <Button size="small" onClick={() => props.updatePost(currentPost)}><NotesIcon />          
            Update
            </Button>
            </div>
          )
        } else if (props.currentUser.user.role === "admin"){
          return (
            <div className={classes.manageButtons}>
              <Button size="small" onClick={() => updatePost(currentPost)}><NotesIcon />
                Update         
              </Button>
            
              <Button size="small" onClick={() => deletePost(currentPost._id)}><DeleteIcon />
                Delete         
              </Button>  
            </div>
          )
        } else return
      }
    }
  
  
  
    return (
      
      <Card className={classes.card}>
          <CardMedia
          className={classes.media}
          image={currentPost.img}
          alt=''
          />
  
          <div className="postInfo"></div>
          <div className="postCats">
            <Link to={`/category?c=${currentPost.category}`}>
              <span className="postCat">{currentPost.category}</span>
            </Link>               
            </div>
            <Link to={`/posts/${currentPost._id}`}>
            <span className="postTitle"> {currentPost.title} </span>
            </Link>
          <br />                      
          <hr/>             
          <span className="postDate"> By {currentPost.creatorID} at {currentPost.creationTime ? formatDate(currentPost.creationTime) : "Unknown Date"} </span>            
          <div className={classes.mainText} dangerouslySetInnerHTML={createMarkup(currentPost.mainText)}/>                
          { tags && <div className={classes.tags}>           
          {tags[0] ?
          <Link to={`/tag?t=${tags[0]}`}>
            <Chip label={tags[0]} /> 
          </Link>
          : null}
          {tags[1] ? <Link to={`/tag?t=${tags[1]}`}>
            <Chip label={tags[1]} /> 
          </Link> : null}
          {tags[2] ? <Link to={`/tag?t=${tags[2]}`}>
            <Chip label={tags[2]} /> 
          </Link> : null}          
          </div>}  
            <CardActions>
            {renderButtons()} 
            </CardActions>  
       </Card>
       
       
  
       
  
  
    )
  }
  