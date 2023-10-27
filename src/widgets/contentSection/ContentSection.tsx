import React from 'react'

import { Typography, Box, Button } from '@mui/material'
import { CardItem } from './ui'

function ContentSection() {
    return (
        <Box>
            <Typography
                variant="h2"
                sx={{ color: 'white', fontWeight: '800', marginBottom: '5px' }}
            >
                New and trending
            </Typography>
            <Typography sx={{ color: 'white', marginBottom: '5px' }}>
                Based on player counts and release date
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                <Button sx={{ color: 'white', backgroundColor: '#ffffff12' }}>
                    Order by:{' '}
                </Button>
                <Button sx={{ color: 'white', backgroundColor: '#ffffff12' }}>
                    Platforms:{' '}
                </Button>
            </Box>
            <Box>
                <CardItem />
            </Box>
        </Box>
    )
}

export default ContentSection
