import React from "react"
import PaintToolbar from "../features/Tools/components/PaintToolbar"
import { useSelector } from "react-redux"
import { IRootState } from "../store"
import LayersToolbar from "../features/Tools/components/Layers/LayersToolbar"

function Navbar() {
  const { title } = useSelector((state: IRootState) => state.tools)
  return (
    <nav className="flex flex-wrap bg-dark w-full justify-between items-center p-4">
      <PaintToolbar />
      <h2 className="text-gray font-bold text-xs mx-6 sm:mr-[15%] sm:mx-6">
        {title}
      </h2>
      <LayersToolbar />
    </nav>
  )
}

export default Navbar
