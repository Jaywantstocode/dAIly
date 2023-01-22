import { format, startOfToday, addMonths } from "date-fns";
import CalendarView from "@/components/CalendarView";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";



const Calendar = (props) => {
  const [anchorDate, setAnchorDate] = useState(startOfToday());


  const handleChangeMonth = displacement => {
    console.log("Displacing ", displacement)
    setAnchorDate(addMonths(anchorDate, displacement))
  }
  const thisMonth = format(anchorDate, "MMMM");
  // const thisMonth = `${format(anchorDate, "MMMM")} ${format(anchorDate, "YYYY")}`;
  return (
    <>
      <Flex w="100vw" h="100vh" alignItems="top" textAlign="center" flexDirection="row">
        <Box mr="auto" ml="auto" mt="4%">
          <Heading mb="4%">{thisMonth}</Heading>
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
