import { Grid, Chip, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/'
import {formatDate} from '../../_services/date-format'
import {useEffect, useState, useMemo} from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import useStyles from './styles'
import NotesIcon from '@mui/icons-material/Notes';
import DeleteIcon from '@mui/icons-material/Delete';
import DOMpurify from 'dompurify'
import { FormControlUnstyledContext } from '@mui/base'




export default function SinglePost(props) {
    const {postId} = useParams()
    const [current, cCurrent] = useState({})
    const [tags, cTags] = useState([])  
    const classes = useStyles()
    let location = useLocation()
    const regexHTML = /\n/g // identifies newlines
   
    const createMarkup = (HTML) => {
      return {        
        __html: DOMpurify.sanitize(HTML).replace(regexHTML, "<br />")
      }
    }
    
    

    useEffect(() => {
        /* props.client.getSinglePost(postId)
        .then(result => {
          console.log(result.data)
          cCurrent(result.data)          
        })
 */
        const fetchData = async () => {
          const result = await props.client.getSinglePost(postId)          
          cCurrent(result.data)         
        }
        fetchData()
        .catch(console.error)       
    }, [])

    useEffect(() => {
      const renderTags = () => {
        const separatedTags = current.tags?.split(',')
        const trimmedTags = separatedTags?.map(tag => {
          return tag.trim()
        })      
        cTags(trimmedTags)       
      }
      renderTags()
    }, [current]) 
    
  
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
  
  
  
    return (
      
      <Card className={classes.card}>
          <CardMedia
          className={classes.media}
          image={current.img}
          alt=''
          />
  
          <div className="postInfo"></div>
          <div className="postCats">
            <Link to={`/category?c=${current.category}`}>
              <span className="postCat">{current.category}</span>
            </Link>               
            </div>
            <Link to={`/posts/${current._id}`}>
            <span className="postTitle"> {current.title} </span>
            </Link>
          <br />                      
          <hr/>             
          <span className="postDate"> By {current.creatorID} at {current.creationTime ? formatDate(current.creationTime) : "Unknown Date"} </span>            
          <div className={classes.mainText} dangerouslySetInnerHTML={createMarkup(current.mainText)}/>                
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
  
