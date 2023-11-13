import { ChakraProvider } from '@chakra-ui/react'

function BF1F({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default BF1F;