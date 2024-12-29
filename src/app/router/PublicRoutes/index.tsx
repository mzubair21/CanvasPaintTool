import DashboardRoutes from "../../pages/dashboard/routes"
import { IRouteType } from "../routes"

const PublicRoutes: IRouteType[] = [
  ...DashboardRoutes,
  {
    path: "*",
    component: (
      <div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    ),
    layout: "blank",
  },
]

export default PublicRoutes
