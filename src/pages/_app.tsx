import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from "@next/font/google"

import { SessionProvider } from "next-auth/react";
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Head from 'next/head';
import Socials from '@components/Socials';

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
        } `}
      </style>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Socials className="hidden left-1.5 top-0 sm:flex sm:flex-col sm:absolute sm:gap-4 sm:items-center">
        <div className="w-1 h-52 bg-secondary sm:opacity-50"></div>
      </Socials>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}
