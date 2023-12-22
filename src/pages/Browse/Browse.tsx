import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BrowseItem, BtnFilter } from './ui'

interface CardInfo {
    name: string
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

function Browse() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const URL: string = `https://rawg.io/api/browse?short=false&key=${REACT_APP_API_KEY}`

    const [data, setData] = useState<Data>({ results: [] })

    useEffect(() => {
        async function fetchData() {
            const data = await getData(URL)

            setData(data)
            console.log(data.results[0].items[0].name)
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
                    Browse
                </Typography>
            </Box>

            <Box>
                {data.results.length > 0 && (
                    <BtnFilter
                        name={data.results[0].name}
                        count={data.results[0].count}
                    />
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                    }}
                >
                    <BrowseItem />
                    {/* {platformArray.map((g: any) => (
                    ))} */}
                    {/* <BrowseItem />
          <BrowseItem />
          <BrowseItem />
          <BrowseItem /> */}
                </Box>
            </Box>
        </Box>
    )
}

export default Browse
