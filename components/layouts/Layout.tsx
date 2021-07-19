import * as React from "react"
import Head from "next/head";
import {Box, useColorMode} from "@chakra-ui/react";
import styles from "/styles/layouts/Layout.module.css"
import theme from "../../theme"
import colors from "../../theme/colors";

export interface LayoutProps {
    title: string,
    description?: string,
}

const DefaultDescription: string = "A developer blog with tutorials and experiences from the industry"

/**
 * A simple layout that stretches the full screen and applies branded colors
 */
const Layout: React.FunctionComponent<LayoutProps> =
    (props) => {
        const {colorMode} = useColorMode()
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <title>{props.title}</title>
                    <meta name="description" content={props.description ?? DefaultDescription}/>
                </Head>
                <Box
                    backgroundColor={colorMode === "light" ? theme.colors.brand.light.bg : theme.colors.brand.dark.bg}
                    color={colorMode === "light" ? theme.colors.brand.light.fg : theme.colors.brand.dark.fg}
                >
                    <div className={styles.container}>
                        {props.children}
                    </div>
                </Box>
            </>
        )
    }

export default Layout