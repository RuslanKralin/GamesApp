import React, { useEffect, useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import { default as CardItem } from '../../shared/ui/CardItem'

const API_KEY: string = 'f79ea1df23e047559c8017deb9351d65'
const URL: string = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`
// const URL_THIS_WEEK: string = "https://api.rawg.io/api/games/lists/recent-games?discover=true&key=c542e67aec3a4340908f9de9e86038af&ordering=-added&page=2&page_size=20"

async function getGames(URL: string) {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

function Home() {
    const [gamesData, setGamesData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getGames(URL)
            console.log(data)
            setGamesData(data.results)
        }

        fetchData()
    }, [])
    return (
        <Box>
            <Typography
                variant="h2"
                sx={{ color: 'white', fontWeight: '800', marginBottom: '10px' }}
            >
                New and trending
            </Typography>
            <Typography
                sx={{
                    color: 'white',
                    marginBottom: '20px',
                }}
            >
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

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                {gamesData.map((game: any) => (
                    <CardItem
                        title={game.name}
                        backGroundImg={game.background_image}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Home
