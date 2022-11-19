import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from "@next/font/google"

import { SessionProvider } from "next-auth/react";

const nunito = Nunito({
  subsets: ["latin"]
});

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily}
        }
      `}</style>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
