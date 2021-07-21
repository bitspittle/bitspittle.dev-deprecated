import {extendTheme} from "@chakra-ui/react"
import colors from "./colors"
import config from "./config"
import fonts from "./fonts"
import styles from "./styles";

const theme = extendTheme({
    styles,
    config,
    colors,
    fonts,
})

export default theme