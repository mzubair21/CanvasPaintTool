import { ReactNode, lazy } from "react"
import {
  Route,
  RouteObject,
  Routes,
  createRoutesFromElements,
} from "react-router-dom"
import PublicRoutes from "./PublicRoutes"
import DefaultLayout from "../layout/DefaultLayout"

export interface IRouteType {
  path: string
  component: ReactNode
  permission?: string
  layout: "default" | "blank"
}

const routes: IRouteType[] = [...PublicRoutes]

const elementRoutes: RouteObject[] = createRoutesFromElements(
  <Route>
    {routes.map((route, index) => (
      <Route
        key={index}
        {...route}
        element={
          route.layout == "default" ? (
            <DefaultLayout>{route.component}</DefaultLayout>
          ) : (
            <> {route.component}</>
          )
        }
      />
    ))}
  </Route>
)

export { elementRoutes }
