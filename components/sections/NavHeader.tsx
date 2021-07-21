import {Box, Flex, HStack, Spacer, StackProps} from "@chakra-ui/react";
import {LightModeToggle} from "../widgets/LightModeToggle";
import React from "react";

export const NavHeader: React.FunctionComponent<StackProps> = ({ ...props}) => {
    return (
        <Flex
            as="header"
            padding="0.5em"
            {...props}
        >
            <HStack as="nav">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
            </HStack>
            <Spacer />
            <HStack as="aside">
                <Box>1</Box>
                <Box>2</Box>
                <LightModeToggle/>
            </HStack>
        </Flex>
    )
}
