import Layout from "../components/layouts/Layout";
import {Heading} from "@chakra-ui/react";
import {ThemedCode as Code} from "../components/widgets/ThemedCode";
import {ThemedLink as Link} from "../components/widgets/ThemedLink";

export default function Home() {
    return (
        <Layout
            description="A developer blog with tutorials and experiences from the industry"
        >
            <Heading>
                Welcome to <Link href="https://nextjs.org">Next.js!</Link>
            </Heading>
            <br />
            <Code>This is a mono test</Code>
        </Layout>
    )
}
