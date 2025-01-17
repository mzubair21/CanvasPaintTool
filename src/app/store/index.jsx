import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import toolsSlice from "../slices/toolSlice"

export const getState = () => store.getState()

const rootReducer = combineReducers({
  tools: toolsSlice,
})

const store = configureStore({
  // Add the API reducer to the store
  reducer: rootReducer,
  // Add the middleware to the store
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

// Optional: Set up listeners for refetching on focus/refocus/etc.
setupListeners(store.dispatch)

export default store
