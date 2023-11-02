import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import { Layout } from './Layout'
import { AboutGame, Home, ThisWeek } from 'pages'
import { ROUTES } from 'shared/consts/routes' // ошибка в ином случае, решить позже

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={ROUTES.DEFAULT} element={<Layout />}>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.THIS_WEEK} element={<ThisWeek />} />
                <Route path={ROUTES.ABOUT_GAME} element={<AboutGame />} />
            </Route>
        </>
    )
)

function Router() {
    return <RouterProvider router={router} />
}

export default Router
