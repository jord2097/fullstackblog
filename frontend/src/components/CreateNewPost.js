import React, {useState, useEffect} from "react";
import { Paper } from '@material-ui/core'
import RichTextEditor from "./richTextEditor";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html"
import htmlToDraft from "html-to-draftjs"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './richTextEditor.css'
import {stateFromHTML} from 'draft-js-import-html'

const CreateNewPost = (props) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  useEffect(() => {
    if (props.current) {
      let contentState = stateFromHTML(props.current.mainText)
      setEditorState(EditorState.createWithContent(contentState))
    }
  }, [props.current])

  const submitHandler = (e) => {
    e.preventDefault();
    const stringFromHtml = draftToHtml(convertToRaw(editorState.getCurrentContent())) 
     
    let result;
    if (props.current) {
      result = props.client.updatePost(
        props.current._id,
        e.target.title.value,
        stringFromHtml,
        e.target.img.value,
        e.target.category.value,
        e.target.tags.value,
        e.target.draft.checked,
        e.target.published.checked
      )
    } else {
      result = props.client.createPost(
        e.target.title.value,
        stringFromHtml,
        e.target.img.value,
        e.target.category.value,
        e.target.tags.value,
        e.target.draft.checked,
        e.target.published.checked
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
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={(state) => setEditorState(state)}
            />
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
            <br />
            <input
            type="checkbox"
            name="published"
            
            defaultValue={props.current?.published}
            ></input> 
            <label htmlFor="published">Publish post?</label>
            <section className="button-wrapper">
              <button className="button">Create</button>
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
