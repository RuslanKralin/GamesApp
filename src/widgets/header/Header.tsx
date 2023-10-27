import { Box, Button, TextField, InputAdornment, Link } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

function Header() {
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
                        fullWidth
                        sx={{
                            backgroundColor: '#3b3b3b',
                            color: 'White',
                            border: 'none',
                            borderRadius: '50px',
                            // height: '44px',// криво получается
                            '&::placeholder': {
                                color: 'red !important', //не работает
                            },
                            '&:hover': {
                                backgroundColor: 'white',
                                transition: 'background-color 0.3s ease', // Желаемый цвет фона при наведении
                            },
                            '&:focus': {
                                outline: 'none', // Убираем синюю обводку при активации
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
