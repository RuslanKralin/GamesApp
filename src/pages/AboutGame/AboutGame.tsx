import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Box, Link } from '@mui/material'

import {
    DescriptionSide,
    ScreenShotSide,
    SimilarGames,
} from 'pages/AboutGame/ui'

export type PlatformsType = {
    name: string
}

export type BuyBtnStores = {
    name: string
    image_background: string
    url: string
}

interface Chart {
    name: string
    position: number
    change: string
}
interface AboutGamePropsType {
    name: string
    background_image: string
    id: number
    updated: string
    released: string
    stores: Array<BuyBtnStores> | undefined
    description_raw: string | undefined
    platforms: Array<PlatformsType> | undefined
    genres: string[]
    developers: string[]
    publishers: string[]
    ratings: any[]
    charts?: Chart[]
}

function AboutGame() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const [gamesData, setGamesData] = useState<AboutGamePropsType>()
    const [nessessaryShots, setNessessaryShots] = useState([])
    const [mainShot, setMainShots] = useState<string>()
    const [dataSameSeries, setDataSameSeries] = useState<AboutGamePropsType>()

    const { id } = useParams()

    const URL: string = `${REACT_APP_API_ENDPOINT}/games/${id}?key=${REACT_APP_API_KEY}`
    const URL_SCREEN_SHOT: string = `${REACT_APP_API_ENDPOINT}/games/${id}/screenshots?key=${REACT_APP_API_KEY}`
    const URL_SAME_GAMES: string = `${REACT_APP_API_ENDPOINT}/games/${id}/suggested?key=${REACT_APP_API_KEY}`

    async function getGame(URL: string) {
        const response = await fetch(URL)
        const data = await response.json()
        setGamesData(data)
        // console.log(data)
        return data
    }

    async function getGameScreenShots(URL: string) {
        const response = await fetch(URL_SCREEN_SHOT)
        const dataScreenShots = await response.json()
        const nessessaryShots = dataScreenShots.results.slice(1, 5)
        const mainShot = dataScreenShots.results[0]
        setMainShots(mainShot.image)
        // console.log(mainShot)
        setNessessaryShots(nessessaryShots)
        return nessessaryShots
    }

    async function getGamesSameSeries(URL: string) {
        const response = await fetch(URL_SAME_GAMES)
        console.log(response)
        // const dataSameSeries = await response.json()
        // setDataSameSeries(dataSameSeries)
        // console.log(dataSameSeries)
        // console.log(dataSameSeries)
        // return dataSameSeries
    }

    useEffect(() => {
        getGame(URL)
        getGameScreenShots(URL_SCREEN_SHOT)
        getGamesSameSeries(URL_SAME_GAMES)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [URL, URL_SCREEN_SHOT, URL_SAME_GAMES])

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

            <Box sx={{ display: 'flex', gap: '20px', mb: '50px' }}>
                <Box sx={{ flexBasis: '60%' }}>
                    <DescriptionSide
                        release={gamesData?.released}
                        gameTitle={gamesData?.name}
                        aboutGame={gamesData?.description_raw}
                        platforms={gamesData?.platforms}
                        genres={gamesData?.genres}
                        released={gamesData?.released}
                        developers={gamesData?.developers}
                        publishers={gamesData?.publishers}
                        ratings={gamesData?.ratings || []}
                        charts={gamesData?.charts || []}
                    />
                </Box>
                <Box sx={{ flexBasis: '40%' }}>
                    <ScreenShotSide
                        mainShot={mainShot}
                        nessessaryShots={nessessaryShots}
                        update={gamesData?.updated}
                        stores={gamesData?.stores}
                    />
                </Box>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <SimilarGames gameTitle={gamesData?.name} />
            </Box>
        </Box>
    )
}

export default AboutGame
