import React, { useState } from 'react'

import { Box, Typography, Link, Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import FastForwardIcon from '@mui/icons-material/FastForward'
import DateRangeIcon from '@mui/icons-material/DateRange'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import AssessmentIcon from '@mui/icons-material/Assessment'
import Diversity1Icon from '@mui/icons-material/Diversity1'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import DownloadIcon from '@mui/icons-material/Download'
import FolderCopyIcon from '@mui/icons-material/FolderCopy'
import ComputerIcon from '@mui/icons-material/Computer'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { ROUTES } from 'shared/consts/routes'
import { Ganres } from './ui/Ganres'

const titleStyle = {
    color: 'primary',
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '28px',
    marginBottom: '16px',
}

const linkTitleStyle = {
    color: 'primary',
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '28px',
    marginBottom: '16px',
    '&:hover': {
        color: 'grey',
        transition: 'background-color 0.5s ease', // сделать плавнее
    },
}

const linkSubStyle = {
    color: 'primary',
    cursor: 'pointer',
    fontSize: '18px',
}

const linkItemSytle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '&:hover': {
        // Стили, применяемые при наведении на компонент Box
        '& svg': {
            color: 'black',
            transition: 'background-color 0.5s ease',
            backgroundColor: 'white',
        },
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
    const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

    // const [url, setUrl] = useState('')

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '50px',
            }}
        >
            <Link
                href={ROUTES.HOME}
                underline="none"
                sx={linkTitleStyle}
                // color="primary"
            >
                Home
            </Link>
            <Link href="#" underline="none" sx={linkTitleStyle}>
                Reviews
            </Link>
            <Box sx={{ marginBottom: '30px' }}>
                <Typography variant="h5" sx={titleStyle}>
                    New Releases
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Box sx={linkItemSytle}>
                        <StarIcon sx={iconStyle} />
                        <Link
                            underline="none"
                            href={ROUTES.THIS_WEEK}
                            sx={linkSubStyle}
                        >
                            Last 30 days
                        </Link>
                    </Box>

                    <Box sx={linkItemSytle}>
                        <LocalFireDepartmentIcon sx={iconStyle} />
                        <Link
                            underline="none"
                            href={ROUTES.THIS_WEEK}
                            sx={linkSubStyle}
                        >
                            This week
                        </Link>
                    </Box>
                    <Box sx={linkItemSytle}>
                        <FastForwardIcon sx={iconStyle} />
                        <Link underline="none" sx={linkSubStyle}>
                            Next week
                        </Link>
                    </Box>
                    <Box sx={linkItemSytle}>
                        <DateRangeIcon sx={iconStyle} />

                        <Link underline="none" sx={linkSubStyle}>
                            Release calendar
                        </Link>
                    </Box>
                </Box>
            </Box>
            {/* БЛОК TOP */}
            <Box sx={{ marginBottom: '30px' }}>
                <Typography variant="h5" sx={titleStyle}>
                    Top
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Box sx={linkItemSytle}>
                        <EmojiEventsIcon sx={iconStyle} />

                        <Link
                            underline="none"
                            href={ROUTES.LAST_DAYS}
                            sx={linkSubStyle}
                        >
                            Best of the year
                        </Link>
                    </Box>
                    <Box sx={linkItemSytle}>
                        <AssessmentIcon sx={iconStyle} />
                        <Link
                            underline="none"
                            href={ROUTES.THIS_WEEK}
                            sx={linkSubStyle}
                        >
                            Popular in 2022
                        </Link>
                    </Box>
                    <Box sx={linkItemSytle}>
                        <Diversity1Icon sx={iconStyle} />
                        <Link underline="none" sx={linkSubStyle}>
                            All the time top 250
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Link href="#" underline="none" sx={linkTitleStyle}>
                All Games
            </Link>

            <Link href="#" underline="none" sx={linkTitleStyle}>
                Browse
            </Link>
            <Box sx={{ marginBottom: '30px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Box sx={linkItemSytle}>
                        <SportsEsportsIcon sx={iconStyle} />

                        <Link
                            underline="none"
                            href={ROUTES.LAST_DAYS}
                            sx={linkSubStyle}
                        >
                            Platforms
                        </Link>
                    </Box>
                    <Box sx={linkItemSytle}>
                        <DownloadIcon sx={iconStyle} />
                        <Link
                            underline="none"
                            href={ROUTES.THIS_WEEK}
                            sx={linkSubStyle}
                        >
                            Stores
                        </Link>
                    </Box>
                    <Box sx={linkItemSytle}>
                        <FolderCopyIcon sx={iconStyle} />
                        <Link underline="none" sx={linkSubStyle}>
                            Collections
                        </Link>
                    </Box>
                </Box>
            </Box>

            <Link href="#" underline="none" sx={linkTitleStyle}>
                Platforms
            </Link>
            <Box sx={{ marginBottom: '30px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Box sx={linkItemSytle}>
                        <ComputerIcon sx={iconStyle} />

                        <Link
                            underline="none"
                            href={ROUTES.LAST_DAYS}
                            sx={linkSubStyle}
                        >
                            PC
                        </Link>
                    </Box>
                    <Box sx={linkItemSytle}>
                        <SportsEsportsIcon sx={iconStyle} />
                        <Link
                            underline="none"
                            href={ROUTES.THIS_WEEK}
                            sx={linkSubStyle}
                        >
                            Play Station 4
                        </Link>
                    </Box>
                    <Box sx={linkItemSytle}>
                        <FolderCopyIcon sx={iconStyle} />
                        <Link underline="none" sx={linkSubStyle}>
                            Xbox One
                        </Link>
                    </Box>
                </Box>
            </Box>

            {/* GANRES BLOCK */}
            <Ganres />
        </Box>
    )
}

export default Aside
