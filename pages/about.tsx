import Layout from "../components/layouts/Layout";
import {H3} from "../components/elements/Headings";
import {HStack, Text} from "@chakra-ui/react"
import {Br} from "../components/elements/Br";
import {ThemedLink as Link} from "../components/elements/ThemedLink";

export default function About() {
    return (
        <Layout
            title="About"
            description="Information about this site and its author"
        >
            <H3>About Bit Spittle</H3>

            Welcome to my corner of the internet. Make yourself comfortable -- we don't take ourselves too seriously
            around here.

            <Br/>
            This place aims to be a collection of articles and tutorials that are fun to read, easy to understand,
            interactive (when possible), concise, and useful.

            <H3>About Me</H3>

            My name is <Link href="https://www.linkedin.com/in/hermandave/">David Herman</Link>.

            <Br/>
            I’m a programmer with 20 years of experience, the first 10 in the game industry and the next 10 at Google.

            <Br/>
            In the game industry, I worked on <Link href="https://en.wikipedia.org/wiki/EverQuest">EverQuest</Link>{" "}
            and <Link href="https://en.wikipedia.org/wiki/MLB:_The_Show">MLB: The Show</Link>. In Google, I first worked
            at YouTube, helping bring the YouTube watching experience into the living room space. Later, I switched to
            work on{" "}<Link href="https://developer.android.com/studio">Android Studio</Link>, the official IDE for
            Android development.

            Blah blah blah. Those interested in more detail can check out{" "}<Link href="/resume.pdf">my resume</Link>.

            <Br/>
            Over my career, I've done a bunch of tools and UI work, and I enjoy interacting with our users (even on
            bugs!). My UI work may make me sound like a frontend developer, but I like to get my hands dirty across the
            full stack when possible.

            <Br/>
            More recently, as a tech lead, I have a track record of delivering software features on time. Besides
            programming itself, I enjoy navigating the dynamics of teams: enabling collaboration and autonomy in others,
            generating psychological safety, and providing mentorship.

            <Br/>
            <HStack spacing={1}>
                {/* TODO: Why do I have to use hstack here to avoid newlines */}
                <Text>Are you interested in any of these topics? Feel free to</Text>
                <Link href="mailto:bitspittle@gmail.com?subject=Hello from a Bitspittle.dev reader">
                    contact me
                </Link>
                <Text>if you want to talk about any of it!</Text>
            </HStack>

        </Layout>
    )
}
