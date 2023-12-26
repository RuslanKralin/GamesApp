import React from 'react'
import { Box, Link, Typography } from '@mui/material'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

type LinkTypeProps = {
    name: string
    count: number
}

function BtnFilter(props: LinkTypeProps) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <Link sx={{ mr: '5px', fontSize: '24px', fontWeight: '700' }}>
                {props.name}
            </Link>
            <Typography sx={{ color: 'grey', fontSize: '24px' }}>
                {props.count}
            </Typography>
            <ArrowForwardIosIcon style={{ color: 'grey' }} />
        </Box>
    )
}

export default BtnFilter
