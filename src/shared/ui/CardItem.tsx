import React from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import { ROUTES } from 'shared/consts/routes'

import { Card, CardContent, CardMedia, Button, Link } from '@mui/material'
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined'
import AddIcon from '@mui/icons-material/Add'

const linkStyle = {
    color: 'white',
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

type CardItemPropsType = {
    title: string
    backGroundImg: string
    id: number
    added_by_status: number
    // added_by_status: any
    // owned: any
}

function CardItem(props: CardItemPropsType) {
    const navigate = useNavigate()
    return (
        <Card
            sx={{
                width: '280px',
                borderRadius: '10px',
                backgroundColor: '#ffffff12',
                height: '100%',
            }}
        >
            <CardMedia sx={{ height: 170 }} image={props.backGroundImg} />
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <WindowOutlinedIcon
                    sx={{ color: 'white', marginBottom: '10px' }}
                />
                <Button
                    sx={{
                        all: 'unset', // Отменяет все настраиваемые стили
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
                    <Link underline="none" sx={linkStyle}>
                        {props.title}
                    </Link>
                </Button>
                <Button
                    variant="text"
                    sx={{
                        marginTop: '10px',
                        paddingRight: '10px',
                        color: 'white',
                        width: '65px',
                        height: '30px',
                        bgcolor: '#ffffff1a',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: 'black', // Отменяет стиль при наведении
                        },
                    }}
                >
                    <AddIcon sx={{ marginRight: '3px', width: '20px' }} />
                    {props.added_by_status}
                </Button>
            </CardContent>
        </Card>
    )
}

export default CardItem
