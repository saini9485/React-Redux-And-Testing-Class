// import React, { useState, useEffect } from "react";
// import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";

// export const Score = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());

//   useEffect(() => {
//     const savedContent = localStorage.getItem("content");
//     if (savedContent) {
//       setEditorState(
//         EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
//       );
//     }
//   }, []);

//   const handleEditorChange = (newState) => {
//     setEditorState(newState);
//   };

//   const handleBeforeInput = (chars, editorState) => {
//     if (chars === "#") {
//       setEditorState(
//         RichUtils.toggleBlockType(editorState, "header-one")
//       );
//       return "handled";
//     }
//     if (chars === "*") {
//       setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
//       return "handled";
//     }
//     if (chars === "**") {
//       setEditorState(
//         RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH")
//       );
//       return "handled";
//     }
//     if (chars === "***") {
//       setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
//       return "handled";
//     }
//     return "not-handled";
//   };

//   const handleSave = () => {
//     const contentState = editorState.getCurrentContent();
//     const serializedContent = JSON.stringify(convertToRaw(contentState));
//     localStorage.setItem("content", serializedContent);
//   };

//   return (
//     <div>
//       <h1>Title</h1>
//       <button onClick={handleSave}>Save</button>
//       <Editor
//         editorState={editorState}
//         onChange={handleEditorChange}
//         handleBeforeInput={handleBeforeInput}
//       />
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

export const Score = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [savedContent, setSavedContent] = useState(null);

  useEffect(() => {
    const contentFromStorage = localStorage.getItem('editorContent');
    if (contentFromStorage) {
      setSavedContent(JSON.parse(contentFromStorage));
    }
  }, []);

  useEffect(() => {
    if (savedContent) {
      setEditorState(EditorState.createWithContent(convertFromRaw(savedContent)));
    }
  }, [savedContent]);

  const onChange = (editorState) => {
    setEditorState(editorState);
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    localStorage.setItem('editorContent', content);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const handleHeading = () => {
    const newState = RichUtils.toggleBlockType(editorState, 'header-one');
    onChange(newState);
  };

  const handleBold = () => {
    const newState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
    onChange(newState);
  };

  const handleRedLine = () => {
    const newState = RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH');
    onChange(newState);
  };

  const handleUnderline = () => {
    const newState = RichUtils.toggleInlineStyle(editorState, 'UNDERLINE');
    onChange(newState);
  };

  return (
    <div>
      <h1>Title</h1>
      <button onClick={handleHeading}>H1</button>
      <button onClick={handleBold}>Bold</button>
      <button onClick={handleRedLine}>Red Line</button>
      <button onClick={handleUnderline}>Underline</button>
      <br />
      <Editor
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
};




