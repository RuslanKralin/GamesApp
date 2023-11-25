import React, { useEffect, useState } from 'react'
import { ChangeEventHandler } from 'react'
import {
    Box,
    Button,
    TextField,
    InputAdornment,
    Link,
    debounce,
    Typography,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import { ROUTES } from 'shared/consts/routes'
import { generatePath, useNavigate } from 'react-router-dom'

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

type Response = {
    count: number
    results: []
}

function Header() {
    const navigate = useNavigate()

    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const [isOpenWindow, setIsOpenWindow] = useState(false)
    const [searchParams, setSearchParams] = useState('')
    const [searchData, setSearchData] = useState<Response>()

    const debounseSearch = debounce(() => getGamasBySearch(URL_SEARCH), 2000)

    const handleChange: ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = (event: any) => {
        let inputValue = event.target.value
        setSearchParams(inputValue)
        setIsOpenWindow(true)
        // console.log(inputValue)
        // console.log(searchParams)
        debounseSearch()
    }

    // useEffect(() => {
    //     console.log(searchParams) // Выполнить операции с актуальным значением searchParams
    // }, [searchParams])

    const URL_SEARCH = `https://rawg.io/api/games?page_size=20&search=${searchParams}&page=1&key=${REACT_APP_API_KEY}`

    async function getGamasBySearch(URL: string) {
        const response = await fetch(URL_SEARCH)
        const data = await response.json()
        console.log(data)
        setSearchData(data)
    }

    // useEffect(() => {}, [URL_SEARCH])

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        color: 'white',
                        fontWeight: '900',
                        letterSpacing: '3px',
                        fontSize: '18px',
                        marginRight: '40px',
                    }}
                >
                    RAWG
                </Box>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{
                        background: 'white',
                        marginRight: '20px',
                        '&:hover': {
                            backgroundColor: 'white',
                        },
                    }}
                >
                    Rate top games
                </Button>
                <Box
                    sx={{
                        width: '60rem',
                        marginRight: '30px',
                        position: 'relative',
                    }}
                >
                    {' '}
                    <TextField
                        type="search"
                        fullWidth
                        sx={{
                            backgroundColor: '#3b3b3b',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50px',
                            '&:hover': {
                                backgroundColor: 'white',
                                transition: 'background-color 0.3s ease',
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                {
                                    borderColor: 'transparent', // Убираем цвет обводки при активации
                                },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input':
                                {
                                    boxShadow: 'none', // Убираем тень при активации
                                },
                        }}
                        variant="outlined"
                        placeholder="Search all you need"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon
                                        sx={{
                                            color: 'grey',
                                            '&:hover': {
                                                color: 'black',
                                            },
                                        }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                        // value={searchParams}
                    />
                    {searchData && isOpenWindow === true && (
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
                                    <Typography sx={{ color: 'white' }}>
                                        Games
                                    </Typography>
                                    <Typography sx={{ color: 'grey' }}>
                                        {searchData?.count}
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
                                {searchData?.results
                                    .slice(0, 7)
                                    .map((g: any) => (
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
                                                        backgroundColor:
                                                            'transparent', // Отменяет стиль при наведении
                                                    },
                                                    '&:active': {
                                                        boxShadow: 'none', // Отменяет стиль при нажатии
                                                    },
                                                }}
                                                onClick={() => {
                                                    navigate(
                                                        generatePath(
                                                            ROUTES.ABOUT_GAME,
                                                            { id: String(g.id) }
                                                        )
                                                    )
                                                    setIsOpenWindow(false)
                                                }}
                                            >
                                                <Link
                                                    underline="none"
                                                    sx={linkStyle}
                                                >
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
                                <Typography sx={{ color: 'white' }}>
                                    Collections
                                </Typography>
                                <Typography sx={{ color: 'grey' }}>
                                    655
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '10px',
                        fontWeight: '600',
                    }}
                >
                    <Link
                        href="#"
                        underline="hover"
                        sx={{ color: 'white', marginRight: '10px' }}
                    >
                        LOG IN
                    </Link>
                    <Link href="#" underline="hover" sx={{ color: 'white' }}>
                        SIGN UP
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
