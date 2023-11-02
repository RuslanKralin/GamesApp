import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'

const API_KEY: string = 'f79ea1df23e047559c8017deb9351d65'

interface AboutGamePropsType {
    name: string
    background_image: string
    // background_image_additional: string
    id: number
}

function AboutGame() {
    const [gamesData, setGamesData] = useState<AboutGamePropsType>()

    const { id } = useParams()

    const URL: string = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`

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
