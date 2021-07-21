import React from 'react'
import {LinkProps as BrandLinkProps, useColorMode, useColorModeValue} from '@chakra-ui/react'
import {getBrandColors} from "../../theme/colors";
import {Link} from "./Link";

/**
 * A {@link Link} that additionally sets the appropriate brand colors automatically,
 * including support for when the color mode changes.
 */
export const ThemedLink: React.FunctionComponent<BrandLinkProps> = ({...props}) => {
    const {colorMode} = useColorMode()
    return (
        <Link
            transitionProperty="color"
            transitionDuration="normal"
            color={getBrandColors(colorMode).link}
            {...props}
        />
    )
}
