import { Box, Button, TextField, InputAdornment, Link } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

function Header() {
    return (
        <Box sx={{ padding: '30px' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ color: 'white', fontWeight: '900' }}>RAWG</Box>
                <Button
                    variant="outlined"
                    sx={{
                        background: 'white',
                        '&:hover': {
                            backgroundColor: 'white',
                        },
                    }}
                >
                    Rate top games
                </Button>
                <Box sx={{ width: '50rem' }}>
                    {' '}
                    <TextField
                        fullWidth
                        sx={{
                            backgroundColor: '#3b3b3b',
                            color: 'White',
                            border: 'none',
                            borderRadius: '50px',
                            '&::placeholder': {
                                color: 'red !important',
                            },
                            '&:hover': {
                                backgroundColor: 'white',
                                transition: 'background-color 0.3s ease', // Желаемый цвет фона при наведении
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
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Link href="#" underline="hover" sx={{ color: 'white' }}>
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
