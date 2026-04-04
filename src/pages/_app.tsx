import 'styles/global.scss';
import styles from 'styles/app.module.scss';
import type { AppProps } from 'next/app';
import progress from '@misc/progress';
import { Poppins } from 'next/font/google';

import Admin  from 'layout/admin';
import Navbar from 'layout/navbar';
import Footer from 'layout/footer';
import UseAuthentication from '@context/useAuthentication';

progress();

const font = Poppins({subsets: ["latin"], weight: ["400"]})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UseAuthentication>
      <main className={font.className}>
        <Admin />
        <div className={styles.container}> <Component {...pageProps} /></div>
        <Footer/>
      </main>
    </UseAuthentication>
  )
}
