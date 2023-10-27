import React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined'

function CardItem() {
    return (
        <Card
            sx={{
                maxWidth: '300px',
                borderRadius: '10px',
                backgroundColor: '#ffffff12',
            }}
        >
            <CardMedia
                sx={{ height: 170 }}
                image="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/f56710bd-85c3-49b8-9260-2fa8a3d07c01/600x900"
                // title="green iguana"
            />
            <CardContent>
                <WindowOutlinedIcon sx={{ color: 'white' }} />
                <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ color: 'white', fontWeight: '700' }}
                >
                    Mortal Combat
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardItem
