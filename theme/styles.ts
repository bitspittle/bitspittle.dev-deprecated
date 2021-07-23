import {mode} from "@chakra-ui/theme-tools"
import colors, {getBrandColors, useBrandColors} from "./colors";
import {Dict} from "@chakra-ui/utils";

const styles = {
    global: (props: Dict) => ({
        body: {
            padding: "0",
            // Shifts the screen over so scrollbar doesn't affect layout
            // See: https://stackoverflow.com/a/30293718/1299302
            paddingLeft: "calc(100vw - 100%)",
            background: getBrandColors(props.colorMode).bg,
            margin: "0",
            fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontSize: "md",
            lineHeight: "tall",
        },
        a: {
            color: mode(colors.brand.light.link, colors.brand.dark.link)(props),
            textDecoration: "none",
        },
        "*": {
            boxSizing: "border-box"
        }
    }),
}

export default styles