import '@/styles/formatStyle.scss'
import type { AppProps } from 'next/app'
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'

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
