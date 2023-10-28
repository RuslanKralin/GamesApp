import React from 'react'

// import Grid from '@mui/material/Grid'
import { Aside } from 'widgets'
import { ContentSection } from 'widgets/contentSection'
import { Box } from '@mui/material'

function MainSection() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexBasis: '15%' }}>
                <Aside />
            </Box>
            <Box sx={{ flexBasis: '85%' }}>
                <ContentSection />
            </Box>
        </Box>
    )
}

export default MainSection
