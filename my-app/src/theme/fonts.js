import { extendTheme, theme as base  } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `Rock Salt, ${base.fonts?.heading}`,
        body: `RocknRoll One, ${base.fonts?.body}`
    }
});

export default theme;