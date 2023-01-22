import {
  startOfMonth,
  startOfToday,
  startOfYear,
  getMonth,
  format,
  getDaysInMonth,
} from "date-fns";
import { Flex, Box, Grid, GridItem, Link, Button } from "@chakra-ui/react";

import { useWindowSize } from "./hooks";

const todayColor = "#FEECBB";
const inMonthColor = "#EEEEEE";
const notInMonthColor = "#AAAAAA"


const DayCard = ({ dayOfMonth, inCurrentMonth, sideLength, marginAmount, couldBeCurrentDay }) => {
  const sideLengthString = `${sideLength}px`;
  const marginString = `${marginAmount}px`;

  const actuallyToday = startOfToday()
  const todaysDayOfMonth = parseInt(format(actuallyToday, "d"));
  
  const isToday = couldBeCurrentDay
                && inCurrentMonth
                && dayOfMonth == todaysDayOfMonth - 1;

  const bgColor = isToday ? todayColor
         : inCurrentMonth ? inMonthColor
                          : notInMonthColor

            

  return (
    <Flex
      w={sideLengthString}
      h={sideLengthString}
      m={marginString}
      bgColor={bgColor}
      borderRadius="1rem"
      textAlign="center"
      alignItems="center">
        <Box m="auto">{dayOfMonth+1}</Box>
    </Flex>
  );
};


const CalendarView = ({ 
  todaysDate, 
  goBackMonthCallback, 
  goForwardMonthCallback, 
 }) => {
  const couldBeCurrentDay = todaysDate.toString() === startOfToday().toString();

  const kNumRows = 5;
  const kNumColumns = 7;

  const windowDimensions = useWindowSize();
  const cellSideLength = Math.min(100, windowDimensions.width / 10);
  const marginAmount = cellSideLength / 8;
  const totalHeight = kNumRows * cellSideLength + marginAmount * (kNumRows-1);
  const buttonMarginTop = totalHeight/2;
  const buttonMarginTopString = `${buttonMarginTop}px`;

  const dayOffset = startOfMonth(todaysDate).getDay();
  const daysInMonthCount = getDaysInMonth(todaysDate);
  const indicesOfCalendarGrid = (() => {
    const nums = [];
    for (let i = 0; i < kNumRows * kNumColumns; ++i) {
      nums.push(i);
    }
    return nums;
  })();

  return (
    <>
      <Flex flexDirection="row">
        <Button onClick={goBackMonthCallback} mt={buttonMarginTopString}>{"<"}</Button>
        <Grid templateColumns="repeat(7, 1fr)">
          {indicesOfCalendarGrid.map((dayIndex) => {
            const adjustedDayIndex =
              (dayIndex - dayOffset + daysInMonthCount) % daysInMonthCount;
            const inCurrentMonth = dayIndex >= dayOffset && dayIndex < daysInMonthCount;
            return (
              <Link>
              <DayCard
                dayOfMonth={adjustedDayIndex}
                inCurrentMonth={inCurrentMonth}
                sideLength={cellSideLength}
                marginAmount={marginAmount}
                couldBeCurrentDay={couldBeCurrentDay}
                />
              </Link>
            );
          })}
        </Grid>
        <Button onClick={goForwardMonthCallback} mt={buttonMarginTopString}>{">"}</Button>
      </Flex>
    </>
  );
};

export default CalendarView;
