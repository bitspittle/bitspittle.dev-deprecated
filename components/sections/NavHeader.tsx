import {Flex, HStack, Spacer, StackProps} from "@chakra-ui/react";
import {LightModeToggle} from "../widgets/LightModeToggle";
import React from "react";
import {NavLink} from "../widgets/NavLink";

export const NavHeader: React.FunctionComponent<StackProps> = ({...props}) => {
    return (
        <Flex
            as="header"
            padding="1.5em"
            {...props}
        >
            <HStack as="nav" spacing={4}>
                <NavLink href="/">$bs</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/posts">Posts</NavLink>
            </HStack>
            <Spacer/>
            <HStack as="aside">
                <LightModeToggle/>
            </HStack>
        </Flex>
    )
}
