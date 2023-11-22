import React, { useEffect, useState } from 'react'
import { ChangeEventHandler } from 'react'
import {
    Box,
    Button,
    TextField,
    InputAdornment,
    Link,
    debounce,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

function Header() {
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    const [searchParams, setSearchParams] = useState('')

    const URL_SEARCH = `${REACT_APP_API_ENDPOINT}/games?key=${REACT_APP_API_KEY}/search=${searchParams}`
    // console.log(URL_SEARCH)

    const handleChange: ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = (event: any) => {
        let param = event.currentTarget.value
        setSearchParams(param)
        // console.log('request' + searchParams)
        debounseSearch()
    }

    const debounseSearch = debounce(
        () => console.log('request' + searchParams),
        5000
    )

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
                <Box sx={{ width: '60rem', marginRight: '30px' }}>
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
                        value={searchParams}
                    />
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
