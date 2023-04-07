import '@/styles/basic.scss'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { NextPageContext } from 'next'

const App = ({ Component, pageProps }: AppProps) => {
  if ((Component as any).getLayout) {
    return (Component as any).getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
