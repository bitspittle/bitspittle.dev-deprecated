import * as React from "react"
import Head from "next/head";
import {Box, Flex, useColorMode} from "@chakra-ui/react";
import theme from "../../theme"
import {NavHeader} from "../sections/NavHeader";
import {Footer} from "../sections/Footer";

import styles from "/styles/layouts/Layout.module.css"

export interface LayoutProps {
    /** The title of this page */
    title: string,
    /** An optional description of this page. If not present, a generic description will be used. */
    description?: string,
    /** An optional setting which, if set to false (the default), means a nav header and footer will be shown. */
    fullscreen?: boolean,
}

const DefaultDescription: string = "A developer blog with tutorials and experiences from the industry"

/**
 * The main layout, which stretches the full screen, sets up shared configuration, and applies branded colors.
 */
const Layout: React.FunctionComponent<LayoutProps> =
    ({
         title,
         description = DefaultDescription,
         fullscreen = false,
         children,
     }) => {
        const {colorMode} = useColorMode()
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <title>{title}</title>
                    {description && <meta name="description" content={description}/>}
                </Head>
                <Box
                    backgroundColor={colorMode === "light" ? theme.colors.brand.light.bg : theme.colors.brand.dark.bg}
                    color={colorMode === "light" ? theme.colors.brand.light.fg : theme.colors.brand.dark.fg}
                >
                    <Flex
                        as="div"
                        direction="column"
                        minHeight="100vh"
                    >
                        {!fullscreen && <NavHeader />}
                        <Box as="main" flexGrow={1} className={styles.main}>
                            {children}
                        </Box>
                        {!fullscreen && <Footer />}
                    </Flex>

                </Box>
            </>
        )
    }

export default Layout