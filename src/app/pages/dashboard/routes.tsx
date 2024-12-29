import { lazy } from "react"
import { IRouteType } from "../../router/routes"
const Dashboard = lazy(() => import("./View"))

const DashboardRoutes: IRouteType[] = [
  {
    path: "/",
    component: <Dashboard />,
    layout: "default",
  },
]

export default DashboardRoutes
