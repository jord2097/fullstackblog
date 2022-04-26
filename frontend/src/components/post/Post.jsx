import './post.css';


export default function Post() {
  return (
      <>
    <div className='post'>
        <img
        className='postImg'
        src='https://iso.500px.com/wp-content/uploads/2014/08/500-px-banner-1500x1000.jpg'
        alt=''
        />

        <div className="postInfo"></div>
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>   
            </div>
            <span className="postTitle"> Great journey </span>
            <hr/>
            {/* hr adds line */}
            <span className="postDate"> 1 day ago</span>
     </div>
     <div>
         <p className='postDesc'>
         What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

         </p>
     </div>
     

     </>


  )
}
