import { lazy } from "react"
const Dashboard = lazy(() => import("./View"))

const DashboardRoutes = [
  {
    path: "/",
    component: <Dashboard />,
    layout: "default",
  },
]

export default DashboardRoutes
