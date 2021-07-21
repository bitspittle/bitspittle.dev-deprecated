import {theme} from "@chakra-ui/react";
import {ColorMode} from "@chakra-ui/color-mode/dist/types/color-mode.utils";
import {transparentize} from "@chakra-ui/theme-tools/dist/types/color";

export interface BrandColors {
    bg: string,
    fg: string,
    code: string,
    border: string,
    link: string,
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
            bg: '#eeeeec',
            fg: '#5faf5f',
            code: '#00000011',
            border: theme.colors.gray["700"],
            link: '#0c989a'
        },
        dark: {
            bg: '#300a24',
            fg: '#01f901',
            code: '#ffffff33',
            border: theme.colors.gray["400"],
            link: '#07979a'
        }
    }
}

// Cast to any so the object can be dynamically added into the parent theme
const colors: any = brandColorSection

export function getBrandColors(colorMode: ColorMode): BrandColors {
    return colorMode==="light" ? colors.brand.light : colors.brand.dark
}

export default colors