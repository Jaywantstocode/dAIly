import { Textarea } from '@chakra-ui/react';
import { useState } from 'react';

const placeholder = "Dear Diary, ..."

const Editor = ({ textContent }) => {
  const [value, setValue] = useState(textContent);

  const handleOnChange = (event) => {
    let inputValue = event.target.value;
    setValue(inputValue);
  }

  return (
    <>
      <Textarea
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        size='lg'
      />
    </>
  )
}

export default Editor;