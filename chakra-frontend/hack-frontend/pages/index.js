import { Inter, Frank_Ruhl_Libre } from '@next/font/google'
import Editor from '@/components/Editor';
import { format, startOfToday } from 'date-fns';

const inter = Inter({ subsets: ['latin'] })

// const frankLight = Frank_Ruhl_Libre({
//   weight
// })




export default function Home() {
  const todaysDate = startOfToday();

  const textContent = "askjasuhdkausdgjasgdjgj";
  return (<>
    <Editor
      date={todaysDate}
      textContent={textContent} />
  </>);
}
