import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


function MyApp({ Component, pageProps }: AppProps) {


  // TODO: bottom nav bar dahil edecek 
  
  return (
    <ChakraProvider>
      <Component {...pageProps} />

    </ChakraProvider>
  )
}

export default MyApp;
