import {Container, StackProps, useColorMode} from "@chakra-ui/react";
import React from "react";
import {getBrandColors} from "../../theme/colors";
import {Link} from "../widgets/Link";

export const Footer: React.FunctionComponent<StackProps> = ({...props}) => {
    const {colorMode} = useColorMode()

    return (
        <>
            <Container
                as="footer"
                padding="0.5em"
                borderTopWidth="1px"
                borderTopStyle="solid"
                borderTopColor={getBrandColors(colorMode).border}
                textAlign="center"
                {...props}
            >
                This site is <Link href="https://github.com/bitspittle/bitspittle.dev">Open Source</Link>.
                It is built using <Link href="https://nextjs.org/">Next.js</Link> and{' '}
                <Link href="https://chakra-ui.com/">Chakra UI</Link>.
            </Container>
        </>

    )
}
