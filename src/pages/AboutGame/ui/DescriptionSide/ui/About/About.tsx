import React from 'react'

import { Typography, Box } from '@mui/material'

function BtnGroup(props: any) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: '10px' }}>
                <Typography
                    variant="h5"
                    sx={{ color: 'white', fontWeight: '800' }}
                >
                    About
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: 'white' }}>
                    {props.aboutGame}
                </Typography>
            </Box>
        </Box>
    )
}

export default BtnGroup
