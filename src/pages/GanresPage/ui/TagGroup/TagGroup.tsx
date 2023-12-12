import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

const btnStyle = {
    borderRadius: '50px',
    color: 'grey',
    fontSize: '12px',
    backgroundColor: 'background.btn',
    padding: '7px 20px',
    '&:hover': {
        color: 'white',
        backgroundColor: 'background.btn',
        transition: 'color 0.3s ease',
    },
}

function TagGroup() {
    const [gamesData, setGamesData] = useState([])
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '7px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    mb: '30px',
                }}
            >
                <Typography sx={{ color: 'grey' }}>Related tags:</Typography>
                <Button sx={btnStyle}>Singleplayer</Button>
                <Button sx={btnStyle}>Steam Achievements</Button>
                <Button sx={btnStyle}>Multiplayer</Button>
                <Button sx={btnStyle}>Full Controller Support</Button>
                <Button sx={btnStyle}>Steam Cloud</Button>
                <Button sx={btnStyle}>Atmospheric</Button>
                <Button sx={btnStyle}>steam-trending-cards</Button>
                <Button sx={btnStyle}>Greate Soundtrack</Button>
                <Button sx={btnStyle}>RPG</Button>
                <Button sx={btnStyle}>Co-op</Button>
                <Button sx={btnStyle}>Story Rich</Button>
                <Button sx={btnStyle}>Open World</Button>
                <Button sx={btnStyle}>First Person</Button>
                <Button sx={btnStyle}>Third Person</Button>
                <Button sx={btnStyle}>Sci-fi</Button>
                <Button sx={btnStyle}>FPS</Button>
            </Box>
        </Box>
    )
}

export default TagGroup
