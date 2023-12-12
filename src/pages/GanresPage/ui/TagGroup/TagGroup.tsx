import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

import GridOnIcon from '@mui/icons-material/GridOn'
import WebAssetIcon from '@mui/icons-material/WebAsset'

type DisplayOptinsType = 'lines' | 'bigSize'

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

const iconStyle = {
    border: '1px grey',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: '#ffffff12',
    padding: '5px',
    width: '50px',
    height: '50px',
}

function TagGroup() {
    const [displayOptions, setDisplayOptions] =
        useState<DisplayOptinsType>('lines')

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '10px',
            }}
        >
            <Typography sx={{ color: 'grey' }}>Related tags:</Typography>
            <Box sx={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px',
                }}
            >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Button
                        sx={{
                            color: 'primary',
                            backgroundColor: 'background.btn',
                            '&:hover': {
                                backgroundColor: 'background.btnHover',
                                transition: 'backgroundColor 0.3s ease',
                            },
                        }}
                    >
                        Order by:{' '}
                    </Button>
                    <Button
                        sx={{
                            color: 'primary',
                            backgroundColor: 'background.btn',
                            '&:hover': {
                                backgroundColor: 'background.btnHover',
                                transition: 'backgroundColor 0.3s ease',
                            },
                        }}
                    >
                        Platforms:{' '}
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ color: 'grey', marginRight: '20px' }}>
                        Display options:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Button
                            sx={{
                                backgroundColor: 'background.btn',
                                padding: 0,
                                minWidth: 0,
                                '& .MuiButton-label': {
                                    padding: 0,
                                },
                                '&:hover': {
                                    backgroundColor: 'background.btnHover',
                                    transition: 'backgroundColor 0.3s ease',
                                },
                            }}
                            onClick={() => setDisplayOptions('lines')}
                        >
                            <GridOnIcon style={iconStyle} />
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: 'background.btn',
                                padding: 0,
                                minWidth: 0,
                                '& .MuiButton-label': {
                                    padding: 0,
                                },
                                '&:hover': {
                                    backgroundColor: 'background.btnHover',
                                    transition: 'backgroundColor 0.3s ease',
                                },
                            }}
                            onClick={() => setDisplayOptions('bigSize')}
                        >
                            <WebAssetIcon style={iconStyle} />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TagGroup
