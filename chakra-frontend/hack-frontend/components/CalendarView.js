import {
  subMonths,
  subDays,
  addDays,
  endOfMonth,
  startOfMonth,
  startOfToday,
  startOfYear,
  getMonth,
  format,
  getDaysInMonth,
} from "date-fns";
import { Flex, Box, Grid, GridItem, Link, Button, Heading } from "@chakra-ui/react";

import { useWindowSize } from "./hooks";
import { useAppContext } from "./ContextProvider";
import { useQuery } from "@apollo/client";
import { QUERY_DIARIES } from "./backend";

import { CREATE_DIARY, UPDATE_DIARY } from "./backend";

import { useMutation, gql } from "@apollo/client";

import yyyymmdd from "./yyyymmdd";

const hasContentColor="#86BEF2";
const todayColor = "#FEECBB";
const inMonthColor = "#EEEEEE";
const notInMonthColor = "#AAAAAA";

const DayCard = ({
  dayOfMonth,
  inCurrentMonth,
  sideLength,
  marginAmount,
  couldBeCurrentDay,
  hasContent,
  formattedDateString,
}) => {
  const userId = useAppContext();
  const [ createDiary, createDiaryResult ] = useMutation(CREATE_DIARY);

  const sideLengthString = `${sideLength}px`;
  const marginString = `${marginAmount}px`;

  const actuallyToday = startOfToday();
  const todaysDayOfMonth = parseInt(format(actuallyToday, "d"));

  const isToday =
    couldBeCurrentDay && inCurrentMonth && dayOfMonth == todaysDayOfMonth - 1;

  const bgColor = hasContent
    ? hasContentColor
    : isToday
    ? todayColor
    : inCurrentMonth
    ? inMonthColor
    : notInMonthColor;

    if (createDiaryResult.loading) return "Loading";

    const handleLinkClick = () => {

      console.log("Clicked link");

      if (!hasContent)
        createDiary({ variables: { input: formattedDateString, usedId: userId }})
    };

  return (
    <Link href={`/calendar/${formattedDateString}`} onClick={handleLinkClick}>
      <Flex
        w={sideLengthString}
        h={sideLengthString}
        m={marginString}
        bgColor={bgColor}
        borderRadius="1rem"
        textAlign="center"
        alignItems="center"
      >
        <Heading m="auto">{dayOfMonth + 1}</Heading>
      </Flex>
    </Link>
  );
};

/**
 * Return the date range [startDate = beginning of month - 7, endDate = end of month + 7].
 * Basically the first and last days of the month with 7 days of tolerance on either end.
 * @param {*} date The date to get the date interval from
 * @returns The date interval [startDate = beginning of month - 7, endDate = end of month + 7]
 */
const startAndEndDate = (date) => {
  const startDate = yyyymmdd(subDays(startOfMonth(date), 7));
  const endDate = yyyymmdd(addDays(endOfMonth(date), 7));
  return [startDate, endDate];
};

const CalendarView = ({
  todaysDate,
  goBackMonthCallback,
  goForwardMonthCallback,
}) => {
  const couldBeCurrentDay = todaysDate.toString() === startOfToday().toString();

  const kNumRows = 6;
  const kNumColumns = 7;

  const windowDimensions = useWindowSize();
  const cellSideLength = Math.min(100, windowDimensions.width / 10);
  const marginAmount = cellSideLength / 8;
  const totalHeight = kNumRows * cellSideLength + marginAmount * (kNumRows - 1);
  const buttonMarginTop = totalHeight / 2;
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

  const { userId } = useAppContext();

  const [startDate, endDate] = startAndEndDate(todaysDate);
  console.log("START DATE END DATE -> ", startDate, endDate);
  console.log("Calender: User Id => ", userId);

  const { loading, error, data } = useQuery(QUERY_DIARIES, {
    variables: { id: userId, startDate: startDate, endDate: endDate },
  });

  if (loading) return "Loading in CV"

  const dates = (() => {
    if (data === undefined) return [];

    let dates = [];
    for (let node of data.diaries.edges) {
      console.log("Node: ", node.node);
      dates.push({ date: node.node.date, id: node.node.id });
    }

    return dates;
  })();

  console.log(dates);

  return (
    <>
      <Flex flexDirection="row">
        <Button onClick={goBackMonthCallback} mt={buttonMarginTopString}>
          {"<"}
        </Button>
        <Grid templateColumns="repeat(7, 1fr)">
          {indicesOfCalendarGrid.map((dayIndex) => {
            const adjustedDayIndex =
              (dayIndex - dayOffset + daysInMonthCount) % daysInMonthCount;
            const inCurrentMonth =
              dayIndex >= dayOffset && dayIndex < daysInMonthCount + dayOffset;

            const indexAsDate = subDays(
              addDays(startOfMonth(todaysDate), dayIndex),
              dayOffset
            );
            
            const inFormat = yyyymmdd(indexAsDate);
            console.log("In format! ", indexAsDate, inFormat);

            const hasContent = dates.filter(obj => obj.date == inFormat).length !== 0;
            // console.log(
            //   "Day index ",
            //   dayIndex,
            //   " maps to '",
            //   inFormat,
            //   "' relative to ",
            //   yyyymmdd(todaysDate)
            // );

            return (
              <DayCard
                key={dayIndex}
                dayOfMonth={adjustedDayIndex}
                inCurrentMonth={inCurrentMonth}
                sideLength={cellSideLength}
                marginAmount={marginAmount}
                couldBeCurrentDay={couldBeCurrentDay}
                hasContent={hasContent}
                formattedDateString={inFormat}
              />
            );
          })}
        </Grid>
        <Button onClick={goForwardMonthCallback} mt={buttonMarginTopString}>
          {">"}
        </Button>
      </Flex>
    </>
  );
};

export default CalendarView;
