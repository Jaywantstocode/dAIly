
import { Box } from "@chakra-ui/react";
import { useAppContext } from "@/components/ContextProvider";
import Editor from "@/components/Editor";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { format } from "date-fns"
import { QUERY_DIARIES } from "@/components/backend";
import { Spinner } from "@chakra-ui/react";
import yyyymmdd from "@/components/yyyymmdd";

const DatePage = (props) => {
  const router = useRouter();
  const path = router.asPath;
  const tokens = path.split('/');
  const formattedDate = tokens.pop();
  const [year, month, day] = formattedDate.split('-')
  const date = new Date(year, month, day);

  // const [startDate, endDate] = [formatted, formatted];
  const [startDate, endDate] = [formattedDate, formattedDate];

  const { userId } = useAppContext();

  // const [startDate, endDate] = startAndEndDate(todaysDate);
  console.log("START DATE END DATE -> ", startDate, endDate);
  console.log("Calender: User Id => ", userId);

  const { loading, error, data } = useQuery(QUERY_DIARIES, {
    variables: { id: userId, startDate: startDate, endDate: endDate },
  });

  if (loading) return <Spinner />

  const bodies = (() => {
    if (data === undefined) return [];

    let bodies = [];
    for (let node of data.diaries.edges) {
      console.log("Node: ", node.node);
      bodies.push(node.node.body);
    }

    return bodies;
  })();


  // console.log("Dates:",dates);

  console.log("Submitting page with ", date, " and ", bodies[0]);

  return (
    <>
      <Editor
        date={date}
        textContent={bodies[0]} />
    </>);
};

export default DatePage;