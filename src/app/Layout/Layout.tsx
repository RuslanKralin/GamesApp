// import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'

import { Aside, Header } from 'widgets'
// import { DRAWER_WIDTH, ROUTES } from 'shared/consts'

const Layout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <Header />

            <Aside />

            <Outlet />
        </Box>
    )
}

export default Layout
