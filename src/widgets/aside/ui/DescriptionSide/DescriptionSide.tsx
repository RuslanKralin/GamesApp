import React from 'react'

import { Typography, Box } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined'

type DescriptionSidePropsType = {
    release: string
    gameTitle: string
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
            <Box>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: '700',
                        fontSize: '72px',
                        lineHeight: '74px',
                        color: 'white',
                    }}
                >
                    {props.gameTitle}
                </Typography>
            </Box>
        </>
    )
}

export default DescriptionSide
