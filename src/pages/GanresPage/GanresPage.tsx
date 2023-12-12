import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

import { TagGroup } from './ui/TagGroup'
import GridOnIcon from '@mui/icons-material/GridOn'
import WebAssetIcon from '@mui/icons-material/WebAsset'
import { CardItem, CardItemBigSize } from 'shared/ui'
import InfiniteScroll from 'react-infinite-scroll-component'

type Props = {
    pageTitle?: string
    description?: string
}
type Fn = () => void
type DisplayOptinsType = 'lines' | 'bigSize'

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

function GanresPage({ pageTitle, description }: Props) {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const URL: string = `https://rawg.io/api/games?genres=4&page=1&page_size=40&filter=true&comments=true&key=${REACT_APP_API_KEY}`

    const vampire_320 =
        'https://media.rawg.io/media/stories-320/c66/c6692dc6b3d737d6e483b8ce64390b96.mp4'

    const stalker_320 =
        'https://media.rawg.io/media/stories-320/771/771a8dc6c1a6ad44cb45ce88f7bad80a.mp4'

    const [displayOptions, setDisplayOptions] =
        useState<DisplayOptinsType>('lines')

    const [gamesData, setGamesData] = useState([])
    const [correntPage, setCorrentPage] = useState(2)

    const fetchMoreData: Fn = async () => {
        const response = await fetch(
            `https://rawg.io/api/games?genres=4&page=1&page_size=40&filter=true&comments=true&key=${REACT_APP_API_KEY}&page=${correntPage}`
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
            console.log(data.results)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                mt: '50px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h1" sx={{ fontWeight: '700' }}>
                    Action games
                </Typography>
                <Box>
                    <Button>qwe</Button>
                    <Button>qwe</Button>
                </Box>
            </Box>
            <Box>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae deleniti facere architecto, magni, sed optio rerum
                    iusto fugiat fugit pariatur facilis voluptatem hic laborum
                    vitae iste. Beatae repudiandae saepe quod. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quae deleniti facere
                    architecto, magni, sed optio rerum iusto fugiat fugit
                    pariatur facilis voluptatem hic laborum vitae iste. Beatae
                    repudiandae saepe quod. sit amet consectetur adipisicing
                    elit. Quae deleniti facere architecto, magni, sed optio
                    rerum iusto fugiat fugit pariatur facilis voluptatem hic
                    laborum vitae iste. Beatae repudiandae saepe quod.
                </Typography>
            </Box>
            <TagGroup />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: '30px',
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

export default GanresPage
