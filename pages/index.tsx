import Layout from "../components/layouts/Layout";
import {H1, H2, H3} from "../components/widgets/Headings";

export default function Home() {
    return (
        <Layout
            description="A developer blog with tutorials and experiences from the industry"
            textAlign="center"
        >
            <H1>
                Bit Spittle
            </H1>
            <br/>
            <H3>
            Developer tutorials, blog posts, and other garbage
            </H3>
        </Layout>
    )
}
