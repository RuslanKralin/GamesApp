import { createTheme, PaletteMode } from '@mui/material'
import React from 'react'
import theme, { getDesignTokens } from './theme'

export const useColorTheme = () => {
    const [mode, setMode] = React.useState<PaletteMode>('dark')

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        console.log(mode)
    }

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    )

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    }
}
