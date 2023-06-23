import '@/styles/formatStyle.scss'
import type { AppProps } from 'next/app'
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
        <Component {...pageProps} />
      </NextUIProvider>
    )
  )
}

export default App
