import React from 'react'

import { Typography } from '@mui/material'

type SimilarGamesPropsType = {
    gameTitle: string | undefined
}

function SimilarGames(props: SimilarGamesPropsType) {
    return (
        <>
            <Typography
                variant="h3"
                sx={{
                    color: 'white',
                    '&:hover': {
                        color: 'grey',
                        transition: 'color 0.3s ease',
                    },
                }}
            >
                Games like {props.gameTitle}
            </Typography>
        </>
    )
}

export default SimilarGames
