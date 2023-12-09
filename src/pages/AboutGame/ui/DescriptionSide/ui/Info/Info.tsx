import React from 'react'

import { Box, Link, Typography } from '@mui/material'

export type PlatformsType = {
    name: string
}

type InfoPropsType = {
    platforms: Array<PlatformsType> | undefined
    genres: string[] | undefined
    released: string | undefined
    developers: string[] | undefined
    publishers: string[] | undefined
}

const infoTitleStyle = {
    fontSize: '14px',
    color: 'grey',
    fontWeight: '600',
}

const linkStyle = {
    color: 'primary',
    cursor: 'pointer',
    '&:hover': {
        color: 'grey',
        transition: 'color 0.3s ease',
    },
}

function Info(props: InfoPropsType) {
    return (
        <Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Box sx={{ width: '250px', mb: '20px' }}>
                    <Typography sx={infoTitleStyle}>Platforms</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {props.platforms?.map((p: any) => (
                            <Link sx={linkStyle} underline="none">
                                {p.platform.name + ' ,'}
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ width: '250px', mb: '20px' }}>
                    <Typography sx={infoTitleStyle}>Genre</Typography>
                    {props.genres?.map((g: any) => (
                        <Link sx={linkStyle} underline="none">
                            {g.name + ' ,'}
                        </Link>
                    ))}
                </Box>
                <Box sx={{ width: '250px', mb: '20px' }}>
                    <Typography sx={infoTitleStyle}>Realese date</Typography>
                    <Typography sx={{ color: 'white' }}>
                        {props.released}
                    </Typography>
                </Box>
                <Box sx={{ width: '250px', mb: '20px' }}>
                    <Typography sx={infoTitleStyle}>Developer</Typography>
                    {props.developers?.map((d: any) => (
                        <Link sx={linkStyle} underline="none">
                            {d.name + ' ,'}
                        </Link>
                    ))}
                </Box>
                <Box sx={{ width: '250px' }}>
                    <Typography sx={infoTitleStyle}>Publisher</Typography>
                    {props.publishers?.map((p: any) => (
                        <Link sx={linkStyle} underline="none">
                            {p.name}
                        </Link>
                    ))}
                </Box>
                <Box sx={{ width: '250px' }}>
                    <Typography sx={infoTitleStyle}>Age raiting</Typography>
                    <Link>qwe</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Info
