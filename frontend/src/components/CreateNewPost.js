import React, {useState, useEffect} from "react";
import { Paper } from '@material-ui/core'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './richTextEditor.css'
import {stateFromHTML} from 'draft-js-import-html'
import { useNavigate } from "react-router-dom";

const CreateNewPost = (props) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const navigation = useNavigate()

  useEffect(() => {
    if (props.current) {
      let contentState = stateFromHTML(props.current.mainText)
      setEditorState(EditorState.createWithContent(contentState))
    }
  }, [props.current])

  const submitHandler = (e) => {
    e.preventDefault();
    const stringFromHtml = draftToHtml(convertToRaw(editorState.getCurrentContent())) 
    console.log(e.target.published.checked)
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
      navigation('/')
    })    
  };

<<<<<<< HEAD
switch (props.currentUser.user.role) {
  case "author": // add post form shows to permitted users
  case "admin":
    return (
      
      <div className="create-post-container">
=======

    return (      
>>>>>>> origin
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
<<<<<<< HEAD
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
=======
            <br />
            <br />            
>>>>>>> origin
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
              placeholder="Tags (comma separated, up to 3)"
              defaultValue={props.current?.tags}           
              
            ></input>
            <br />
            <input
            type="checkbox"
            name="draft"      
            defaultChecked={props.current?.draft}

            ></input>
            <label htmlFor="draft">Mark as draft?</label>
            <br />
            <input
            type="checkbox"
            name="published"
            
            defaultChecked={props.current?.published}
            ></input> 
            <label htmlFor="published">Publish post?</label>
            <section className="button-wrapper">
              <button className="button">Create</button>
            </section>
          </form>
        </section>
        </div>    
    );
  


}

  

export default CreateNewPost;
