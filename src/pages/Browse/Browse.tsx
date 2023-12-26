
import React, { useEffect, useState } from 'react'

import { Box, Link, Typography } from '@mui/material'
import { BtnFilter } from './ui'
import { ROUTES } from 'shared/consts/routes'
import { CommonItemCard } from 'shared/ui'

interface Game {
    id: number
    name: string
    added: string
}
interface CardInfo {
    name: string
    image_background: string
    games: Array<Game>
    image: string
}
interface Result {
    name: string
    count: number
    items: CardInfo[]
}

interface Data {
    results: Result[]
}

async function getData(URL: string): Promise<Data> {
    const response = await fetch(URL)
    const data: Data = await response.json()
    return data
}

async function getCollections(URL: string): Promise<Data> {
    const response = await fetch(URL)
    const data: Data = await response.json()
    return data
}

function Browse() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const URL: string = `https://rawg.io/api/browse?short=false&key=${REACT_APP_API_KEY}`
    const COLLECTIONS_URL = `https://rawg.io/api/collections/lists/popular?page=1&page_size=20&key=${REACT_APP_API_KEY}`

    const [data, setData] = useState<Data>({ results: [] })
    const [collections, setCollections] = useState<Data>({ results: [] })

    useEffect(() => {
        async function fetchData() {
            const data = await getData(URL)

            setData(data)
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

    

                gap: '30px',

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
                    Browse
                </Typography>
            </Box>



            <Box sx={{ mb: '20px' }}>
                {data.results.length > 0 && (
                    <Box sx={{ mb: '30px' }}>
                        <Link href={ROUTES.PLATFIRM_PAGE} underline="none">
                            <BtnFilter
                                name={data.results[0].name}
                                count={data.results[0].count}
                            />
                        </Link>
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                    }}
                >
                    {data.results &&
                        data.results[0] &&
                        data.results[0].items &&
                        data.results[0].items
                            .slice(0, 4)
                            .map((g: any) => (
                                <CommonItemCard
                                    name={g.name}
                                    image_background={g.image_background}
                                    games={g.games}
                                    games_count={g.games_count}
                                />
                            ))}
                </Box>
            </Box>

            <Box sx={{ mb: '20px' }}>
                {data.results.length > 0 && (
                    <Box sx={{ mb: '30px' }}>
                        <Link href={ROUTES.GENRES_PAGE} underline="none">
                            <BtnFilter
                                name={data.results[1].name}
                                count={data.results[1].count}
                            />
                        </Link>
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                    }}
                >
                    {data.results &&
                        data.results[1] &&
                        data.results[1].items &&
                        data.results[1].items
                            .slice(0, 4)
                            .map((g: any) => (
                                <CommonItemCard
                                    name={g.name}
                                    image_background={g.image_background}
                                    games={g.games}
                                    games_count={g.games_count}
                                />
                            ))}
                </Box>
            </Box>

            <Box sx={{ mb: '20px' }}>
                {data.results.length > 0 && (
                    <Box sx={{ mb: '30px' }}>
                        <BtnFilter
                            name={data.results[2].name}
                            count={data.results[2].count}
                        />
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                    }}
                >
                    {data.results &&
                        data.results[2] &&
                        data.results[2].items &&
                        data.results[2].items
                            .slice(0, 4)
                            .map((g: any) => (
                                <CommonItemCard
                                    name={g.name}
                                    image_background={g.image_background}
                                    games={g.games}
                                    games_count={g.games_count}
                                />
                            ))}
                </Box>
            </Box>

            <Box sx={{ mb: '20px' }}>
                {data.results.length > 0 && (
                    <Box sx={{ mb: '30px' }}>
                        <BtnFilter
                            name={data.results[3].name}
                            count={data.results[3].count}
                        />
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                    }}
                >
                    {data.results &&
                        data.results[3] &&
                        data.results[3].items &&
                        data.results[3].items
                            .slice(0, 4)
                            .map((g: any) => (
                                <CommonItemCard
                                    name={g.name}
                                    image_background={g.image_background}
                                    games={g.games}
                                    games_count={g.games_count}
                                    image={g.image}
                                />
                            ))}
                </Box>
            </Box>

            <Box sx={{ mb: '20px' }}>
                {data.results.length > 0 && (
                    <Box sx={{ mb: '30px' }}>
                        <BtnFilter
                            name={data.results[4].name}
                            count={data.results[4].count}
                        />
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                    }}
                >
                    {data.results &&
                        data.results[4] &&
                        data.results[4].items &&
                        data.results[4].items
                            .slice(0, 4)
                            .map((g: any) => (
                                <CommonItemCard
                                    name={g.name}
                                    image_background={g.image_background}
                                    games={g.games}
                                    games_count={g.games_count}
                                />
                            ))}
                </Box>
            </Box>

            <Box sx={{ mb: '20px' }}>
                {data.results.length > 0 && (
                    <Box sx={{ mb: '30px' }}>
                        <BtnFilter
                            name={data.results[5].name}
                            count={data.results[5].count}
                        />
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                    }}
                >
                    {data.results &&
                        data.results[5] &&
                        data.results[5].items &&
                        data.results[5].items
                            .slice(0, 4)
                            .map((g: any) => (
                                <CommonItemCard
                                    name={g.name}
                                    image_background={g.image_background}
                                    games={g.games}
                                    games_count={g.games_count}
                                />
                            ))}
                </Box>
            </Box>

            <Box sx={{ mb: '20px' }}>
                {data.results.length > 0 && (
                    <Box sx={{ mb: '30px' }}>
                        <BtnFilter
                            name={data.results[6].name}
                            count={data.results[6].count}
                        />
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                    }}
                >
                    {data.results &&
                        data.results[6] &&
                        data.results[6].items &&
                        data.results[6].items
                            .slice(0, 4)
                            .map((g: any) => (
                                <CommonItemCard
                                    name={g.name}
                                    image_background={g.image_background}
                                    games={g.games}
                                    games_count={g.games_count}
                                />
                            ))}
                </Box>
            </Box>

        </Box>
    )
}

export default Browse
