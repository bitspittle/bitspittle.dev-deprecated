import React from 'react'
import {Box, BoxProps} from "@chakra-ui/react";

export const Br: React.FunctionComponent<BoxProps> = ({...props}) => {
    return <Box lineHeight="100%" {...props}><br/></Box>
}
