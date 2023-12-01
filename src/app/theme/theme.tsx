import { createTheme } from '@mui/material'
import { blue, green, orange, red } from '@mui/material/colors'
import { deepPurple } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: green[500],
        },
        background: {
            default: 'rgba(0, 0, 0, 0.921)',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                },
            },
        },
    },
})

export default theme
