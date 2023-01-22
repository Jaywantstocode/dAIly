import { format, startOfToday, addMonths, startOfMonth, subDays, addDays, endOfMonth} from "date-fns";
import CalendarView from "@/components/CalendarView";
import { Flex, Box, Heading, useDisclosure, Fade } from "@chakra-ui/react";
import { useState } from "react";

import { useAppContext as useUserId } from "@/components/ContextProvider";
import { useQuery, gql } from "@apollo/client";

/*
query {diaries(
  id: "VXNlcjo2M2NjYTZiNzdkM2Q1NzVlNGZiMDZiMmQ="
  startDate: "2022-09-01"
  endDate: "2022-10-15"
){
 edges{
  node{
    date
    body
  }
} 
}
}
*/
/*
diaries(
startDate: Date
endDate: Date
before: String
after: String
first: Int
last: Int
Cls: String
body: String
createdTs: DateTime
date: DateTime
id: ID
keyEvents: String
updatedTs: DateTime
user: ID): DiaryConnection
 */

import { QUERY_DIARIES } from "@/components/backend";

const Calendar = (props) => {
  const [anchorDate, setAnchorDate] = useState(startOfToday());
  const { isOpen, onToggle } = useDisclosure();

  const handleChangeMonth = (displacement) => {
    setAnchorDate(addMonths(anchorDate, displacement));
  };

  const thisMonth = format(anchorDate, "MMMM");
  const thisYear = format(anchorDate, "yyyy");
  const dateHeading = `${thisMonth} ${thisYear}`;
  return (
    <>
      <Flex
        w="100vw"
        h="100vh"
        alignItems="top"
        textAlign="center"
        flexDirection="row"
      >
        <Box mr="auto" ml="auto">
          <Heading letterSpacing="0.1rem" mb="2%">{dateHeading}</Heading>


          <CalendarView
            todaysDate={anchorDate}
            goBackMonthCallback={() => handleChangeMonth(-1)}
            goForwardMonthCallback={() => handleChangeMonth(+1)}
          />



        </Box>
      </Flex>
    </>
  );
};

export default Calendar;
