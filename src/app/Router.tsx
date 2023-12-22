import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import { Layout } from './Layout'
import {
    AboutGame,
    Home,
    LastDays,
    ThisWeek,
    GenresPage,
    NextWeek,
} from 'pages'
import { ROUTES } from 'shared/consts/routes' // ошибка в ином случае, решить позже
import { Genres } from 'pages/Genres'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path={ROUTES.DEFAULT}
                element={
                    <Layout url="https://media.rawg.io/media/screenshots/3e4/3e4576a772b3df47bfc52b86e4cf7e03.jpg" />
                }
            >
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.THIS_WEEK} element={<ThisWeek />} />
                <Route path={ROUTES.ABOUT_GAME} element={<AboutGame />} />
                <Route path={ROUTES.LAST_DAYS} element={<LastDays />} />
                <Route path={ROUTES.NEXT_WEEK} element={<NextWeek />} />
                <Route path={ROUTES.GENRE} element={<GenresPage />} />
                <Route path={ROUTES.GENRES_PAGE} element={<Genres />} />
            </Route>
        </>
    )
)

function Router() {
    return <RouterProvider router={router} />
}

export default Router
