import { PaletteMode } from '@mui/material'
// import { amber, deepOrange, grey } from '@mui/material/colors'
import darkTheme from './dark'
import lightTheme from './light'

const theme = {
    palette: {
        primary: 'white',
    },
}

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light' ? { lightTheme } : { darkTheme }),
    },
})

export default theme
