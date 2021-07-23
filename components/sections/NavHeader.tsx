import {Flex, HStack, Spacer, StackProps} from "@chakra-ui/react";
import {LightModeToggle} from "../widgets/LightModeToggle";
import React from "react";
import {Link} from "../elements/Link";

export const NavHeader: React.FunctionComponent<StackProps> = ({...props}) => {
    return (
        <Flex
            as="header"
            padding="0.5em 0em 0em 0em"
            margin="0em 0em 3.5em 0em"
            {...props}
        >
            <HStack as="nav" spacing={4}>
                <Link href="/">$bs</Link>
                <Link href="/about">About</Link>
                <Link href="/posts">Posts</Link>
            </HStack>
            <Spacer/>
            <HStack as="aside">
                <LightModeToggle/>
            </HStack>
        </Flex>
    )
}
