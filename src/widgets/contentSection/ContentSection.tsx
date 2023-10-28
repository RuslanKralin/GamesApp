import React, { useEffect, useState } from 'react'
import { Typography, Box, Button, Grid } from '@mui/material'
import { CardItem } from './ui'

const API_KEY: string = 'f79ea1df23e047559c8017deb9351d65'
const URL: string = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`

async function getGames(URL: string) {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

function ContentSection() {
    const [gamesData, setGamesData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getGames(URL)

            setGamesData(data.results)
        }

        fetchData()
    }, [])
    return (
        <Box>
            <Typography
                variant="h2"
                sx={{ color: 'white', fontWeight: '800', marginBottom: '5px' }}
            >
                New and trending
            </Typography>
            <Typography sx={{ color: 'white', marginBottom: '5px' }}>
                Based on player counts and release date
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                <Button sx={{ color: 'white', backgroundColor: '#ffffff12' }}>
                    Order by:{' '}
                </Button>
                <Button sx={{ color: 'white', backgroundColor: '#ffffff12' }}>
                    Platforms:{' '}
                </Button>
            </Box>
            <Grid container spacing={{ xs: 2, md: 28 }}>
                {gamesData.map((game: any) => (
                    <Grid item xs={2} sm={2} md={3}>
                        <CardItem
                            title={game.name}
                            backGroundImg={game.background_image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ContentSection
