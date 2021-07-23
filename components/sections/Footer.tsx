import {Text, StackProps, useColorMode, VStack, Box} from "@chakra-ui/react";
import React from "react";
import {getBrandColors} from "../../theme/colors";
import {ThemedLink as Link} from "../elements/ThemedLink";
import {ThemedDivider} from "../elements/ThemedDivider";

export const Footer: React.FunctionComponent<StackProps> = ({...props}) => {
    const {colorMode} = useColorMode()

    return (
        <>
            <VStack
                as="footer"
                {...props}
            >
                <Box height="1em" />
                <ThemedDivider />
                <Text>
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
