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
// import { SvgIcon, IconButton } from '@mui/material'
// @ts-ignore
import windows from 'shared/assets/icons/windows.svg'
// @ts-ignore
import apple from 'shared/assets/icons/apple.svg'
// @ts-ignore
import linux from 'shared/assets/icons/linux.svg'
// @ts-ignore
import mobile from 'shared/assets/icons/mobile.svg'
// @ts-ignore
import nintendo from 'shared/assets/icons/nintendo.svg'
// @ts-ignore
import playStation from 'shared/assets/icons/playStation.svg'
// @ts-ignore
import xbox from 'shared/assets/icons/xbox.svg'

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
interface platform {
    id: number
    slug: string
}

type CardItemPropsType = {
    title: string
    backGroundImg: string
    id: number
    added_by_status: number
    released: string
    genres: string[]
    short_screenshots: string[]
    parent_platforms: platform[]
    videoVampire: string
    videoStalker: string
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
        backgroundColor: 'background.card',
        borderRadius: '5px',
        display: isHovered ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '0 10px 10px',
        '&:hover': {
            display: 'flex',
        },
    }

    // console.log(props.parent_platforms)

    return (
        <Box
            sx={{
                position: 'relative',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    borderRadius: '5px',
                    zIndex: 100,
                    transform: 'scale(1.03)',
                },
            }}
        >
            <Card
                sx={{
                    width: '280px',
                    backgroundColor: 'background.card',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered && props.id !== 303576 ? (
                    <Slider
                        short_screenshots={props.short_screenshots}
                        backGroundImg={props.backGroundImg}
                    />
                ) : (
                    <CardMedia
                        sx={{ height: 170 }}
                        image={
                            !isHovered || props.id === 303576
                                ? props.backGroundImg
                                : undefined
                        }
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {isHovered && props.id === 303576 && (
                            <video src={props.videoVampire} autoPlay muted />
                        )}
                    </CardMedia>
                )}
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', gap: '5px', mb: '10px' }}>
                        {props.parent_platforms.map((p: any) => (
                            <>
                                {p.platform.slug === 'pc' && (
                                    <img
                                        alt="windows"
                                        src={windows}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                )}
                                {p.platform.slug === 'playstation' && (
                                    <img
                                        alt="playStation"
                                        src={playStation}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                )}
                                {p.platform.slug === 'xbox' && (
                                    <img
                                        alt="xbox"
                                        src={xbox}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                )}
                                {p.platform.slug === 'ios' && (
                                    <img
                                        alt="apple"
                                        src={apple}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                )}
                                {p.platform.slug === 'nintendo' && (
                                    <img
                                        alt="nintendo"
                                        src={nintendo}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                )}
                                {p.platform.slug === 'android' && (
                                    <img
                                        alt="mobile"
                                        src={mobile}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                )}
                                {p.platform.slug === 'linux' && (
                                    <img
                                        alt="linux"
                                        src={linux}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                )}
                            </>
                        ))}
                    </Box>

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
                            sx={{
                                color: 'white',
                                paddingRight: '10px',
                                width: '65px',
                                height: '30px',
                                backgroundColor: '#3b3b3b',
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
                    <Typography
                        sx={{ color: 'primary.cardInfo', fontSize: '12px' }}
                    >
                        Release date:
                    </Typography>
                    <Typography sx={{ color: 'primary.cardInfo' }}>
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
                        <Typography
                            sx={{ color: 'primary.cardInfo', fontSize: '12px' }}
                        >
                            Genres:
                        </Typography>
                    </Box>
                    <Box>
                        {props.genres.map((g: any, index: number) => (
                            <Link
                                key={g.id}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'primary.cardInfo',
                                    fontSize: '14px',
                                    '&:hover': {
                                        color: 'grey',
                                        transition:
                                            'background-color 0.5s ease',
                                    },
                                }}
                            >
                                {g.name}
                                {index !== props.genres.length - 1 && ', '}
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
                    <Typography
                        sx={{ color: 'primary.cardInfo', fontSize: '12px' }}
                    >
                        Chart:
                    </Typography>
                    <Typography sx={{ color: 'primary.cardInfo' }}>
                        qwe
                    </Typography>
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
