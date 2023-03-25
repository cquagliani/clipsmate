import { AuthContextProvider } from '@component/context/authContext'
import '@component/styles/globals.css'
import HeaderComponent from '@component/components/header';

export default function App({ Component, pageProps }) {
  return (
  <AuthContextProvider>
    <HeaderComponent />
      <Component {...pageProps} />
  </AuthContextProvider>
  );
}