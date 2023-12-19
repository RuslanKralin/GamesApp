import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'

import { pageMetaInfo } from 'app/data'

import { TagGroup } from './ui/TagGroup'
import GridOnIcon from '@mui/icons-material/GridOn'
import WebAssetIcon from '@mui/icons-material/WebAsset'
import { CardItem, CardItemBigSize } from 'shared/ui'
import InfiniteScroll from 'react-infinite-scroll-component'

type Props = {
    id?: number
}

type Fn = () => void
type DisplayOptinsType = 'lines' | 'bigSize'
interface TypeGamesData {
    description: string
    results: never[]
    seo_h1: string
}

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

function GanresPage() {
    const { id } = useParams()
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    // const location = useLocation()
    // const currentURL = location.pathname

    // const actionPageMetaInfo = pageMetaInfo[0]
    // const strategyPageMetaInfo = pageMetaInfo[1]
    // const rpgPageMetaInfo = pageMetaInfo[2]
    // const shooterPageMetaInfo = pageMetaInfo[3]
    // const adventurePageMetaInfo = pageMetaInfo[4]
    // const puzzlePageMetaInfo = pageMetaInfo[5]
    // const racingPageMetaInfo = pageMetaInfo[6]
    // const sportsPageMetaInfo = pageMetaInfo[7]

    // const actionUrl = actionPageMetaInfo.url
    // const strategyUrl = strategyPageMetaInfo.url
    // const rpgUrl = rpgPageMetaInfo.url
    // const shooterUrl = shooterPageMetaInfo.url
    // const adventureUrl = adventurePageMetaInfo.url
    // const puzzleUrl = puzzlePageMetaInfo.url
    // const racingUrl = racingPageMetaInfo.url
    // const sportsUrl = sportsPageMetaInfo.url

    // const [url, setUrl] = useState('')

    // const getCurrentURL = () => {
    //     if (currentURL === '/action') {
    //         return actionUrl
    //     } else if (currentURL === '/strategy') {
    //         return strategyUrl
    //     } else if (currentURL === '/RPG') {
    //         return rpgUrl
    //     } else if (currentURL === '/shooter') {
    //         return shooterUrl
    //     } else if (currentURL === '/adventure') {
    //         return adventureUrl
    //     } else if (currentURL === '/puzzle') {
    //         return puzzleUrl
    //     } else if (currentURL === '/racing') {
    //         return racingUrl
    //     } else if (currentURL === '/sports') {
    //         return sportsUrl
    //     }

    //     return currentURL
    // }

    // const url = getCurrentURL()

    const URL: string = `https://rawg.io/api/games?genres=${id}&page=1&page_size=40&filter=true&comments=true&key=${REACT_APP_API_KEY}`
    // console.log(URL)

    const [displayOptions, setDisplayOptions] =
        useState<DisplayOptinsType>('lines')

    const [gamesData, setGamesData] = useState<TypeGamesData>({
        description: '',
        results: [],
        seo_h1: '',
    })
    // const [pageDataInfo, setPageDataInfo] = useState([]);

    const [correntPage, setCorrentPage] = useState(2)

    const fetchMoreData: Fn = async () => {
        const response = await fetch(
            `${URL}&key=${REACT_APP_API_KEY}&page=${correntPage}`
        )
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

            setGamesData(data)
            // console.log(data.results)
            // setPageDataInfo(data);
            console.log(gamesData.description)
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
                    {gamesData.seo_h1}
                </Typography>
                <Box>
                    <Button>qwe</Button>
                    <Button>qwe</Button>
                </Box>
            </Box>
            <Box>
                <Typography>
                    {gamesData.description.replace(/<\/?p>/g, '')}
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
                            justifyContent: 'space-between',
                        }}
                    >
                        {gamesData.results.map((game: any) => (
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
                        {gamesData.results.map((game: any, index: number) => (
                            <div
                                key={game.id}
                                style={{
                                    marginBottom:
                                        index !== gamesData.results.length - 1
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
