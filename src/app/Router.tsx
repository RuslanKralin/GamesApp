// import { observer } from 'mobx-react-lite'
import {
    Route,
    Navigate,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import { Home } from 'pages'
// import { ROUTES } from 'shared/consts'
import { ROUTES } from 'shared/consts/routes' // ошибка в ином случае, решить позже

import { Layout } from './Layout'
import { ContentSectionThisWeek } from 'widgets/contentSection'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={ROUTES.DEFAULT} element={<Layout />}>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route
                    path={ROUTES.THIS_WEEK}
                    element={<ContentSectionThisWeek />}
                />
            </Route>
        </>
    )
)

function Router() {
    return <RouterProvider router={router} />
}

export default Router
