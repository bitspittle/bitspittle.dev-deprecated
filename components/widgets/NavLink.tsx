import React from 'react'
import {Link as ChakraLink, LinkProps, useColorMode} from '@chakra-ui/react'
import {getBrandColors} from "../../theme/colors";

// Links in the header bar act differently than links in the rest of the site
export const NavLink: React.FunctionComponent<LinkProps> = ({...props}) => {
    return (
        <ChakraLink{...props}/>
    )
}