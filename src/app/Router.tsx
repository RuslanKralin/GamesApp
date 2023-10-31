// import { observer } from 'mobx-react-lite'
import {
    Route,
    // Navigate,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import { AboutGame, Home, ThisWeek } from 'pages'
// import { ROUTES } from 'shared/consts'
import { ROUTES } from 'shared/consts/routes' // ошибка в ином случае, решить позже

import { Layout } from './Layout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={ROUTES.DEFAULT} element={<Layout />}>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.THIS_WEEK} element={<ThisWeek />} />
                <Route
                    path={ROUTES.ABOUTGAME}
                    element={<AboutGame name="" background_image="" />}
                />
            </Route>
        </>
    )
)

function Router() {
    return <RouterProvider router={router} />
}

export default Router
