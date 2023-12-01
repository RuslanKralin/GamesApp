import { Box, Button, Typography, Link } from '@mui/material'

import React from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/consts/routes'

const linkStyle = {
    color: 'white',
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '28px',
    marginBottom: '16px',
    cursor: 'pointer',
    '&:hover': {
        color: 'grey',
        transition: 'background-color 0.5s ease', // сделать плавнее
    },
}
type SearchResultWindowType = {
    count: number
    results: Array<any>
    handleCloseWindow: (status: boolean) => void
}

function SearchResultWindow(props: SearchResultWindowType) {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                position: 'absolute',
                zIndex: 1000,
                top: '70px',
                display: 'flex',
                flexDirection: 'column',
                width: '60rem',
                backgroundColor: 'black',
                borderRadius: '20px',
                padding: '20px 15px',
            }}
        >
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '10px',
                        pb: '15px',
                    }}
                >
                    <Typography sx={{ color: 'white' }}>Games</Typography>
                    <Typography sx={{ color: 'grey' }}>
                        {props.count}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                }}
            >
                {props.results?.slice(0, 7).map((g: any) => (
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            style={{
                                width: '36px',
                                height: '47px',
                            }}
                            src={g.background_image}
                            alt="#"
                        />
                        <Button
                            sx={{
                                all: 'unset', // НЕ ОТМЕНЯЕТ
                                '&:hover': {
                                    backgroundColor: 'transparent', // Отменяет стиль при наведении
                                },
                                '&:active': {
                                    boxShadow: 'none', // Отменяет стиль при нажатии
                                },
                            }}
                            onClick={() => {
                                navigate(
                                    generatePath(ROUTES.ABOUT_GAME, {
                                        id: String(g.id),
                                    })
                                )
                                props.handleCloseWindow(false)
                            }}
                        >
                            <Link underline="none" sx={linkStyle}>
                                {g.name}
                            </Link>
                        </Button>
                    </Box>
                ))}
            </Box>
            <Box
                sx={{
                    border: '1px solid grey',
                    width: '100%',
                    margin: '20px 0',
                }}
            ></Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    pb: '15px',
                }}
            >
                <Typography sx={{ color: 'white' }}>Collections</Typography>
                <Typography sx={{ color: 'grey' }}>655</Typography>
            </Box>
        </Box>
    )
}

export default SearchResultWindow
