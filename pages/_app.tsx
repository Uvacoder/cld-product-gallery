import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Component {...pageProps} />
    {/* <Script
      src="https://product-gallery.cloudinary.com/all.js"
      strategy="beforeInteractive"
    /> */}
  </>
  );
}

export default MyApp
