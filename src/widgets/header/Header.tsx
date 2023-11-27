import React, { useEffect, useRef, useState } from 'react'
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

import SearchResultWindow from './ui/SearchResultWindow'

type searchData = {
    count: number
    results: Array<any>
}

function Header() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const [isOpenWindow, setIsOpenWindow] = useState(false)
    const [searchParams, setSearchParams] = useState<string>('')
    const [searchData, setSearchData] = useState<searchData>()
    // const [handleClickOutsideTrigger, setHandleClickOutsideTrigger] =
    useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        setSearchParams('')
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleClickOutside = (event: any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsOpenWindow(false)
        }
    }

    // const URL_SEARCH = `https://rawg.io/api/games?page_size=20&search=${searchParams}&page=1&key=${REACT_APP_API_KEY}`

    const handleChange: ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = (event: any) => {
        let inputValue = event.target.value
        // console.log(inputValue)
        setSearchParams(inputValue)
        setIsOpenWindow(true)
        getGamesBySearch(inputValue)
    }

    const debounseHandleChange = debounce(handleChange, 1000)

    async function getGamesBySearch(inputValue: string) {
        const response = await fetch(
            `https://rawg.io/api/games?page_size=20&search=${inputValue}&page=1&key=${REACT_APP_API_KEY}`
        )
        const data = await response.json()
        console.log(data)
        setSearchData(data)
    }

    function handleCloseWindow(status: boolean) {
        setIsOpenWindow(false)
    }

    return (
        <Box>
            <Box
                ref={wrapperRef}
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
                        onChange={debounseHandleChange}
                        // value={searchParams}
                    />
                    {searchData &&
                        isOpenWindow === true &&
                        searchParams.length !== 0 && (
                            <SearchResultWindow
                                count={searchData.count}
                                results={searchData.results}
                                handleCloseWindow={handleCloseWindow}
                            />
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
