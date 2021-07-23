import React from 'react'
import {Heading, HeadingProps} from "@chakra-ui/react";

const _Heading: React.FunctionComponent<HeadingProps> = ({...props}) => {
    return <Heading
        {...props}
        _first={{marginTop: "0em"}}
        marginTop="1em"
        marginBottom="0.5em"
    />
}

export const H1: React.FunctionComponent<HeadingProps> = ({...props}) => {
    return <_Heading as="h1" size="3xl" {...props} />
}

export const H2: React.FunctionComponent<HeadingProps> = ({...props}) => {
    return <_Heading as="h2" size="xl" {...props} />
}

export const H3: React.FunctionComponent<HeadingProps> = ({...props}) => {
    return <_Heading as="h3" size="lg" {...props} />
}
