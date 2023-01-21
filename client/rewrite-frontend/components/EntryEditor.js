import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import 'react-quill/dist/quill.snow.css';

/**
 * Create a markdown editor in the page. Edit mode/view modes available.
 */
const EntryEditor = ({content}) => {
  const [value, setValue] = useState(content)

  return (
    <>
       <ReactQuill value={value} onChange={setValue}/>
    </>
  );
}

export default EntryEditor;