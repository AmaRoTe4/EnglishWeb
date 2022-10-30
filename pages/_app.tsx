/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header/Header'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <Provider store={store}>
        <Component {...pageProps} />
        <Header Title="Ingles Web" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></Script>
    </Provider>
  )
}

export default MyApp
