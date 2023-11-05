import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Typography, Box, Link, Button } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined'
import EditIcon from '@mui/icons-material/Edit'

const API_KEY: string = 'e1f2ed8b762a4f76ab4883d16cfec313'

interface AboutGamePropsType {
    name: string
    background_image: string
    // background_image_additional: string
    id: number
    updated: string
    released: string
}

function AboutGame() {
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
        // console.log(nessessaryShots)
        return nessessaryShots
    }

    useEffect(() => {
        getGame(URL)
        getGameScreenShots(URL_SCREEN_SHOT)
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
                            {gamesData?.released}
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
                            {gamesData?.name}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ flexBasis: '40%' }}>
                    <Box
                        sx={{
                            width: '384px',
                            height: '216px',
                            borderRadius: '10px',
                            marginBottom: '15px',
                        }}
                    >
                        <img
                            src={mainShot}
                            alt="#"
                            style={{ borderRadius: '5px' }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '15px',
                            marginBottom: '30px',
                        }}
                    >
                        {nessessaryShots &&
                            nessessaryShots.map((s: any) => (
                                <Box
                                    sx={{
                                        width: '184px',
                                        height: '102px',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <img
                                        src={s?.image}
                                        alt="#"
                                        style={{ borderRadius: '5px' }}
                                    />
                                </Box>
                            ))}
                    </Box>
                    <Button
                        variant="text"
                        fullWidth
                        sx={{
                            textTransform: 'capitalize',
                            bgcolor: 'white',
                            color: 'black',
                            padding: '15px 0',
                            marginBottom: '8px',
                            '&:hover': {
                                bgcolor: 'grey',
                                transition: 'bgcolor 0.3s ease',
                            },
                        }}
                        startIcon={<EditIcon />}
                    >
                        Edit the game info
                    </Button>
                    <Typography
                        sx={{
                            color: 'grey',
                            textAlign: 'center',
                            fontSize: '14px',
                        }}
                    >
                        Last Modified: {gamesData?.updated}
                    </Typography>
                    <Typography>Where to buy</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutGame
