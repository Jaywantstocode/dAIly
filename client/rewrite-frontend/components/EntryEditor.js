import { useState } from 'react'
import styles from '../styles/EntryEditor.module.scss'
/**
 * Create a markdown editor in the page. Edit mode/view modes available.
 */
const EntryEditor = ({content}) => {
  const [value, setValue] = useState(content)

  return (
    <>

      <textarea className={styles.editor}>

      </textarea>
    </>
  )
}

export default EntryEditor;