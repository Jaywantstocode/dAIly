import { Textarea, Heading, Box, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useAppContext } from "./ContextProvider";

const placeholder = "Dear Diary, ...";

/// Assumed that clicking calendar date will create `diaryId`
//// that we can cache and continue to use
const UPDATE_DIARY = gql`
  mutation updateDiary($diaryId: ID, $input: String!) {
    updateDiary (diaryId: $diaryId, input: { detail: $input }) {
      diary {
        id
        date
        keyEvents
        body
      }
    }
  }
`;


// const UpdateDiaryButton = ({diaryId, input}) => {
  
//   });

//   if ()

// };

const A_QUERY = gql`
mutation {
  createUser(input: { name: "jack", email: "jacky@gmail.com" }) {
    user {
      id
      email
      name
    }
  }
}
`;

const Editor = ({ date, textContent }) => {
  const userId = useAppContext();

  const [value, setValue] = useState(textContent);
  const [editable, setEditable] = useState(false);
  const [updateDiary, { data, loading, error }] = useMutation(UPDATE_DIARY);

  // const [makeUser, { loading, error, data }] = useMutation(A_QUERY);

  if (loading) return 'Submitting...';
  if (error) return `${JSON.stringify(error, null, 2)}`;

  const dateString = format(date, "PPP");


  const handleClick = () => {
    if (editable) {
      // save, so make mutate request
      console.log(`Attempting to update diary with '${value}'`);

      updateDiary({
        variables: {
          diaryId: "RGlhcnk6NjNjY2IzZWU2M2NkYjZlNzM3OTY1YjAx",
          input: value,
        }})

      console.log
      console.log("Error -> ", error);
    }

    setEditable(!editable);
  };

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
        h="60vh"
      />
      <Button onClick={handleClick}>{editable ? "Save" : "Edit"}</Button>
    </Box>
  );
};

export default Editor;
