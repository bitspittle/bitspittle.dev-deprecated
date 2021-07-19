import * as React from "react"
import Layout, {LayoutProps} from "./Layout";
import styles from "/styles/layouts/Layout.module.css"

interface FramedLayoutProps extends LayoutProps {}

/**
 * The main layout, with a header and footer
 */
const SiteLayout: React.FunctionComponent<FramedLayoutProps> =
    (props) => (
        <Layout title={props.title} description={props.description}>
            <main className={styles.main}>
                {props.children}
            </main>
        </Layout>
    )

export default SiteLayout