import React, { useEffect, useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import GridOnIcon from '@mui/icons-material/GridOn'
import WebAssetIcon from '@mui/icons-material/WebAsset'

import { default as CardItem } from '../../shared/ui/CardItem'
import { CardItemBigSize } from 'shared/ui'
import { useBoolState } from 'shared/hooks'

type DisplayOptinsType = 'lines' | 'bigSize'
type Fn = () => void

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

// next: "https://api.rawg.io/api/games?key=e1f2ed8b762a4f76ab4883d16cfec313&page=2"

function Home() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env
    const URL: string = `${REACT_APP_API_ENDPOINT}/games?key=${REACT_APP_API_KEY}`

    const [displayOptions, setDisplayOptions] =
        useState<DisplayOptinsType>('lines')

    const [gamesData, setGamesData] = useState([])

    const [correntPage, setCorrentPage] = useState(1)

    const fetchMoreData: Fn = async () => {
        const response = await fetch(
            `${REACT_APP_API_ENDPOINT}/games?key=${REACT_APP_API_KEY}&page=${correntPage}`
        )
        const nextData = await response.json()

        setCorrentPage((prev) => prev + 1)
        const nextPageGames: [] = nextData.results
        setGamesData((prevData) => [...prevData, ...nextPageGames])
        console.log(nextPageGames)
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getGames(URL)

            setGamesData(data.results)
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
                            onClick={() => setDisplayOptions('lines')}
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
                                />
                            </div>
                        ))}
                    </InfiniteScroll>
                </Box>

                // <Box
                //     sx={{
                //         display: 'flex',
                //         gap: '30px',
                //         flexDirection: 'column',
                //         alignItems: 'center',
                //         marginLeft: 'auto',
                //         marginRight: 'auto',
                //     }}
                // >
                //     {gamesData.map((game: any) => (
                //         <CardItemBigSize
                //             key={game.id}
                //             title={game.name}
                //             backGroundImg={game.background_image}
                //             id={game.id}
                //             added_by_status={game.added_by_status.owned}
                //             released={game.released}
                //             genres={game.genres}
                //             short_screenshots={game.short_screenshots}
                //         />
                //     ))}
                // </Box>
            )}
        </Box>
    )
}

export default Home
