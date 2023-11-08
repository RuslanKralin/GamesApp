import React from 'react'

import { Button, Typography, Box } from '@mui/material'

import FolderCopyIcon from '@mui/icons-material/FolderCopy'

function BtnGroup(props: any) {
    return (
        <Box sx={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
            <Button
                variant="text"
                sx={{
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    width: '170px',
                    height: '50px',
                    bgcolor: 'white',
                    color: 'black',
                    '&:hover': {
                        bgcolor: 'grey',
                        transition: 'bgcolor 0.3s ease',
                    },
                }}
            >
                <Typography noWrap={false}>
                    Add to <br /> my game 654
                </Typography>
            </Button>
            <Button
                variant="text"
                sx={{
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    width: '140px',
                    height: '50px',
                    bgcolor: 'inherit',
                    color: 'white',
                    border: '1px solid white',
                    '&:hover': {
                        bgcolor: 'inherit',
                        border: '1px solid grey',
                        transition: 'border 0.3s ease',
                    },
                }}
            >
                <Typography noWrap={false}>
                    Add to <br /> wishlist 936
                </Typography>
            </Button>
            <Button
                variant="text"
                sx={{
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    width: '170px',
                    height: '50px',
                    // bgcolor: 'white',
                    color: 'white',
                    '&:hover': {
                        bgcolor: 'inherit',
                        color: 'grey',
                        transition: 'bgcolor 0.3s ease',
                    },
                }}
                endIcon={<FolderCopyIcon />}
            >
                <Typography noWrap={false}>
                    Save to <br /> collections
                </Typography>
            </Button>
        </Box>
    )
}

export default BtnGroup
