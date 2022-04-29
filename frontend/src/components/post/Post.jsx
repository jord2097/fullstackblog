import './post.css';


export default function Post(props) { 

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
                <span className="postCat">{props.post.tags}</span>
                  
            </div>
            <span className="postTitle"> {props.post.title} </span>
            <br />            
            {renderButtons()}
            
            <hr/>
            {/* hr adds line */}

            
            <span className="postDate"> Date Unknown </span>
            <p className='postDesc'>
         {props.post.mainText}

            </p>

     </div>
     
     

     </>


  )
}
