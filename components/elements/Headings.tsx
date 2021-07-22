import React from 'react'
import {Heading, HeadingProps} from "@chakra-ui/react";

export const H1: React.FunctionComponent<HeadingProps> = ({...props}) => {
    return <Heading as="h1" size="3xl" {...props} />
}

export const H2: React.FunctionComponent<HeadingProps> = ({...props}) => {
    return <Heading as="h2" size="xl" {...props} />
}

export const H3: React.FunctionComponent<HeadingProps> = ({...props}) => {
    return <Heading as="h3" size="lg" {...props} />
}
