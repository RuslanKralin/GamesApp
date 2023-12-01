// import { useContext } from 'react'
import React, { useState } from 'react'

import { Button } from '@mui/material'
// import { toggleThemeContext } from 'app/theme'
// import { MdOutlineWbSunny } from 'react-icons/md'
import FlareIcon from '@mui/icons-material/Flare'
import ModeNightIcon from '@mui/icons-material/ModeNight'

function ChangeTheme() {
    //   const { toggleTheme, isDefaultTheme } = useContext(toggleThemeContext)
    const [themeIcon, setThemeIcon] = useState<string>('dark')

    const toggleTheme = () => {
        setThemeIcon(themeIcon === 'dark' ? 'light' : 'dark')
    }
    return (
        <Button onClick={toggleTheme}>
            {themeIcon === 'dark' ? (
                <FlareIcon sx={{ color: 'white' }} />
            ) : (
                <ModeNightIcon sx={{ color: 'white' }} />
            )}
        </Button>
    )
}

export default ChangeTheme
