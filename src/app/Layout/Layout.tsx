// import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import { Aside, Header } from 'widgets'
// import { url } from 'inspector'
// import { Home } from 'pages'
// import { DRAWER_WIDTH, ROUTES } from 'shared/consts'

type PropsType = {
    url: string
}

const Layout = (props: PropsType) => {
    return (
        <Box
        // sx={{
        //     background: `url('https://media.rawg.io/media/screenshots/3e4/3e4576a772b3df47bfc52b86e4cf7e03.jpg')`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     height: '100vh', // Устанавливаем высоту контейнера на 100% высоты окна

        // }}
        >
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
        </Box>
    )
}

export default Layout
