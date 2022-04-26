import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft.js'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class RichTextEditor extends Component{

    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const {editorState} = this.state;

        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    toolbarClassName="toolbarClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}