import React from 'react'

import { Box, Button, Typography, Link, Divider } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

const titleLinkStyle = {
    color: 'primary',
    fontSize: '24px',
    fontWeight: '700',
    '&:hover': {
        color: 'grey',
        transition: 'color 0.3s ease',
    },
}

const gameLinkStyle = {
    color: 'primary',
    fontSize: '14px',
    // fontWeight: '700',
    '&:hover': {
        color: 'grey',
        transition: 'color 0.3s ease',
    },
}

const btnStyle = {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    width: '120px',
    borderRadius: '5px',
    p: '10px 0',
    '&:hover': {
        color: 'grey',
        backgroundColor: 'white',
        transition: 'color backgroundColor 0.3s ease',
    },
}

const darkOverlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backgroundImage:
        'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
    borderRadius: '7px',
}

type Game = {
    id: number
    name: string
    added: number
}

type GenreItemPropsType = {
    name: string
    games_count: number
    image_background: string
    games: Array<Game>
}

function GenreItem(props: GenreItemPropsType) {
    return (
        <Box
            sx={{
                flexBasis: '23%',
                height: '290px',
                backgroundImage: `url(${props.image_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '7px',
                position: 'relative', // Добавлено для позиционирования затемняющего слоя
            }}
        >
            {/* Затемняющий слой */}
            <Box sx={darkOverlayStyle} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: '30px',
                    mb: '30px',
                }}
            >
                <Typography sx={{ mb: '5px', zIndex: 3 }}>
                    <Link href="#" sx={titleLinkStyle}>
                        {props.name}
                    </Link>
                </Typography>

                <Button sx={btnStyle}>Follow</Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: '0 20px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        zIndex: 3,
                        mb: '5px',
                    }}
                >
                    <Typography sx={{ fontWeight: '700' }}>
                        Popular items
                    </Typography>
                    <Typography>{props.games_count}</Typography>
                </Box>
                <Box sx={{ mb: '15px' }}>
                    <Divider
                        style={{ background: 'grey', height: '2px' }} // переделать
                        variant="fullWidth"
                    />
                </Box>

                <Box
                    sx={{ display: 'flex', flexDirection: 'column', zIndex: 3 }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Link href="#" sx={gameLinkStyle}>
                            {props.games[0]?.name.length > 20
                                ? `${props.games[0]?.name.substring(0, 20)}...`
                                : props.games[0]?.name}
                        </Link>
                        <Box sx={{ display: 'flex' }}>
                            {' '}
                            <Typography>{props.games[0]?.added}</Typography>
                            <PersonIcon sx={{ width: '18px' }} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Link href="#" sx={gameLinkStyle}>
                            {props.games[1]?.name.length > 20
                                ? `${props.games[1]?.name.substring(0, 20)}...`
                                : props.games[1]?.name}
                        </Link>
                        <Box sx={{ display: 'flex' }}>
                            {' '}
                            <Typography>{props.games[1]?.added}</Typography>
                            <PersonIcon sx={{ width: '18px' }} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Link href="#" sx={gameLinkStyle}>
                            {props.games[2]?.name.length > 20
                                ? `${props.games[2]?.name.substring(0, 20)}...`
                                : props.games[2]?.name}
                        </Link>
                        <Box sx={{ display: 'flex' }}>
                            {' '}
                            <Typography>{props.games[2]?.added}</Typography>
                            <PersonIcon sx={{ width: '18px' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default GenreItem
