import React, { useEffect, useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import { CardItem } from 'shared/ui'

const API_KEY: string = 'f79ea1df23e047559c8017deb9351d65'
const URL_THIS_WEEK: string = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30`

async function getGames(URL: string) {
    const response = await fetch(URL_THIS_WEEK)
    const data = await response.json()
    return data
}

function LastDays() {
    const [gamesData, setGamesData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getGames(URL_THIS_WEEK)
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
                Last 30 days
            </Typography>

            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                <Button sx={{ color: 'white', backgroundColor: '#ffffff12' }}>
                    Filter:{' '}
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

export default LastDays
