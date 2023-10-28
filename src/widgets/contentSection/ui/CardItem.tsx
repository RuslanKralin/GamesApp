import React from 'react'

import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined'

type CardItemPropsType = {
    title: string
    backGroundImg: string
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
            <CardContent>
                <WindowOutlinedIcon sx={{ color: 'white' }} />
                <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ color: 'white', fontWeight: '700' }}
                >
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardItem
