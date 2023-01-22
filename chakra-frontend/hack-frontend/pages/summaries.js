import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import { MAIN_BLUE } from "@/components/colors";
import { useState } from "react";

const SummaryBox = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    if (!visible) {
      setVisible(true);
    }
  };
  return (
    <>
      <Heading as="h3" fontWeight="normal">
        {title}
      </Heading>
      <Flex
        overflow="hidden"
        borderRadius="1rem"
        mb="2rem"
        w="100%"
        h="20%"
        border="1px solid black"
      >
        {visible ? (
          <Button
            visiblility={visible ? "hidden" : "visible"}
            m="auto"
            bgColor={MAIN_BLUE}
          >
            Generate
          </Button>
        ) : (
          <Box>On Monday, January 17th, 2023, I went on my first day. We met at a cute little coffee shop, walked in the park, and went to a nearby restaurant. I had butterflies in my stomach\n\nOn Monday, January 24th, 2023, my parents announced to my sister and me that they are getting a divorce. Both apologized and said they still loved us and that this was the best decision for everyone involved. I was scared about what the future held.\n\nOn Wednesday, January 26th, 2023, my boyfriend of two years dumped me. I couldn't stop crying and I felt like I was in a bad dream. I spent the rest of the day in bed. I felt hurt, angry, and confused.\n\nOn Monday, January 31st, 2023, I met someone new, her name is Sarah. We paired up for a group project and talked about our favorite books and movies. We exchanged phone numbers and made plans to hang out over the weekend. I was so glad I met her.</Box>
        )}
      </Flex>
    </>
  );
};
const Summaries = (props) => {
  return (
    <Flex w="100vw" h="100vh">
      <Flex mt="1rem" flexDirection="column" mx="20%" w="100%">
        <SummaryBox title="Your week"></SummaryBox>
        <SummaryBox title="Your month"></SummaryBox>
      </Flex>
    </Flex>
  );
};

export default Summaries;
