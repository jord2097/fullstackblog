import React from "react";
import { Paper } from '@material-ui/core'
import RichTextEditor from "./RichTextEditor";

const CreateNewPost = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    let result;
    if (props.current) {
      result = props.client.updatePost(
        props.current._id,
        e.target.title.value,
        e.target.mainText.value,
        e.target.img.value,
        e.target.category.value,
        e.target.tags.value,
        e.target.draft.checked
      )
    } else {
      result = props.client.createPost(
        e.target.title.value,
        e.target.mainText.value,
        e.target.img.value,
        e.target.category.value,
        e.target.tags.value,
        e.target.draft.checked
      )
    }
    result
    .then(() =>{
      document.getElementById("postForm").reset()
      props.refreshList()
    })    
  };

switch (props.currentUser.user.role) {
  case "author": // add post form shows to permitted users
  case "admin":
    return (
      
      <section className="create-post">
          <form id="postForm" onSubmit={submitHandler}>
            <h1>{props.current ? `Editing "${props.current.title}"` : 'Create New Post'}</h1>
            <input
              type="text"
              // onChange={props.savePostTitleToState}
              name="title"
              placeholder="Title"
              size="39"
              required
              // ref={props.getTitle}
              defaultValue={props.current?.title}
              
            ></input>
            <br />
            <br />
            <div>
            <RichTextEditor/>
            </div>

            <br />
            <br />
            
            {/* </div>
            <textarea // rich text editor here
              // onChange={props.savePostContentToState}
              
              name="mainText"
              placeholder="Content"
              rows="8"
              cols="41"
              required
              defaultValue={props.current?.mainText}
              
              // ref={props.getContent}
              
            > </textarea > */}
            
            
            <br />
            <br />
            <input type="text" name="img" placeholder="Image URL" defaultValue={props.current?.img}
              ></input>
            <br />
            <input type="text" name="category" placeholder="Category" defaultValue={props.current?.category}
              ></input>
            <br />
            <input
              type="text"
              name="tags"
              placeholder="Tags (comma separated)"
              defaultValue={props.current?.tags}
              
              
            ></input>
            <br />
            <input
            type="checkbox"
            name="draft"      
            defaultValue={props.current?.draft}

            ></input>
            <label htmlFor="draft">Mark as draft?</label>
            <section className="button-wrapper">
              <button className="button">Publish</button>
            </section>
          </form>
        </section>
      
    );
  default: return (
    <div className="sidebarItem">
            <span className='sidebarTitle'>about me</span>
            <Paper>
              <img 
            src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg'
            alt='haha'
            style={{width:"100%",height:"fit-content"}}
              />
            </Paper>            
            <p>

            
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
            </p>
    </div>
    /* img{
    width: 100%;
    height: fit-content;
    margin-left: 3%;
    margin-right: 2%;
    
} */
  )
      


}

  
};
export default CreateNewPost;
