import React from "react"
import PaintToolbar from "../features/Tools/components/PaintToolbar"
import { Button } from "@mantine/core"
import { useSelector } from "react-redux"
import { IRootState } from "../store"
import IconLayersMenu from "../assets/Icons/IconLayersMenu"
import LayersToolbar from "../features/Tools/components/Layers/LayersToolbar"

function Navbar() {
  const { title } = useSelector((state: IRootState) => state.tools)
  return (
    <nav className="flex bg-dark w-full justify-between items-center">
      <PaintToolbar />
      <h2 className="text-gray font-bold text-xs">{title}</h2>
      <LayersToolbar />
    </nav>
  )
}

export default Navbar
