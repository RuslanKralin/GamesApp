import React, { useEffect, useState } from 'react'

import { Box, Link, Typography } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CommonItemCard } from 'shared/ui'

// import { ROUTES } from 'shared/consts/routes'
type Fn = () => void

interface Game {
    id: number
    name: string
    added: number
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
    image_background: string
    games: Array<Game>
    games_count: number
}

interface Data {
    results: Result[]
}

async function getData(URL: string): Promise<Data> {
    const response = await fetch(URL)
    const data: Data = await response.json()
    return data
}

function Platforms() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const URL: string = `https://rawg.io/api/platforms?page=1&page_size=20&key=${REACT_APP_API_KEY}`

    const [data, setData] = useState<Data>({ results: [] })

    const [correntPage, setCorrentPage] = useState(2)

    const fetchMoreData: Fn = async () => {
        const response = await fetch(
            `https://api.rawg.io/api/platforms?key=${REACT_APP_API_KEY}&page=${correntPage}&page_size=20`
        )
        const nextData = await response.json()

        setCorrentPage((prev) => prev + 1)
        const nextPageGames: [] = nextData.results
        if (Array.isArray(nextPageGames)) {
            setData((prevData) => ({
                results: [...prevData.results, ...nextPageGames],
            }))
        }
    }

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
                    Platforms
                </Typography>
            </Box>

            <InfiniteScroll
                dataLength={data.results.length}
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
                    {data.results &&
                        data.results.map((p) => (
                            <CommonItemCard
                                name={p.name}
                                image_background={p.image_background}
                                games={p.games}
                                games_count={p.games_count}
                            />
                        ))}
                </Box>
            </InfiniteScroll>
        </Box>
    )
}

export default Platforms
