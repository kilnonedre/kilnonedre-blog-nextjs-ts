import '@/styles/formatStyle.scss'
import type { AppProps } from 'next/app'
import Header from '@/views/layout/header'
import Footer from '@/views/layout/footer'
import { NextUIProvider } from '@nextui-org/react'
import { useSSR } from '@nextui-org/react'

const App = ({ Component, pageProps }: AppProps) => {
  const { isBrowser } = useSSR()

  if ((Component as any).getLayout) {
    return (
      isBrowser && (
        <NextUIProvider>
          {(Component as any).getLayout(<Component {...pageProps} />)}
        </NextUIProvider>
      )
    )
  }

  return (
    isBrowser && (
      <NextUIProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    )
  )
}

export default App
