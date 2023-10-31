import React from 'react'

import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined'
import { Button, Link } from '@mui/material'

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
    getId?: (id: string) => void
    // to: string
}

function CardItem(props: CardItemPropsType) {
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
                    sx={{ color: 'white', marginBottom: '20px' }}
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
                    onClick={() => {}}
                >
                    <Link underline="none" sx={linkStyle}>
                        {props.title}
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}

export default CardItem
