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

import { SliderBigSize } from '.'

const linkStyle = {
    color: 'white',
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '28px',
    // marginBottom: '46px',
    cursor: 'pointer',
    '&:hover': {
        color: 'grey',
        transition: 'background-color 0.5s ease', // сделать плавнее
    },
}

const btnStyle = {
    width: '180px',
    height: '40px',
    color: 'white',
    backgroundColor: '#ffffff1a',
    fontSize: '10px',
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

function CardItemBigSize(props: CardItemPropsType) {
    const navigate = useNavigate()

    const [isHovered, setIsHovered] = useState(false)

    const iconStyle = {
        width: '30px',
        display: isHovered ? 'flex' : 'none',
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

    return (
        <Card
            sx={{
                position: 'relative',
                width: '700px',
                borderRadius: '10px',
                backgroundColor: '#ffffff12',
                height: '100%',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <SliderBigSize
                    short_screenshots={props.short_screenshots}
                    backGroundImg={props.backGroundImg}
                />
            ) : (
                <CardMedia sx={{ height: 350 }} image={props.backGroundImg} />
            )}
            <CardContent
                sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '20px',
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <WindowOutlinedIcon
                                sx={{ color: 'white', marginBottom: '5px' }}
                            />{' '}
                            <Button
                                sx={{
                                    all: 'unset', // НЕ ОТМЕНЯЕТ
                                    '&:hover': {
                                        backgroundColor: 'transparent', // Отменяет стиль при наведении
                                    },
                                    '&:active': {
                                        boxShadow: 'none', // Отменяет стиль при нажатии
                                    },
                                    marginBottom: '10px',
                                }}
                                onClick={() =>
                                    navigate(
                                        generatePath(ROUTES.ABOUT_GAME, {
                                            id: String(props.id),
                                        })
                                    )
                                }
                            >
                                <Link underline="none" sx={linkStyle}>
                                    {props.title}
                                </Link>
                            </Button>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <Button
                                    variant="text"
                                    sx={{
                                        paddingRight: '10px',
                                        color: 'white',
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
                                        sx={{
                                            marginRight: '3px',
                                            width: '20px',
                                        }}
                                    />
                                    {props.added_by_status}
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
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px',
                            }}
                        >
                            {' '}
                            <Button
                                sx={btnStyle}
                                endIcon={<ArrowForwardIosIcon />}
                            >
                                Show more like this
                            </Button>
                            <Button sx={btnStyle}>Hide this game</Button>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    {' '}
                    {/* Инфа */}
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                                mb: '10px',
                            }}
                        >
                            <Typography
                                sx={{ color: 'grey', fontSize: '12px' }}
                            >
                                Release date:
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                                {props.released}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                                mb: '10px',
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{ color: 'grey', fontSize: '12px' }}
                                >
                                    Genres:
                                </Typography>
                            </Box>
                            <Box>
                                {props.genres.map((g: any) => (
                                    <Link
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'white',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {g.name + ' ,'}
                                    </Link>
                                ))}
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                                mb: '10px',
                            }}
                        >
                            <Typography
                                sx={{ color: 'grey', fontSize: '12px' }}
                            >
                                Chart:
                            </Typography>
                            <Typography sx={{ color: 'white' }}>qwe</Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CardItemBigSize
