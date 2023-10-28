import React from 'react'

import Grid from '@mui/material/Grid'
import { Aside } from 'widgets'
import { ContentSection } from 'widgets/contentSection'

function MainSection() {
    return (
        <Grid container spacing={2} sx={{ marginTop: '30px' }}>
            <Grid item xs={2}>
                <Aside />
            </Grid>
            <Grid item xs={8}>
                <ContentSection />
            </Grid>
        </Grid>
    )
}

export default MainSection
