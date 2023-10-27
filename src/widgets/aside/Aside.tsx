import React from 'react'

import { Box, Typography, Link } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import FastForwardIcon from '@mui/icons-material/FastForward'

const linkStyle = {
    color: 'white',
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '28px',
    marginBottom: '16px',
    '&:hover': {
        color: 'grey',
        transition: 'background-color 0.5s ease', // сделать плавнее
    },
}

const iconStyle = {
    color: 'white',
    border: '1px',
    padding: '1px',
    borderRadius: '3px',
    backgroundColor: '#3b3b3b',
    cursor: 'pointer',
    '&:hover': {
        color: 'black',
        transition: 'background-color 0.5s ease', // сделать плавнее
        backgroundColor: 'white',
    },
}

function Aside() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '50px',
            }}
        >
            <Link href="#" underline="none" sx={linkStyle}>
                Home
            </Link>
            <Link href="#" underline="none" sx={linkStyle}>
                Reviews
            </Link>
            <Box>
                <Typography
                    variant="h5"
                    sx={{
                        color: 'white',
                        fontWeight: '800',
                        fontSize: '24px',
                        lineHeight: '28px',
                        marginBottom: '16px',
                    }}
                >
                    New Releases
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <StarIcon sx={iconStyle} />

                        <Link
                            underline="none"
                            sx={{ color: 'white', cursor: 'pointer' }}
                        >
                            Last 30 days
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <LocalFireDepartmentIcon sx={iconStyle} />
                        <Link
                            underline="none"
                            sx={{ color: 'white', cursor: 'pointer' }}
                        >
                            This week
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <FastForwardIcon sx={iconStyle} />
                        <Link
                            underline="none"
                            sx={{ color: 'white', cursor: 'pointer' }}
                        >
                            Next week
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <Typography sx={iconStyle}>{'  '}31</Typography>
                        <Link
                            underline="none"
                            sx={{ color: 'white', cursor: 'pointer' }}
                        >
                            Next week
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Aside
