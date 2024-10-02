import { createTheme, ThemeOptions } from "@mui/material";

import palette from './palette';
import breakpoints from "./breakpoint";
import spacing from "./spacing";
import shape from "./shape";
import components from "./components";


const theme : ThemeOptions = createTheme({
    breakpoints: breakpoints,
    spacing: spacing,
    shape: shape, 
    palette: palette,
    components: components,
})

export default theme;