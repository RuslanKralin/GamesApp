import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Browse() {
    const location = useLocation()
    const currentURL = location.pathname // записываем текущий URL в переменную
    console.log(currentURL)
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                mt: '50px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h1" sx={{ fontWeight: '700' }}>
                    Browse
                </Typography>
            </Box>
        </Box>
    )
}

export default Browse
