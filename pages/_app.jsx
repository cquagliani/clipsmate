import { AuthContextProvider } from '@component/context/authContext'
import '@component/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>
  );
}