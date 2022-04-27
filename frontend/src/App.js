import React from "react";
import RichTextEditor from "./components/richTextEditor";
import "./App.css";

function App() {
return (
  <div className="App">
    <header className="App-header">
      <h1>React Text Editor</h1>
    </header>
    <div className="editor">
      <RichTextEditor />
    </div>
  </div>
);
}
export default App;
