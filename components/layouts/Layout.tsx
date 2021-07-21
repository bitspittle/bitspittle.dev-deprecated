import * as React from "react"
import Head from "next/head";
import {Box, ChakraProps, Flex, useColorMode} from "@chakra-ui/react";
import theme, {getBrandColors} from "../../theme/colors"
import {NavHeader} from "../sections/NavHeader";
import {Footer} from "../sections/Footer";

export interface LayoutProps extends ChakraProps {
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
         ...props
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
                    backgroundColor={getBrandColors(colorMode).bg}
                    color={getBrandColors(colorMode).fg}
                >
                    <Flex
                        as="div"
                        direction="column"
                        minHeight="100vh"
                        minWidth="100vw"
                        width="100vw"
                        alignItems="stretch"
                    >
                        {!fullscreen && <NavHeader />}
                        <Box
                            as="main"
                            flexGrow={1}
                            {...props}
                        >
                            {children}
                        </Box>
                        {!fullscreen && <Footer />}
                    </Flex>

                </Box>
            </>
        )
    }
/*
.main {
  padding: 1rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

 */

export default Layout