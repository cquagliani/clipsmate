import SignIn from './signIn'
import { Inter } from 'next/font/google'
import SignupPage from './signUp';
const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  return (
    <div>
      <SignupPage />
    </div>
  )
}