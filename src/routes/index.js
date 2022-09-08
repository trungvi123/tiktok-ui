import { Following, Home, Upload,Profile }from '~/pages/';
import { DefaultLayout , HeaderOnly} from '~/components/layout';
import routes from '~/config/routeConfig'

const publicRoutes = [
    { path: routes.home, element: <Home/> },
    { path: routes.following, element: <Following/>},
    { path: routes.upload, element: <Upload/>},
    { path: routes.profile, element: <Profile/>},
]

const privateRoutes = []

export { publicRoutes, privateRoutes } 