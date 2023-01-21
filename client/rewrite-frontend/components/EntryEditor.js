// import { useEditor, EditorContent } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import '../styles/EntryEditor.module.scss';

// import dynamic from 'next/dynamic';
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import 'react-quill/dist/quill.snow.css';

// function App() {
//     const [value, setValue] = useState('')
//     return(
//        <ReactQuill value={value} onChange={setValue}/>
//     )
// }

// export default App;

/**
 * Create a markdown editor in the page. Edit mode/view modes available.
 */
const EntryEditor = ({content}) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'test',
      }
    },
    extensions: [
      StarterKit,
    ],
    content: content,
  })
  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
}

export default EntryEditor;