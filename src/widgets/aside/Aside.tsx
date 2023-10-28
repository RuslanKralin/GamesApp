import React from 'react'

import { Box, Typography, Link } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import FastForwardIcon from '@mui/icons-material/FastForward'
import DateRangeIcon from '@mui/icons-material/DateRange'

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
    width: '30px',
    height: '30px',
    color: 'white',
    border: '1px',
    padding: '1px',
    borderRadius: '5px',
    backgroundColor: '#3b3b3b',
    cursor: 'pointer',
    '&:hover': {
        color: 'black',
        transition: 'background-color 0.5s ease',
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
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '18px',
                            }}
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
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '18px',
                            }}
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
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '18px',
                            }}
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
                        <DateRangeIcon sx={iconStyle} />

                        <Link
                            underline="none"
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '18px',
                            }}
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
