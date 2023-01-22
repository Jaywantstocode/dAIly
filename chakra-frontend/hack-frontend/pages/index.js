import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Editor from '@/components/Editor';

export default function Home() {
  const textContent = "askjasuhdkausdgjasgdjgj";
  return (<>
    <Editor textContent={textContent} />
  </>);
}

