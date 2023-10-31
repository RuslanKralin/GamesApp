// import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import { Aside, Header } from 'widgets'
// import { Home } from 'pages'
// import { DRAWER_WIDTH, ROUTES } from 'shared/consts'

const Layout = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {' '}
                <Header />
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexBasis: '15%' }}>
                    <Aside />
                </Box>
                <Box sx={{ flexBasis: '85%' }}>
                    {/* наверно не правильно */}
                    {/* <Home /> */}
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}

export default Layout
