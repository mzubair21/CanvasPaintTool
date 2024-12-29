import { createSlice } from "@reduxjs/toolkit"

interface IToolsState {
  title: string
  selectedTool: string | null
}

const initialState: IToolsState = {
  title: "Image Name (unsaved)",
  selectedTool: null,
}

const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    setTool: (state, action) => {
      state.selectedTool = action.payload
    },
  },
})

export const { setTool } = toolsSlice.actions
export default toolsSlice.reducer
