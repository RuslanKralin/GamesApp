import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography, Box, Button } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CardItem } from 'shared/ui'
import { URL_PAGES } from 'shared/consts/urlPages'

import { CardItemBigSize } from 'shared/ui'
// import GameFiltres from 'shared/ui/GameFiltres'
import GridOnIcon from '@mui/icons-material/GridOn'
import WebAssetIcon from '@mui/icons-material/WebAsset'

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

function Common() {
    const location = useLocation()
    const currentURL = location.pathname
    // console.log(currentURL)

    const [url, setUrl] = useState<string>('')

    useEffect(() => {
        function createUrl(currentURL: string) {
            if (currentURL === '/page/thisWeek') {
                setUrl(URL_PAGES.THIS_WEEK)
            } else if (currentURL === '/page/lastDays') {
                setUrl(URL_PAGES.LAST_DAYS)
            } else if (currentURL === '/page/nextWeek') {
                setUrl(URL_PAGES.NEXT_WEEK)
            }
        }

        createUrl(currentURL)
        console.log(URL)
    }, [currentURL])

    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const URL: string = `${url}${REACT_APP_API_KEY}`
    // console.log(URL)

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
            {currentURL === '/page/thisWeek' && (
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        fontWeight: '800',
                        marginTop: '30px',
                        marginBottom: '20px',
                    }}
                >
                    This week
                </Typography>
            )}
            {currentURL === '/page/lastDays' && (
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        fontWeight: '800',
                        marginTop: '30px',
                        marginBottom: '20px',
                    }}
                >
                    Last days
                </Typography>
            )}
            {currentURL === '/page/nextWeek' && (
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        fontWeight: '800',
                        marginTop: '30px',
                        marginBottom: '20px',
                    }}
                >
                    Next week
                </Typography>
            )}

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

export default Common
