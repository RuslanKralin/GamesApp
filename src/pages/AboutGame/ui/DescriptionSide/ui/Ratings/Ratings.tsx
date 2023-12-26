import React from 'react'

import { Box, Button, Typography } from '@mui/material'

interface Rate {
    title?: string
    count?: number
    percent?: number
}

interface RatingsPropsType {
    ratings?: Array<Rate>
}

function Ratings(props: RatingsPropsType) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    display: 'flex',
                    borderRadius: '10px',
                    width: '100%',
                    mb: '30px',
                }}
            >
                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(180deg,#b4ec51,#429321)',
                        height: '50px',
                        width: '100px',
                    }}
                ></Box>

                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(0deg,#4354b9,#649bff)',
                        height: '50px',
                        width: '100px',
                    }}
                ></Box>
                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(180deg,#fad961,#f76b1c)',
                        height: '50px',
                        width: '100px',
                    }}
                ></Box>
                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(180deg,#ff5764,#f11a2a)',
                        height: '50px',
                        width: '100px',
                    }}
                ></Box>
            </Box>
            <Box sx={{ display: 'flex', mb: '30px' }}>
                <Button
                    sx={{
                        padding: '5px 20px',
                        fontSize: '14px',
                        fontWeight: '700',
                        position: 'relative',
                        '&:hover::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: '2px solid grey',
                            borderRadius: '30px',
                            padding: '0 20px',
                        },
                    }}
                    variant="text"
                    startIcon={
                        <Box
                            sx={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundImage:
                                    'linear-gradient(180deg,#b4ec51,#429321)',
                            }}
                        ></Box>
                    }
                >
                    Exceptional<Typography sx={{ ml: '10px' }}>106</Typography>
                </Button>

                <Button
                    sx={{
                        padding: '5px 20px',
                        fontSize: '14px',
                        fontWeight: '700',
                        position: 'relative',
                        '&:hover::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: '2px solid grey',
                            borderRadius: '30px',
                            padding: '0 20px',
                        },
                    }}
                    variant="text"
                    startIcon={
                        <Box
                            sx={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundImage:
                                    'linear-gradient(0deg,#4354b9,#649bff)',
                            }}
                        ></Box>
                    }
                >
                    Recommended<Typography sx={{ ml: '10px' }}>106</Typography>
                </Button>
                <Button
                    sx={{
                        padding: '5px 20px',
                        fontSize: '14px',
                        fontWeight: '700',
                        position: 'relative',
                        '&:hover::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: '2px solid grey',
                            borderRadius: '30px',
                            padding: '0 20px',
                        },
                    }}
                    variant="text"
                    startIcon={
                        <Box
                            sx={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundImage:
                                    'linear-gradient(180deg,#fad961,#f76b1c)',
                            }}
                        ></Box>
                    }
                >
                    Meh<Typography sx={{ ml: '10px' }}>106</Typography>
                </Button>
                <Button
                    sx={{
                        padding: '5px 20px',
                        fontSize: '14px',
                        fontWeight: '700',
                        position: 'relative',
                        '&:hover::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: '2px solid grey',
                            borderRadius: '30px',
                            padding: '0 20px',
                        },
                    }}
                    variant="text"
                    startIcon={
                        <Box
                            sx={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundImage:
                                    'linear-gradient(180deg,#ff5764,#f11a2a)',
                            }}
                        ></Box>
                    }
                >
                    Skip<Typography sx={{ ml: '10px' }}>106</Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default Ratings
