import React, { useState } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import { ROUTES } from 'shared/consts/routes'

import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Link,
    Box,
    Typography,
} from '@mui/material'
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined'
import AddIcon from '@mui/icons-material/Add'
import RedeemIcon from '@mui/icons-material/Redeem'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Slider from './Slider'

const linkStyle = {
    // color: 'white',
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

const btnStyle = {
    color: 'white',
    backgroundColor: '#ffffff1a',
    fontSize: '12px',
    justifyContent: 'space-between',
    '&:hover': {
        color: 'yellow',
        transition: 'background-color 0.5s ease',
        backgroundColor: '#ffffff1a',
    },
}

type CardItemPropsType = {
    title: string
    backGroundImg: string
    id: number
    added_by_status: number
    released: string
    genres: Array<string>
    short_screenshots: string[]
}

function CardItem(props: CardItemPropsType) {
    const navigate = useNavigate()

    const [isHovered, setIsHovered] = useState(false)

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

    const hoverStyle = {
        position: 'absolute',
        top: '88%',
        width: '280px',
        zIndex: 100,
        backgroundColor: '#202020',
        borderRadius: '5px',
        display: isHovered ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '0 10px 10px',
        '&:hover': {
            display: 'flex',
        },
    }

    return (
        <Box
            sx={{
                position: 'relative',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    zIndex: 100,
                    transform: 'scale(1.03)',
                },
            }}
        >
            <Card
                sx={{
                    width: '280px',
                    backgroundColor: '#202020',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered ? (
                    <Slider
                        short_screenshots={props.short_screenshots}
                        backGroundImg={props.backGroundImg}
                    />
                ) : (
                    <CardMedia
                        sx={{ height: 170 }}
                        image={props.backGroundImg}
                    />
                )}
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <WindowOutlinedIcon
                        sx={{ color: 'white', marginBottom: '10px' }}
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
                        onClick={() =>
                            navigate(
                                generatePath(ROUTES.ABOUT_GAME, {
                                    id: String(props.id),
                                })
                            )
                        }
                    >
                        <Link underline="none" sx={linkStyle} color={'primary'}>
                            {props.title}
                        </Link>
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            marginTop: '10px',
                            marginBottom: '20px',
                        }}
                    >
                        <Button
                            variant="text"
                            color="secondary"
                            sx={{
                                paddingRight: '10px',

                                width: '65px',
                                height: '30px',
                                bgcolor: '#ffffff1a',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: 'black',
                                },
                            }}
                        >
                            <AddIcon
                                sx={{ marginRight: '3px', width: '20px' }}
                            />
                            {props.added_by_status}
                        </Button>
                        <Box
                            sx={{
                                display: isHovered ? 'flex' : 'none',
                                gap: '10px',
                            }}
                        >
                            <Button
                                sx={{
                                    padding: 0,
                                    minWidth: 0,
                                    '& .MuiButton-label': {
                                        padding: 0,
                                    },
                                }}
                            >
                                <RedeemIcon sx={iconStyle} />
                            </Button>

                            <Button
                                sx={{
                                    padding: 0,
                                    minWidth: 0,
                                    '& .MuiButton-label': {
                                        padding: 0,
                                    },
                                }}
                            >
                                <MoreHorizIcon sx={iconStyle} />
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Box
                sx={hoverStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: '10px',
                    }}
                >
                    <Typography sx={{ color: 'grey', fontSize: '12px' }}>
                        Release date:
                    </Typography>
                    <Typography sx={{ color: 'white' }}>
                        {props.released}
                    </Typography>
                </Box>
                <Box sx={{ borderBottom: '1px solid grey', mb: '10px' }}></Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: '10px',
                    }}
                >
                    <Box>
                        <Typography sx={{ color: 'grey', fontSize: '12px' }}>
                            Genres:
                        </Typography>
                    </Box>
                    <Box>
                        {props.genres.map((g: any) => (
                            <Link
                                key={g.id}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'white',
                                    fontSize: '14px',
                                    '&:hover': {
                                        color: 'grey',
                                        transition:
                                            'background-color 0.5s ease',
                                    },
                                }}
                            >
                                {g.name + ' ,'}
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ borderBottom: '1px solid grey', mb: '10px' }}></Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: '10px',
                    }}
                >
                    <Typography sx={{ color: 'grey', fontSize: '12px' }}>
                        Chart:
                    </Typography>
                    <Typography sx={{ color: 'white' }}>qwe</Typography>
                </Box>
                <Box sx={{ borderBottom: '1px solid grey', mb: '10px' }}></Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Button sx={btnStyle} endIcon={<ArrowForwardIosIcon />}>
                        Show more like this
                    </Button>
                    <Button sx={btnStyle}>Hide this game</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default CardItem
