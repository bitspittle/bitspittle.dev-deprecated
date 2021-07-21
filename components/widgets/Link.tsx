import React from 'react'
import {Link as ChakraLink, LinkProps, useColorMode} from '@chakra-ui/react'
import {getBrandColors} from "../../theme/colors";

/** Our own link which changes color based on the color mode */
export const Link: React.FunctionComponent<LinkProps> = ({...props}) => {
    const {colorMode} = useColorMode()
    return (
        <ChakraLink
            color={getBrandColors(colorMode).link}
            {...props}
        />
    )
}