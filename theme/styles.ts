import {mode} from "@chakra-ui/theme-tools"
import colors, {getBrandColors} from "./colors";
import {Dict} from "@chakra-ui/utils";

const styles = {
    global: (props: Dict) => ({
        "html, body": {
            padding: "0",
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontSize: "md",
            color: mode(colors.brand.light.bg, colors.brand.dark.bg)(props),
            lineHeight: "tall",
        },
        a: {
            color: mode(colors.brand.light.link, colors.brand.dark.link),
            textDecoration: "none",
        },
        "*": {
            boxSizing: "border-box"
        }
    }),
}

export default styles