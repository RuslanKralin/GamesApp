import { Box, Typography } from '@mui/material'
import React from 'react'
import { GenreItem } from './ui'

function Genres() {
    return (
        <Box>
            <Typography
                variant="h2"
                color="primary"
                sx={{
                    // color: 'primary',
                    fontWeight: '800',
                    marginTop: '30px',
                    marginBottom: '20px',
                }}
            >
                Genres
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'space-between',
                }}
            >
                <GenreItem />
            </Box>
        </Box>
    )
}

export default Genres
