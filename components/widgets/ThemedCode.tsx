import React from 'react'
import {Code, CodeProps as ThemedCodeProps, useColorMode} from '@chakra-ui/react'
import {getBrandColors} from "../../theme/colors";

/**
 * A {@link Code} that additionally sets the appropriate brand colors automatically,
 * including support for when the color mode changes.
 */
export const ThemedCode: React.FunctionComponent<ThemedCodeProps> = (
    {
        fontSize="md",
        ...props
    }
) => {
    const {colorMode} = useColorMode()
    return (
        <Code
            transitionProperty="background-color, color"
            transitionDuration="normal"
            fontSize={fontSize}
            backgroundColor={getBrandColors(colorMode).code}
            color={getBrandColors(colorMode).fg}
            {...props}
        />
    )
}
