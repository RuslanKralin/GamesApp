import React from 'react'

import { Typography, Box } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined'
import { About, BtnGroup } from './ui'
import { Info } from './ui/Info'

export type PlatformsType = {
    name: string
}
type DescriptionSidePropsType = {
    release: string | undefined
    gameTitle: string | undefined
    aboutGame: string | undefined
    platforms: Array<PlatformsType> | undefined
    genres: string[] | undefined
    released: string | undefined
    developers: string[] | undefined
    publishers: string[] | undefined
}

function DescriptionSide(props: DescriptionSidePropsType) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    gap: '5px',
                    marginBottom: '20px',
                }}
            >
                <Typography
                    sx={{
                        color: 'black',
                        border: '0px solid',
                        bgcolor: 'white',
                        borderRadius: '5px',
                        padding: '0 5px',
                    }}
                >
                    {props.release}
                </Typography>
                <WindowOutlinedIcon sx={{ color: 'white' }} />
                <SportsEsportsIcon sx={{ color: 'white' }} />
            </Box>
            <Box sx={{ marginBottom: '30px' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: '700',
                        fontSize: '72px',
                        lineHeight: '74px',
                        color: 'primary',
                    }}
                >
                    {props.gameTitle}
                </Typography>
            </Box>
            <BtnGroup />
            <About aboutGame={props.aboutGame} />
            <Info
                platforms={props.platforms}
                genres={props.genres}
                released={props.released}
                developers={props.developers}
                publishers={props.publishers}
            />
        </>
    )
}

export default DescriptionSide
