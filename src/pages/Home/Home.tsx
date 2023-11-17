import React, { useEffect, useState } from 'react'
import { Typography, Box, Button } from '@mui/material'

import GridOnIcon from '@mui/icons-material/GridOn'
import WebAssetIcon from '@mui/icons-material/WebAsset'

import { default as CardItem } from '../../shared/ui/CardItem'

// import { HoverCardItem } from 'shared/ui'

const iconStyle = {
    border: '1px grey',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: '#ffffff12',
    padding: '5px',
    width: '50px',
    height: '50px',
}

async function getGames(URL: string) {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

function Home() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env
    const URL: string = `${REACT_APP_API_ENDPOINT}/games?key=${REACT_APP_API_KEY}`

    const [gamesData, setGamesData] = useState([])
    // console.log(gamesData)
    useEffect(() => {
        async function fetchData() {
            const data = await getGames(URL)
            // console.log(data)
            setGamesData(data.results)
            // console.log(data.results[0].added_by_status.owned)
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px',
                }}
            >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Button
                        sx={{ color: 'white', backgroundColor: '#ffffff12' }}
                    >
                        Order by:{' '}
                    </Button>
                    <Button
                        sx={{ color: 'white', backgroundColor: '#ffffff12' }}
                    >
                        Platforms:{' '}
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ color: 'grey', marginRight: '20px' }}>
                        Display options:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Button
                            sx={{
                                padding: 0,
                                minWidth: 0,
                                '& .MuiButton-label': {
                                    padding: 0,
                                },
                            }}
                        >
                            <GridOnIcon style={iconStyle} />
                        </Button>
                        <Button
                            sx={{
                                padding: 0,
                                minWidth: 0,
                                '& .MuiButton-label': {
                                    padding: 0,
                                },
                            }}
                        >
                            <WebAssetIcon style={iconStyle} />
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'space-between',
                }}
            >
                {gamesData.map((game: any) => (
                    <CardItem
                        key={game.id}
                        title={game.name}
                        backGroundImg={game.background_image}
                        id={game.id}
                        added_by_status={game.added_by_status.owned}
                        released={game.released}
                        genres={game.genres}
                        short_screenshots={game.short_screenshots}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Home
