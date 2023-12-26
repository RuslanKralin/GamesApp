import React from 'react'
import { Box, Link, Typography } from '@mui/material'

interface Genre {
    name: string
    position: number
    change: string
}

interface YearRate {
    year: number
    position: number
}

interface ChartsPropsType {
    charts?: Genre[]
    year?: YearRate[]
}

function Charts(props: ChartsPropsType) {
    return (
        <Box sx={{ display: 'flex', mb: '30px', gap: '100px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Typography>Meh</Typography>
                    <Typography>Text 1</Typography>
                </Box>
                <Link href="#">link</Link>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Typography>Meh</Typography>
                    <Typography>fgh</Typography>
                </Box>
                <Link href="#">link</Link>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexBasis: '30%',
                }}
            >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Typography>Meh</Typography>
                    <Typography>Text 2</Typography>
                </Box>
                <Link href="#">link</Link>
            </Box>
        </Box>
    )
}

export default Charts
