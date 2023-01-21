import styles from '../styles/EntryEditor.module'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
/**
 * Create a markdown editor in the page. Edit mode/view modes available.
 */
const EntryEditor = ({content}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: 'Hello World! 🌎️'
  })
  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
}

export default EntryEditor;