import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Box } from '@mui/material'

import InfiniteScroll from 'react-infinite-scroll-component'

import { CardItem } from 'shared/ui'
import { CardItemBigSize } from 'shared/ui'
import GameFiltres from 'shared/ui/GameFiltres'

interface GamesListTitle {
    [key: string]: string
}

const GAMES_LIST_TITLE: GamesListTitle = {
    'recent-games': 'This week',
    'recent-games-past': 'Last 30 days',
    'recent-games-future': 'Next week',
    greatest: 'Best of the year',
    'greatest?year=2022': 'Popular in 2022',
    popular: 'All time top 250',
}

type Fn = () => Promise<void | undefined>

interface PageData {
    count: number
    next: string | null
    previous: null
    results: any[] // тут можно и подробнее в дальнейшем
    user_platforms: boolean
}

type DisplayOptinsType = 'lines' | 'bigSize'

async function getGames(URL: string) {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

function GameListPage() {
    const params = useParams()
    const { type } = params
    console.log(type)

    const title = type ? GAMES_LIST_TITLE[type] : ''

    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const URL: string = `${REACT_APP_API_ENDPOINT}/games/lists/${type}?discover=true&ordering=-added&page_size=20&page=1&key=${REACT_APP_API_KEY}`

    const [gamesData, setGamesData] = useState<PageData>({
        count: 0,
        next: null,
        previous: null,
        results: [],
        user_platforms: false,
    })

    const [displayOptions, setDisplayOptions] =
        useState<DisplayOptinsType>('lines')

    const displeyOptionsHandler = (option: DisplayOptinsType) => {
        setDisplayOptions(option)
    }

    const [correntPage, setCorrentPage] = useState(2)

    const fetchMoreData: Fn = async () => {
        const response = await fetch(`${URL}&page=${correntPage}`)
        const nextData = await response.json()

        setCorrentPage((prev) => prev + 1)
        const nextPageGames: [] = nextData.results
        setGamesData((prevData) => ({
            ...prevData,
            results: [...prevData.results, ...nextPageGames],
        }))
        // console.log(nextPageGames)
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getGames(URL)
            console.log(data)
            setGamesData(data)
            // console.log(data)
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
                {title}
            </Typography>

            <GameFiltres displeyOptionsHandler={displeyOptionsHandler} />

            {gamesData.next !== null ? (
                <>
                    {displayOptions === 'lines' && (
                        <InfiniteScroll
                            dataLength={gamesData.results.length}
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
                                }}
                            >
                                {gamesData.results.map((game: any) => (
                                    <CardItem
                                        key={game.id}
                                        title={game.name}
                                        backGroundImg={game.background_image}
                                        id={game.id}
                                        added_by_status={
                                            game.added_by_status?.owned
                                        }
                                        released={game.released}
                                        genres={game.genres}
                                        short_screenshots={
                                            game.short_screenshots
                                        }
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
                                dataLength={gamesData.results.length}
                                next={fetchMoreData}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                                endMessage={
                                    <p style={{ textAlign: 'center' }}>
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }
                            >
                                {gamesData.results &&
                                    gamesData.results.map(
                                        (game: any, index: number) => (
                                            <div
                                                key={game.id}
                                                style={{
                                                    marginBottom:
                                                        index !==
                                                        gamesData.results
                                                            .length -
                                                            1
                                                            ? '50px'
                                                            : 0,
                                                }}
                                            >
                                                <CardItemBigSize
                                                    title={game.name}
                                                    backGroundImg={
                                                        game.background_image
                                                    }
                                                    id={game.id}
                                                    added_by_status={
                                                        game.added_by_status
                                                            ?.owned
                                                    }
                                                    released={game.released}
                                                    genres={game.genres}
                                                    platforms={game.platforms}
                                                    short_screenshots={
                                                        game.short_screenshots
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
                            </InfiniteScroll>
                        </Box>
                    )}
                </>
            ) : (
                <>
                    {displayOptions === 'lines' && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '2rem',
                            }}
                        >
                            {gamesData.results.map((game: any) => (
                                <CardItem
                                    key={game.id}
                                    title={game.name}
                                    backGroundImg={game.background_image}
                                    id={game.id}
                                    added_by_status={
                                        game.added_by_status?.owned
                                    }
                                    released={game.released}
                                    genres={game.genres}
                                    short_screenshots={game.short_screenshots}
                                    parent_platforms={game.parent_platforms}
                                />
                            ))}
                        </Box>
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
                            {gamesData.results &&
                                gamesData.results.map(
                                    (game: any, index: number) => (
                                        <div
                                            key={game.id}
                                            style={{
                                                marginBottom:
                                                    index !==
                                                    gamesData.results.length - 1
                                                        ? '50px'
                                                        : 0,
                                            }}
                                        >
                                            <CardItemBigSize
                                                title={game.name}
                                                backGroundImg={
                                                    game.background_image
                                                }
                                                id={game.id}
                                                added_by_status={
                                                    game.added_by_status?.owned
                                                }
                                                released={game.released}
                                                genres={game.genres}
                                                platforms={game.platforms}
                                                short_screenshots={
                                                    game.short_screenshots
                                                }
                                            />
                                        </div>
                                    )
                                )}
                        </Box>
                    )}
                </>
            )}
        </Box>
    )
}

export default GameListPage
