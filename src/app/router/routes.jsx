import { Route, createRoutesFromElements } from "react-router-dom"
import PublicRoutes from "./PublicRoutes"
import DefaultLayout from "../layout/DefaultLayout"

const routes = [...PublicRoutes]

const elementRoutes = createRoutesFromElements(
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
