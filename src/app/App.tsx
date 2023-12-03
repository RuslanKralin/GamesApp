import React from 'react'
import './App.css'
import Router from './Router'
// import theme from './theme/theme'
import { CssBaseline } from '@mui/material'
// import { useThemeContext } from './theme/ThemeContextProvider'
import AppThemeProvider from './theme/theme'

function App() {
    // const { theme } = useThemeContext()

    return (
        <AppThemeProvider>
            <CssBaseline enableColorScheme />
            <Router />
        </AppThemeProvider>
    )
}

export default App
