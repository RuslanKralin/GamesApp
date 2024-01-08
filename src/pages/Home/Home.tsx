import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'

import InfiniteScroll from 'react-infinite-scroll-component'

import { default as CardItem } from '../../shared/ui/CardItem'
import GameFiltres from 'shared/ui/GameFiltres'
import { CardItemBigSize } from 'shared/ui'
// import { useBoolState } from 'shared/hooks'

type DisplayOptinsType = 'lines' | 'bigSize'
type Fn = () => void

async function getGames(URL: string) {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

// next: "https://api.rawg.io/api/games?key=e1f2ed8b762a4f76ab4883d16cfec313&page=2"

function Home() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env
    const URL: string = `${REACT_APP_API_ENDPOINT}/games/lists/main?discover=true&ordering=-relevance&page_size=40&key=${REACT_APP_API_KEY}`

    const vampire_320 =
        'https://media.rawg.io/media/stories-320/c66/c6692dc6b3d737d6e483b8ce64390b96.mp4'

    const stalker_320 =
        'https://media.rawg.io/media/stories-320/771/771a8dc6c1a6ad44cb45ce88f7bad80a.mp4'

    const [displayOptions, setDisplayOptions] =
        useState<DisplayOptinsType>('lines')

    const displeyOptionsHandler = (option: DisplayOptinsType) => {
        setDisplayOptions(option)
    }

    const [gamesData, setGamesData] = useState([])

    const [correntPage, setCorrentPage] = useState(2)

    const fetchMoreData: Fn = async () => {
        const response = await fetch(
            `${REACT_APP_API_ENDPOINT}/games/lists/main?discover=true&ordering=-relevance&page_size=40&key=${REACT_APP_API_KEY}&page=${correntPage}`
        )
        const nextData = await response.json()

        setCorrentPage((prev) => prev + 1)
        const nextPageGames: [] = nextData.results
        setGamesData((prevData) => [...prevData, ...nextPageGames])
        // console.log(nextPageGames)
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getGames(URL)

            setGamesData(data.results)
            // console.log(data.results)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Box>
            <Typography
                variant="h2"
                color="primary"
                sx={{
                    // color: 'primary',
                    fontWeight: '800',
                    marginTop: '30px',
                    marginBottom: '20px',
                }}
            >
                New and trending
            </Typography>
            <Typography
                sx={{
                    color: 'primary',
                    marginBottom: '20px',
                }}
            >
                Based on player counts and release date
            </Typography>

            <GameFiltres displeyOptionsHandler={displeyOptionsHandler} />

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
                                videoVampire={vampire_320}
                                videoStalker={stalker_320}
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

export default Home
