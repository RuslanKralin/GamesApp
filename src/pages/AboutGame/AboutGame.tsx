import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'

const API_KEY: string = 'f79ea1df23e047559c8017deb9351d65'
const URL: string = `https://api.rawg.io/api/games/3498?key=${API_KEY}`

type AboutGamePropsType = {
    name: string
    background_image: string
}

async function getGame(URL: string) {
    const response = await fetch(URL)
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data
}
getGame(URL)
function AboutGame(props: AboutGamePropsType) {
    const [gamesData, setGamesData] = useState<AboutGamePropsType>()

    useEffect(() => {
        async function fetchData() {
            const data = await getGame(URL)
            console.log(typeof data)
            setGamesData(data)
        }

        fetchData()
    }, [])
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '50px',
            }}
        >
            <Box sx={{ color: 'white' }}>
                <Typography variant="h3">{gamesData?.name}</Typography>
            </Box>
            <Box
                sx={{
                    width: '400px',
                    height: '400px',
                }}
            >
                <img src={gamesData?.background_image} alt="#" />
            </Box>
        </Box>
    )
}

export default AboutGame
