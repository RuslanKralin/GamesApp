import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GenreItem } from './ui'

async function getGenres(URL: string) {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

function Genres() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const URL: string = `https://rawg.io/api/genres?page=1&page_size=20&key=${REACT_APP_API_KEY}`

    const [genresData, setGenresData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getGenres(URL)

            setGenresData(data.results)
            console.log(data.results)
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
                Genres
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    // justifyContent: 'space-between',
                    gap: '30px',
                }}
            >
                {genresData.map((g: any) => (
                    <GenreItem
                        name={g.name}
                        games_count={g.games_count}
                        image_background={g.image_background}
                        games={g.games}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Genres
