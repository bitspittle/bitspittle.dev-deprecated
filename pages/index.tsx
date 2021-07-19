import Layout from "../components/layouts/Layout";

import styles from '../styles/layouts/Layout.module.css'

export default function Home() {
    return (
        <Layout title={"Bitspittle.dev"}>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
        </Layout>
    )
}
