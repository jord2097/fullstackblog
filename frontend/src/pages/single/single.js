import {Chip} from '@material-ui/core'
import {formatDate} from '../../_services/date-format'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

export default function SinglePost(props) {
    const {postId} = useParams()
    const [current, cCurrent] = useState({})

    const regexHTML = /\n/g // identifies newlines
    const separatedTags = current.tags?.split(',')
      const trimmedTags = separatedTags?.map(tag => {
          return tag.trim()
      })   

    const fetchPost = async () => {           
        const postToDisplay = await props.client.getSinglePost(postId)
        cCurrent(postToDisplay.data)           
    }

    useEffect(() => {
        fetchPost()        
    }, [])

  

    
  
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
          src={current.img}
          alt=''
          />
  
          <div className="postInfo"></div>
              <div className="postCats">
                  <span className="postCat">{current.category}</span>
                    
              </div>
              <span className="postTitle"> {current.title} </span>
              <br />            
              {renderButtons()}
              
              <hr/>
              {/* hr adds line */}
  
              
              <span className="postDate"> {current.creationTime ? formatDate(current.creationTime) : "Unknown Date"} </span>            
                <Chip label={trimmedTags ? trimmedTags[0] : ""} />
                <Chip label={trimmedTags ? trimmedTags[1] : ""} />            
              <div className='' dangerouslySetInnerHTML={{__html: current.mainText}}/>
            
  
              
  
       </div>
       
       
  
       </>
  
  
    )
  }
  