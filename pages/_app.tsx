import type {AppProps} from 'next/app'

// See https://mdxjs.com/getting-started/next
import {MDXProvider} from '@mdx-js/react'

// See https://chakra-ui.com/
import "@fontsource/ubuntu/400.css"
import "@fontsource/ubuntu-mono/400.css"
import theme from '../theme'
import {ChakraProvider, Image, ListItem, OrderedList, Table, Tr, Td, Th, Tbody, Thead, UnorderedList} from "@chakra-ui/react"
import {H1, H2, H3} from "../components/elements/Headings";
import {ThemedCode} from "../components/elements/ThemedCode";
import {ThemedLink} from "../components/elements/ThemedLink";
import {P} from "../components/elements/P";

const components = {
    img: Image,
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    a: ThemedLink,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
    code: ThemedCode,
    inlineCode: ThemedCode,
    table: Table,
    thead: Thead,
    tbody: Tbody,
    tr: Tr,
    td: Td,
    th: Th,
}

function App({Component, pageProps}: AppProps) {
    return (
        <MDXProvider components={components}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </MDXProvider>
    )
}

export default App
