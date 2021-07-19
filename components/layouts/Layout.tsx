import * as React from "react"
import Head from "next/head";
import styles from "/styles/layouts/Layout.module.css"

export interface LayoutProps {
    title: string,
    description?: string,
}

const DefaultDescription: string = "A developer blog with tutorials and experiences from the industry"

/**
 * A simple layout that stretches the full screen
 */
const Layout: React.FunctionComponent<LayoutProps> =
    (props) => (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{ props.title }</title>
                <meta name="description" content={props.description ?? DefaultDescription } />
            </Head>
            <div className={styles.container}>
                { props.children }
            </div>
        </>
    )

export default Layout