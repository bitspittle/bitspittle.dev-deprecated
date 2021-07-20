import {Box, HStack, StackProps} from "@chakra-ui/react";
import styles from "/styles/sections/Footer.module.css"

export const Footer: React.FunctionComponent<StackProps> = ({...props}) => {
    return (
        <HStack as="footer" className={styles.footer} {...props}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
        </HStack>
    )
}

/*
export const NavHeader: React.FC<NavHeaderProps> = ({ ...props }) => {
  return (
    <Flex
      as="header"
      alignItems="center"
      gridRowGap={1}
      flexWrap="wrap"
      {...props}
    >
      <HStack as="nav" spacing={[4, 6]} alignItems="center">
        <RouteLink to="/" rounded="full">
          <Logo w={8} h={8} aria-label="François Best" />
        </RouteLink>
        <NavLink to="/" {...navLinkProps} shouldBeActive={navLinkMatch.exact}>
          About
        </NavLink>
        <NavLink to="/open-source" {...navLinkProps}>
          Open Source
        </NavLink>
        <NavLink to="/posts" {...navLinkProps}>
          Blog
        </NavLink>
      </HStack>
      <HStack as="aside" ml="auto" spacing={0}>
        <IconButtonOutgoingLink
          icon={<FiTwitter />}
          aria-label="Follow me on Twitter"
          href="https://twitter.com/fortysevenfx"
          variant="ghost"
          isRound
        />
        <AccentPicker
          aria-label="Accent Color Picker"
          variant="ghost"
          zIndex={1} // Allow the outline to display over siblings
        />
        <ColorModeSwitch variant="ghost" />
      </HStack>
    </Flex>
  )
}
 */


/*
export var todo = "TODO"
// Should show "$bs About Posts                social | dark mode
//                                             ^ clubhouse | twitter | linkedin | reddit

const Header: React.FunctionComponent<LayoutProps> = () => {
    return (
        <>
            <Box
                backgroundColor={colorMode === "light" ? theme.colors.brand.light.bg : theme.colors.brand.dark.bg}
                color={colorMode === "light" ? theme.colors.brand.light.fg : theme.colors.brand.dark.fg}
            >
                <div className={styles.container}>
                    {!fullscreen && <div>TODO HEADER</div>}
                    <main className={styles.main}>
                        {children}
                    </main>
                    {!fullscreen && <div>TODO FOOTER</div>}
                </div>
            </Box>
        </>
    )
}

export default Layout*/