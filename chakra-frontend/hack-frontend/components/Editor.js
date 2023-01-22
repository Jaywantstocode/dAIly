import { Textarea, Heading, Box } from "@chakra-ui/react";
import { useState } from "react";
import { format } from "date-fns";
const placeholder = "Dear Diary, ...";
const Editor = ({ date, textContent }) => {
  const dateString = format(date, "PPP");
  const [value, setValue] = useState(textContent);

  const handleOnChange = (event) => {
    let inputValue = event.target.value;
    setValue(inputValue);
  };

  return (
    <Box p="2rem">
      <Heading mb="2%">{dateString}</Heading>
      <Textarea
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        resize="none"
        size="lg"
        h="80vh"
      />
    </Box>
  );
};

export default Editor;
