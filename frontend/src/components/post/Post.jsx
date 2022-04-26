import './post.css';


export default function Post(props) {
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
            {props.currentRole === "author" && <button onClick={() => props.updatePost(props.post)}>Update Post</button> }
            {props.currentRole === "admin" && (
              <>
              <button onClick={() => props.updatePost(props.post)}>Update Post</button>
              <button onClick={() => props.deletePost(props.post._id)} >Delete Post</button>
              </>
            )}
            
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
