import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from "@next/font/google"

const nunito = Nunito();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily}
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
