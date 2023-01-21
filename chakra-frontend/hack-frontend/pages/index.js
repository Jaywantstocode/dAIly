import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Simple from '@/components/Nav';

export default function Home() {
  return (<>
    <Simple />
  </>);
}
