import React from 'react'
import {Divider, DividerProps as ThemedDividerProps, useColorMode} from '@chakra-ui/react'
import {getBrandColors} from "../../theme/colors";

/**
 * A {@link Divider} that additionally sets the appropriate brand colors automatically,
 * including support for when the color mode changes.
 */
export const ThemedDivider: React.FunctionComponent<ThemedDividerProps> = (
    {
        ...props
    }
) => {
    const {colorMode} = useColorMode()
    return (
        <Divider
            transitionProperty="border-color"
            transitionDuration="normal"
            borderColor={getBrandColors(colorMode).separator}
            {...props}
        />
    )
}
