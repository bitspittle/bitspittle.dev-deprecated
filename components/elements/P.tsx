import React from 'react'
import {Text, TextProps} from "@chakra-ui/react";

export const P: React.FunctionComponent<TextProps> = ({children, ...props}) => {
    return (
        <Text
            _first={{marginTop: "0em"}}
            marginTop="1em"
            {...props}>
            {children}
        </Text>
    )
}
