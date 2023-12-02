import React from 'react'
import { Button } from '@mui/material'
import FlareIcon from '@mui/icons-material/Flare'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import { useThemeContext } from '../../../../app/theme/ThemeContextProvider'

function ChangeTheme() {
    const { mode, toggleColorMode } = useThemeContext()

    return (
        <Button onClick={toggleColorMode}>
            {mode === 'dark' ? (
                <FlareIcon sx={{ color: 'yellow' }} />
            ) : (
                <ModeNightIcon sx={{ color: 'yellow' }} />
            )}
        </Button>
    )
}

export default ChangeTheme
