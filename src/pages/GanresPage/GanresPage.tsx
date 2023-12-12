import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { TagGroup } from './ui/TagGroup'

type Props = {
    pageTitle?: string
    description?: string
}

function GanresPage({ pageTitle, description }: Props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                mt: '50px',
                ml: '20px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h1" sx={{ fontWeight: '700' }}>
                    Action games
                </Typography>
                <Box>
                    <Button>qwe</Button>
                    <Button>qwe</Button>
                </Box>
            </Box>
            <Box>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae deleniti facere architecto, magni, sed optio rerum
                    iusto fugiat fugit pariatur facilis voluptatem hic laborum
                    vitae iste. Beatae repudiandae saepe quod. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quae deleniti facere
                    architecto, magni, sed optio rerum iusto fugiat fugit
                    pariatur facilis voluptatem hic laborum vitae iste. Beatae
                    repudiandae saepe quod. sit amet consectetur adipisicing
                    elit. Quae deleniti facere architecto, magni, sed optio
                    rerum iusto fugiat fugit pariatur facilis voluptatem hic
                    laborum vitae iste. Beatae repudiandae saepe quod.
                </Typography>
            </Box>
            <TagGroup />
        </Box>
    )
}

export default GanresPage
