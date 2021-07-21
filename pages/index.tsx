import Layout from "../components/layouts/Layout";

export default function Home() {
    return (
        <Layout
            title="Bitspittle.dev"
            description="A developer blog with tutorials and experiences from the industry"
            padding="1rem 0"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <h1 >
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <code>This is a mono test</code>
        </Layout>
    )
}
