import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Box, Link } from '@mui/material'

import { DescriptionSide, ScreenShotSide } from 'pages/AboutGame/ui'

export type BuyBtnStores = {
    name: string
    image_background: string
    url: string
}
interface AboutGamePropsType {
    name: string
    background_image: string
    id: number
    updated: string
    released: string
    stores: Array<BuyBtnStores> | undefined
    description_raw: string | undefined
}

// export type BuyBtnStores = {
//     nameBtn: string
//     bgBtn: string
//     url: string
// }

function AboutGame() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const [gamesData, setGamesData] = useState<AboutGamePropsType>()
    const [nessessaryShots, setNessessaryShots] = useState([])
    const [mainShot, setMainShots] = useState<string>()

    const { id } = useParams()

    const URL: string = `${REACT_APP_API_ENDPOINT}/games/${id}?key=${REACT_APP_API_KEY}`
    const URL_SCREEN_SHOT: string = `${REACT_APP_API_ENDPOINT}/games/${id}/screenshots?key=${REACT_APP_API_KEY}`

    async function getGame(URL: string) {
        const response = await fetch(URL)
        const data = await response.json()
        setGamesData(data)
        console.log(gamesData)
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

            <Box sx={{ display: 'flex', gap: '20px' }}>
                <Box sx={{ flexBasis: '60%' }}>
                    <DescriptionSide
                        release={gamesData?.released}
                        gameTitle={gamesData?.name}
                        aboutGame={gamesData?.description_raw}
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
        </Box>
    )
}

export default AboutGame
