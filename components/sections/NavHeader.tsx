import {Box, Flex, HStack, Spacer, StackProps} from "@chakra-ui/react";
import {LightModeToggle} from "../widgets/LightModeToggle";
import React from "react";

import styles from "/styles/sections/NavHeader.module.css"

export const NavHeader: React.FunctionComponent<StackProps> = ({ ...props}) => {
    return (
        <Flex
            as="header"
            className={styles.header}
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
