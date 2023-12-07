import { useContext } from 'react'

import { IconButton } from '@mui/material'
import { toggleThemeContext } from 'app/theme'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

function ChangeTheme() {
    const { toggleTheme, isDefaultTheme } = useContext(toggleThemeContext)

    return (
        <IconButton onClick={toggleTheme}>
            {isDefaultTheme ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    )
}

export default ChangeTheme
