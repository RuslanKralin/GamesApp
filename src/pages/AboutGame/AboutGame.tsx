import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Typography, Box, Link } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined'

const API_KEY: string = 'f79ea1df23e047559c8017deb9351d65'

interface AboutGamePropsType {
    name: string
    background_image: string
    // background_image_additional: string
    id: number
}

function AboutGame() {
    const [gamesData, setGamesData] = useState<AboutGamePropsType>()
    const [gameScreenShot, setGameScreenShot] = useState([])

    const { id } = useParams()

    const URL: string = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    // const URL_SCREEN_SHOT: string = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`

    async function getGame(URL: string) {
        const response = await fetch(URL)
        console.log(response)
        const data = await response.json()
        console.log(data)
        return data
    }
    getGame(URL)

    useEffect(() => {
        async function fetchData() {
            const data = await getGame(URL)
            console.log(typeof data)
            setGamesData(data)
        }

        fetchData()
    }, [URL])
    return (
        <Box
            sx={{
                marginLeft: '160px',
                marginRight: '130px',
                marginTop: '30px',
            }}
        >
            <Box sx={{ marginBottom: '30px' }}>
                <Link href="#" underline="none" sx={{ color: '#ffffff66' }}>
                    {'Home /'}
                </Link>
                <Link href="#" underline="none" sx={{ color: '#ffffff66' }}>
                    {' Games /'}
                </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
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
                            {'Nov 10, 2023'}
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
                <Box>
                    <Box
                        sx={{
                            width: '384px',
                            height: '216px',
                            borderRadius: '10px',
                            marginBottom: '15px',
                        }}
                    >
                        <img
                            src={gamesData?.background_image}
                            alt="#"
                            style={{ borderRadius: '5px' }}
                        />
                    </Box>
                    <Box
                        sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}
                    >
                        <Box
                            sx={{
                                width: '184px',
                                height: '102px',
                                borderRadius: '10px',
                            }}
                        >
                            <img
                                src={gamesData?.background_image}
                                alt="#"
                                style={{ borderRadius: '5px' }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: '184px',
                                height: '102px',
                                borderRadius: '10px',
                            }}
                        >
                            <img
                                src={gamesData?.background_image}
                                alt="#"
                                style={{ borderRadius: '5px' }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: '184px',
                                height: '102px',
                                borderRadius: '10px',
                            }}
                        >
                            <img
                                src={gamesData?.background_image}
                                alt="#"
                                style={{ borderRadius: '5px' }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: '184px',
                                height: '102px',
                                borderRadius: '10px',
                            }}
                        >
                            <img
                                src={gamesData?.background_image}
                                alt="#"
                                style={{ borderRadius: '5px' }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutGame
