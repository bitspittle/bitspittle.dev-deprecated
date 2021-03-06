import React from 'react'
import {LinkProps as ThemedLinkProps, useColorMode} from '@chakra-ui/react'
import {getBrandColors} from "../../theme/colors";
import {Link} from "./Link";

/**
 * A {@link Link} that additionally sets the appropriate brand colors automatically,
 * including support for when the color mode changes.
 */
export const ThemedLink: React.FunctionComponent<ThemedLinkProps> = ({...props}) => {
    const {colorMode} = useColorMode()
    return (
        <Link
            transitionProperty="color"
            transitionDuration="normal"
            color={getBrandColors(colorMode).accent}
            {...props}
        />
    )
}
