import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './richTextEditor.css'

export default class RichTextEditor extends Component {

    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

        return (
            <div className="textEditor">
                <div>
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                        placeholder="Content"
                    />
                </div>



                {/* <div className="editorButton">

                <button className='submit'onSubmit={draftToHtml(convertToRaw(editorState.getCurrentContent()))}>Submit</button>

                </div> */}

            </div>
        )
    }
}