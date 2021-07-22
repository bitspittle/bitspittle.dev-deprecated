import React from 'react'
import NextLink from 'next/link'
import {Link as ChakraLink, LinkProps} from '@chakra-ui/react'

/**
 * Our own Link class which encapsulates both Next.js AND Chakra UI
 * functionality.
 *
 * Next.js gives us client side navigation, which is much snappier, while
 * Chakra gives us the ability to style things dynamically.
 *
 * See also: {@link ThemedLink}.
 */
export const Link: React.FunctionComponent<LinkProps> = (
    {
        href,
        ...props}
) => {
    return (
        <NextLink href={href ?? "/"}>
            <ChakraLink {...props} />
        </NextLink>
    )
}