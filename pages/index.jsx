import SignIn from './signIn'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  return (
    <div>
      <SignIn />
    </div>
  )
}