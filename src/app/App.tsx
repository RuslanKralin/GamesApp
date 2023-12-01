import React from 'react'
import './App.css'
import Router from './Router'
import theme from './theme/theme'
import { ThemeProvider, CssBaseline } from '@mui/material'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Router />
        </ThemeProvider>
    )
}

export default App
