import React, { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import "./global.css"
// Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css"

import { Provider } from "react-redux"
import store from "./app/store/index"
const App = React.lazy(() => import("./app/App"))
import { MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"
import Loader from "./app/shared/components/loaders/Loader"
import { RouterProvider } from "react-router-dom"
import router from "./app/router"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader show={true} />}>
        <MantineProvider>
          <NotificationsProvider>
            <App>
              <RouterProvider router={router} />
            </App>
          </NotificationsProvider>
        </MantineProvider>
      </Suspense>
    </Provider>
  </StrictMode>
)
