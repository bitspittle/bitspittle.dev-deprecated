import {Box, StackProps, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {ThemedLink as Link} from "../elements/ThemedLink";
import {ThemedDivider} from "../elements/ThemedDivider";

export const Footer: React.FunctionComponent<StackProps> = ({...props}) => {
    return (
        <>
            <VStack
                as="footer"
                textAlign="center"
                {...props}
            >
                <Box height="1em" />
                <ThemedDivider />
                <Text padding="0em 0em 0.5em 0em">
                    This site is <Link href="https://github.com/bitspittle/bitspittle.dev">Open Source</Link>.
                    It is built using{" "}
                    <Link href="https://nextjs.org/">Next.js</Link>,{" "}
                    <Link href="https://chakra-ui.com/">Chakra UI</Link>, and{" "}
                    <Link href="https://mdxjs.com/">MDX</Link>.
                </Text>
            </VStack>
        </>

    )
}
