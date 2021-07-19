import type {AppProps} from 'next/app'

import '../styles/globals.css'
import theme from '../theme'

// See https://chakra-ui.com/
import {ChakraProvider} from "@chakra-ui/react"

function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App
