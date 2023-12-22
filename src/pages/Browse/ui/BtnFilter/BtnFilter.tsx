import React from 'react'
import { Box, Link, Typography } from '@mui/material'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

type LinkTypeProps = {
    name: string
    count: number
}

function BtnFilter(props: LinkTypeProps) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Link sx={{ mr: '5px' }}>{props.name}</Link>
            <Typography sx={{ color: 'grey' }}>{props.count}</Typography>
            <ArrowForwardIosIcon style={{ color: 'grey' }} />
        </Box>
    )
}

export default BtnFilter
