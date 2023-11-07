import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Box, Link } from '@mui/material'

import { DescriptionSide, ScreenShotSide } from 'widgets/Aside/ui'

interface AboutGamePropsType {
    name: string
    background_image: string
    id: number
    updated: string
    released: string
}

function AboutGame() {
    const API_KEY: string = 'e1f2ed8b762a4f76ab4883d16cfec313'

    const [gamesData, setGamesData] = useState<AboutGamePropsType>()
    const [nessessaryShots, setNessessaryShots] = useState([])
    const [mainShot, setMainShots] = useState<string>()

    const { id } = useParams()

    const URL: string = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    const URL_SCREEN_SHOT: string = `https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`

    async function getGame(URL: string) {
        const response = await fetch(URL)
        const data = await response.json()
        setGamesData(data)
        gamesData && console.log(gamesData)
        return data
    }

    async function getGameScreenShots(URL: string) {
        const response = await fetch(URL_SCREEN_SHOT)
        const dataScreenShots = await response.json()
        const nessessaryShots = dataScreenShots.results.slice(1, 5)
        const mainShot = dataScreenShots.results[0]
        setMainShots(mainShot.image)
        console.log(mainShot)
        setNessessaryShots(nessessaryShots)
        return nessessaryShots
    }

    useEffect(() => {
        getGame(URL)
        getGameScreenShots(URL_SCREEN_SHOT)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [URL, URL_SCREEN_SHOT])

    return (
        <Box
            sx={{
                marginLeft: '160px',
                marginRight: '130px',
                marginTop: '30px',
            }}
        >
            <Box sx={{ marginBottom: '30px' }}>
                <Link
                    href="#"
                    underline="none"
                    sx={{
                        color: '#ffffff66',
                        '&:hover': {
                            color: 'white',
                            transition: 'color 0.3s ease',
                        },
                    }}
                >
                    {'Home /'}
                </Link>
                <Link
                    href="#"
                    underline="none"
                    sx={{
                        color: '#ffffff66',
                        '&:hover': {
                            color: 'white',
                            transition: 'color 0.3s ease',
                        },
                    }}
                >
                    {' Games /'}
                </Link>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexBasis: '60%' }}>
                    <DescriptionSide
                        release={gamesData?.released}
                        gameTitle={gamesData?.name}
                    />
                </Box>
                <Box sx={{ flexBasis: '40%' }}>
                    <ScreenShotSide
                        mainShot={mainShot}
                        nessessaryShots={nessessaryShots}
                        update={gamesData?.updated}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default AboutGame
