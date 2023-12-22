import React, { useEffect, useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CardItem } from 'shared/ui'

import { CardItemBigSize } from 'shared/ui'
// import GameFiltres from 'shared/ui/GameFiltres'
import GridOnIcon from '@mui/icons-material/GridOn'
import WebAssetIcon from '@mui/icons-material/WebAsset'

// const URL_THIS_WEEK: string = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2023-11-01,2023-12-01`

// сравним URL страниц
// https://rawg.io/api/games/lists/recent-games-past?discover=true&ordering=-added&page_size=20&page=1&key=  LAST 30 DAYS
// https://rawg.io/api/games/lists/recent-games?discover=true&ordering=-added&page_size=20&page=1&key=       THIS WEEK
// https://rawg.io/api/games/lists/recent-games-future?discover=true&ordering=-added&page_size=20&page=1&key= NEXT WEEK
// https://rawg.io/api/games/lists/greatest?discover=true&ordering=-added&page_size=20&page=1&key=            BEST OF THE YEAR
// https://rawg.io/api/games/lists/greatest?year=2022&discover=true&ordering=-added&page_size=20&page=1&key=  POPULAR IN 2022
// https://rawg.io/api/games/lists/popular?discover=true&&page_size=20&page=1&key=                            ALL TIME TOP 250

const iconStyle = {
    border: '1px grey',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: '#ffffff12',
    padding: '5px',
    width: '50px',
    height: '50px',
}
type Fn = () => void

type DisplayOptinsType = 'lines' | 'bigSize'
async function getGames(URL: string) {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

function LastDays() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const URL: string = `${REACT_APP_API_ENDPOINT}/games/lists/recent-games-past?discover=true&ordering=-added&page_size=20&page=1&key=${REACT_APP_API_KEY}`

    const [gamesData, setGamesData] = useState([])

    const [displayOptions, setDisplayOptions] =
        useState<DisplayOptinsType>('lines')

    const [correntPage, setCorrentPage] = useState(2)

    const fetchMoreData: Fn = async () => {
        const response = await fetch(`${URL}&page=${correntPage}`)
        const nextData = await response.json()

        setCorrentPage((prev) => prev + 1)
        const nextPageGames: [] = nextData.results
        setGamesData((prevData) => [...prevData, ...nextPageGames])
        console.log(nextPageGames)
    }

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
                Last 30 days
            </Typography>
            {/* <GameFiltres /> */}
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
                        sx={{
                            color: 'primary',
                            backgroundColor: 'background.btn',
                            '&:hover': {
                                backgroundColor: 'background.btnHover',
                                transition: 'backgroundColor 0.3s ease',
                            },
                        }}
                    >
                        Order by:{' '}
                    </Button>
                    <Button
                        sx={{
                            color: 'primary',
                            backgroundColor: 'background.btn',
                            '&:hover': {
                                backgroundColor: 'background.btnHover',
                                transition: 'backgroundColor 0.3s ease',
                            },
                        }}
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
                                backgroundColor: 'background.btn',
                                padding: 0,
                                minWidth: 0,
                                '& .MuiButton-label': {
                                    padding: 0,
                                },
                                '&:hover': {
                                    backgroundColor: 'background.btnHover',
                                    transition: 'backgroundColor 0.3s ease',
                                },
                            }}
                            onClick={() => setDisplayOptions('lines')}
                        >
                            <GridOnIcon style={iconStyle} />
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: 'background.btn',
                                padding: 0,
                                minWidth: 0,
                                '& .MuiButton-label': {
                                    padding: 0,
                                },
                                '&:hover': {
                                    backgroundColor: 'background.btnHover',
                                    transition: 'backgroundColor 0.3s ease',
                                },
                            }}
                            onClick={() => setDisplayOptions('bigSize')}
                        >
                            <WebAssetIcon style={iconStyle} />
                        </Button>
                    </Box>
                </Box>
            </Box>

            {displayOptions === 'lines' && (
                <InfiniteScroll
                    dataLength={gamesData.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
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
                                parent_platforms={game.parent_platforms}
                            />
                        ))}
                    </Box>
                </InfiniteScroll>
            )}

            {displayOptions === 'bigSize' && (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    <InfiniteScroll
                        dataLength={gamesData.length}
                        next={fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        {gamesData.map((game: any, index: number) => (
                            <div
                                key={game.id}
                                style={{
                                    marginBottom:
                                        index !== gamesData.length - 1
                                            ? '50px'
                                            : 0,
                                }}
                            >
                                <CardItemBigSize
                                    title={game.name}
                                    backGroundImg={game.background_image}
                                    id={game.id}
                                    added_by_status={game.added_by_status.owned}
                                    released={game.released}
                                    genres={game.genres}
                                    short_screenshots={game.short_screenshots}
                                    platforms={game.platforms}
                                />
                            </div>
                        ))}
                    </InfiniteScroll>
                </Box>
            )}
        </Box>
    )
}

export default LastDays
