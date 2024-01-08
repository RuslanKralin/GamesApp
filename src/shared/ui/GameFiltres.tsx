import React from 'react'
import { Box, Button, Typography } from '@mui/material'

import GridOnIcon from '@mui/icons-material/GridOn'
import WebAssetIcon from '@mui/icons-material/WebAsset'

const iconStyle = {
    border: '1px grey',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: '#ffffff12',
    padding: '5px',
    width: '50px',
    height: '50px',
}

type DisplayOptionsType = 'lines' | 'bigSize'
type Props = {
    displeyOptionsHandler: (option: DisplayOptionsType) => void
}

function GameFiltres({ displeyOptionsHandler }: Props) {
    return (
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
                        onClick={() => displeyOptionsHandler('lines')}
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
                        onClick={() => displeyOptionsHandler('bigSize')}
                    >
                        <WebAssetIcon style={iconStyle} />
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default GameFiltres
