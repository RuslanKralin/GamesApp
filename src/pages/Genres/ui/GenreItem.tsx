import React from 'react'

import { Box, Button, Typography, Link, Divider } from '@mui/material'

const linkStyle = {
    color: 'primary',
    fontSize: '24px',
    fontWeight: '700',
    '&:hover': {
        color: 'grey',
        transition: 'color 0.3s ease',
    },
}

const btnStyle = {
    width: '120px',
    borderRadius: '5px',
    p: '10px 0',
    '&:hover': {
        color: 'grey',
        backgroundColor: 'white',
        transition: 'color backgroundColor 0.3s ease',
    },
}

function GenreItem() {
    return (
        <Box
            sx={{
                width: '310px',
                height: '310px',
                backgroundImage: ` url('https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg')`,
                borderRadius: '7px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: '30px',
                    mb: '30px',
                }}
            >
                <Typography sx={{ mb: '5px' }}>
                    <Link href="#" sx={linkStyle}>
                        Title
                    </Link>
                </Typography>

                <Button sx={btnStyle}>Follow</Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: '0 20px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',

                        mb: '5px',
                    }}
                >
                    <Typography sx={{ fontWeight: '700' }}>
                        Popular items
                    </Typography>
                    <Typography>177,330</Typography>
                </Box>

                <Divider
                    style={{ background: 'grey', height: '2px' }} // переделать
                    variant="fullWidth"
                />

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Link href="#">First game title</Link>
                    <Link href="#">First game title</Link>
                    <Link href="#">First game title</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default GenreItem
