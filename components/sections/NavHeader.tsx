import {Flex, HStack, Spacer, StackProps} from "@chakra-ui/react";
import {LightModeToggle} from "../widgets/LightModeToggle";
import React from "react";
import {Link} from "../elements/Link";
import {useBrandColors} from "../../theme/colors";

export const NavHeader: React.FunctionComponent<StackProps> = ({...props}) => {
    const brandColors = useBrandColors()
    return (
        <Flex
            as="header"
            padding="0.5em 0em 0em 0em"
            margin="0em 0em 3.5em 0em"
            fontSize={
                // Make it easier to click header links on mobile
                {base: "xl", md: "md"}
            }
            {...props}
        >
            <HStack as="nav" spacing={4}>
                <Link color={brandColors.logo} transitionDuration="normal" transitionProperty="color"
                      href="/">$bs</Link>
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
