import React from 'react'

import { Box, Button, Typography } from '@mui/material'
// @ts-ignore
import goal from 'shared/assets/images/goal.png'
// @ts-ignore
import recommended from 'shared/assets/images/recommended.png'
// @ts-ignore
import badRating from 'shared/assets/images/badRating.png'
// @ts-ignore
import meh from 'shared/assets/images/meh.webp'

interface Rate {
    title?: string
    count?: number
    percent?: number
}

interface RatingsPropsType {
    ratings?: Array<Rate>
}

function Ratings(props: RatingsPropsType) {
    const totalRating: number =
        (props.ratings?.[0]?.count || 0) +
        (props.ratings?.[1]?.count || 0) +
        (props.ratings?.[2]?.count || 0) +
        (props.ratings?.[3]?.count || 0)

    console.log(totalRating)
    const rating: Array<number | undefined> = [
        props.ratings?.[0]?.percent,
        props.ratings?.[1]?.percent,
        props.ratings?.[2]?.percent,
        props.ratings?.[3]?.percent,
    ]

    function findMaxValue(
        rating: Array<number | undefined>
    ): number | undefined {
        let max: number | undefined = undefined
        for (let i = 0; i < rating.length; i++) {
            if (
                rating[i] !== undefined &&
                (max === undefined || rating[i]! > max)
            ) {
                max = rating[i]!
            }
        }
        return max
    }

    console.log(findMaxValue(rating))

    // console.log(props.ratings)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: 'grey', mb: '10px' }}>
                Click to rate
            </Typography>
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
                        // borderTopLeftRadius: '20px',
                        backgroundImage:
                            'linear-gradient(180deg,#b4ec51,#429321)',
                        height: '50px',
                        flexBasis: `${props.ratings?.[0]?.percent}%`,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {props.ratings?.[0]?.percent &&
                        props.ratings?.[0]?.percent > 10 && (
                            <img
                                alt="goal"
                                src={goal}
                                style={{
                                    position: 'absolute',
                                    top: '5px',
                                    left: '20px',
                                    width: '55px',
                                    height: '55px',
                                    marginLeft: '-20px',
                                }}
                            />
                        )}
                </Box>

                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(0deg,#4354b9,#649bff)',
                        height: '50px',
                        flexBasis: `${props.ratings?.[1]?.percent}%`,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {props.ratings?.[1]?.percent &&
                        props.ratings?.[1]?.percent > 10 && (
                            <img
                                alt="recommended"
                                src={recommended}
                                style={{
                                    position: 'absolute',
                                    top: '5px',
                                    width: '55px',
                                    height: '55px',
                                    marginLeft: '-20px',
                                }}
                            />
                        )}
                </Box>
                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(180deg,#fad961,#f76b1c)',
                        height: '50px',
                        flexBasis: `${props.ratings?.[2]?.percent}%`,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {' '}
                    {props.ratings?.[2]?.percent &&
                        props.ratings?.[2]?.percent > 10 && (
                            <img
                                alt="meh"
                                src={meh}
                                style={{
                                    position: 'absolute',
                                    top: '5px',
                                    width: '55px',
                                    height: '55px',
                                    marginLeft: '-20px',
                                }}
                            />
                        )}
                </Box>
                <Box
                    sx={{
                        backgroundImage:
                            'linear-gradient(180deg,#ff5764,#f11a2a)',
                        height: '50px',
                        flexBasis: `${props.ratings?.[3]?.percent}%`,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {props.ratings?.[3]?.percent &&
                        props.ratings?.[3]?.percent > 10 && (
                            <img
                                alt="badRating"
                                src={badRating}
                                style={{
                                    position: 'absolute',
                                    top: '5px',
                                    width: '55px',
                                    height: '55px',
                                    marginLeft: '-20px',
                                }}
                            />
                        )}
                </Box>
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
