import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const JoditReactEditor = ({id, name}) => {

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    uploader: {
      insertImageAsBase64URI: true
    },
    placeholder: "Start typing...",
  }

  return (
    <JoditEditor 
        id={id}
        name={name}
        ref={editor}
        value={content}
        config={config}
        onChange={newContent=>setContent(newContent.target)}
    />
  )
}

export default JoditReactEditor;