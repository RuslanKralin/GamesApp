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
    console.log(props.ratings)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    borderRadius: '50px',
                    display: 'flex',
                    width: '600px',
                    mb: '30px',
                }}
            >
                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(180deg,#b4ec51,#429321)',
                        height: '50px',
                        flexBasis: `${props.ratings?.[0]?.percent}%`,
                        // flexGrow: 1,
                    }}
                ></Box>

                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(0deg,#4354b9,#649bff)',
                        height: '50px',
                        flexBasis: `${props.ratings?.[1]?.percent}%`,
                    }}
                ></Box>
                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(180deg,#fad961,#f76b1c)',
                        height: '50px',
                        flexBasis: `${props.ratings?.[2]?.percent}%`,
                    }}
                ></Box>
                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(180deg,#ff5764,#f11a2a)',
                        height: '50px',
                        flexBasis: `${props.ratings?.[3]?.percent}%`,
                    }}
                ></Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    mb: '30px',
                    justifyContent: 'space-between',
                }}
            >
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
                    Exceptional
                    <Typography sx={{ ml: '10px' }}>
                        {props.ratings?.[0]?.count}
                    </Typography>
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
                    Recommended
                    <Typography sx={{ ml: '10px' }}>
                        {' '}
                        {props.ratings?.[1]?.count}
                    </Typography>
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
                    Meh
                    <Typography sx={{ ml: '10px' }}>
                        {' '}
                        {props.ratings?.[2]?.count}
                    </Typography>
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
                    Skip
                    <Typography sx={{ ml: '10px' }}>
                        {' '}
                        {props.ratings?.[3]?.count}
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default Ratings
