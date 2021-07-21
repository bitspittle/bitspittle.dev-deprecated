import type {AppProps} from 'next/app'

// See https://chakra-ui.com/
import "@fontsource/ubuntu/400.css"
import "@fontsource/ubuntu-mono/400.css"
import theme from '../theme'
import {ChakraProvider} from "@chakra-ui/react"

function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App
