import React from "react";

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
        e.target.tags.value
      )
    } else {
      result = props.client.createPost(
        e.target.title.value,
        e.target.mainText.value,
        e.target.img.value,
        e.target.category.value,
        e.target.tags.value
      )
    }
    result
    .then(() =>{
      document.getElementById("postForm").reset()
      props.refreshList()
    })    
  };

  return (
    <>
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
          <textarea
            // onChange={props.savePostContentToState}
            name="mainText"
            placeholder="Content"
            rows="8"
            cols="41"
            required
            defaultValue={props.current?.mainText}
            
            // ref={props.getContent}
            
          ></textarea>
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
          <section className="button-wrapper">
            <button className="button">Publish</button>
          </section>
        </form>
      </section>
    </>
  );
};
export default CreateNewPost;
