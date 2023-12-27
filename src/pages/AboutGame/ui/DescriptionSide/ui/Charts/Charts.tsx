import React from 'react'
import { Box, Link, Typography } from '@mui/material'

interface Genre {
    name: string
    position: number
    change: string
}

interface YearRate {
    year: number
    position: number
}

interface Rate {
    title?: string
    count?: number
    percent?: number
}
interface ChartsPropsType {
    charts?: Genre[]
    year?: YearRate[]
    ratings?: Array<Rate>
    ratings_count: number | undefined
}

function Charts(props: ChartsPropsType) {
    // const totalRating: number =
    //     (props.ratings?.[0]?.count || 0) +
    //     (props.ratings?.[1]?.count || 0) +
    //     (props.ratings?.[2]?.count || 0) +
    //     (props.ratings?.[3]?.count || 0)

    // console.log(totalRating)
    return (
        <Box sx={{ display: 'flex', mb: '30px', gap: '100px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Typography>Meh</Typography>
                    <Typography></Typography>
                </Box>
                <Link
                    href="#"
                    sx={{
                        letterSpacing: '0.2em',
                        fontSize: '12px',
                        color: '#ffffff66',
                        '&:hover': {
                            color: 'white',
                            transition: 'color 0.3s ease',
                        },
                    }}
                >
                    {props.ratings_count} RATINGS
                </Link>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Typography>Meh</Typography>
                    <Typography>fgh</Typography>
                </Box>
                <Link href="#">link</Link>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexBasis: '30%',
                }}
            >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Typography>Meh</Typography>
                    <Typography>Text 2</Typography>
                </Box>
                <Link href="#">link</Link>
            </Box>
        </Box>
    )
}

export default Charts
