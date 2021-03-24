import Head from "next/head";
import { LoginProvider } from "../contexts/LoginContext";
import { SearchProvider } from "../contexts/SearchContext";

export default function App({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Head>
        <link rel='icon' type='image/x-icon' href='favicon.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
        <title>index Legendarium</title>
      </Head>

      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </LoginProvider>
  );
}
