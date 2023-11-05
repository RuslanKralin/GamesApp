import React, { useEffect, useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import { default as CardItem } from '../../shared/ui/CardItem'

const API_KEY: string = 'e1f2ed8b762a4f76ab4883d16cfec313'
const URL: string = `https://api.rawg.io/api/games?key=${API_KEY}`

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
                sx={{
                    color: 'white',
                    fontWeight: '800',
                    marginTop: '30px',
                    marginBottom: '20px',
                }}
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
                        key={game.id}
                        title={game.name}
                        backGroundImg={game.background_image}
                        id={game.id}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Home
