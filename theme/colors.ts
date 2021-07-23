import {theme, useColorMode} from "@chakra-ui/react";
import {ColorMode} from "@chakra-ui/color-mode/dist/types/color-mode.utils";
import {transparentize} from "@chakra-ui/theme-tools/dist/types/color";

export interface BrandColors {
    /** Background color */
    bg: string,
    /** Primary foreground color, e.g. text */
    fg: string,
    /** Secondary foreground color, e.g. links */
    accent: string,
    /** Logo color */
    logo: string,
    /** Background color for code blocks */
    code: string,
    /** Color for separators, e.g. borders */
    separator: string,
}

interface BrandColorModes {
    light: BrandColors
    dark: BrandColors
}

interface BrandColorSection {
    brand: BrandColorModes
}

const brandColorSection: BrandColorSection = {
    brand: {
        light: {
            bg: '#ffffff',
            fg: '#333333',
            accent: '#0c989a',
            logo: '#5faf5f',
            code: '#00000011',
            separator: theme.colors.gray["700"],
        },
        dark: {
            bg: '#2b2b2b',
            fg: '#bbbbbb',
            accent: '#07979a',
            logo: '#01f901',
            code: '#ffffff33',
            separator: theme.colors.gray["400"],
        }
    }
}

// Cast to any so the object can be dynamically added into the parent theme
const colors: any = brandColorSection

export function useBrandColors(): BrandColors {
    const { colorMode } = useColorMode()
    return getBrandColors(colorMode)
}

export function getBrandColors(colorMode: ColorMode): BrandColors {
    return colorMode==="light" ? colors.brand.light : colors.brand.dark
}

export default colors