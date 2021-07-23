import * as React from "react"
import Head from "next/head";
import {Box, ChakraProps, Flex, useColorMode} from "@chakra-ui/react";
import {getBrandColors} from "../../theme/colors"
import {NavHeader} from "../sections/NavHeader";
import {Footer} from "../sections/Footer";

export interface LayoutProps extends ChakraProps {
    /** The title of this page */
    title?: string,
    /** An description of this page. */
    description: string,
    /** An optional setting which, if set to false (the default), means a nav header and footer will be shown. */
    fullscreen?: boolean,
}

/**
 * The main layout, which stretches the full screen, sets up shared configuration, and applies branded colors.
 */
const Layout: React.FunctionComponent<LayoutProps> =
    ({
         title,
         description,
         fullscreen = false,
         children,
         ...props
     }) => {
        const {colorMode} = useColorMode()
        const fullTitle = title ? title + " - Bitspittle.dev" : "Bitspittle.dev"
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <title>{fullTitle}</title>
                    <meta name="description" content={description}/>
                </Head>
                <Flex
                    backgroundColor={getBrandColors(colorMode).bg}
                    color={getBrandColors(colorMode).fg}
                    transitionProperty="background-color, color"
                    transitionDuration="normal"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Flex
                        as="div"
                        direction="column"
                        minHeight="100vh"
                        minWidth="sm"
                        width={{base: "sm", md: "3xl"}}
                        alignItems="stretch"
                    >
                        {!fullscreen && <NavHeader />}
                        <Box
                            as="main"
                            flexGrow={1}
                            padding="1rem 0"
                            {...props}
                        >
                            {children}
                        </Box>
                        {!fullscreen && <Footer />}
                    </Flex>

                </Flex>
            </>
        )
    }

export default Layout