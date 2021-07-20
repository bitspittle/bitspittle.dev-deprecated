import { extendTheme } from "@chakra-ui/react"
import colors from "./colors"
import config from "./config"
import fonts from "./fonts"

const theme = extendTheme({
    config,
    colors,
    fonts,
})

export default theme