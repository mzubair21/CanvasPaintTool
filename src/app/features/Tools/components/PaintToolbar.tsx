import React from "react"
import { Button } from "@mantine/core"
import IconBurgerMenu from "../../../assets/Icons/IconBurgerMenu"
import IconMoveMenu from "../../../assets/Icons/IconMoveMenu"
import IconPaintMenu from "../../../assets/Icons/IconPaintMenu"
import IconEraseMenu from "../../../assets/Icons/IconEraseMenu"
import IconCastleMenu from "../../../assets/Icons/IconCastleMenu"
import IconTextMenu from "../../../assets/Icons/IconTextMenu"
import IconBackMenu from "../../../assets/Icons/IconBackMenu"
import IconForwardMenu from "../../../assets/Icons/IconForwardMenu"
import { useDispatch } from "react-redux"
import { setTool } from "../../../slices/toolSlice"
import ToolMenuWithDropdown from "./ToolMenuWithDropdown"

const PaintToolbar = () => {
  const dispatch = useDispatch()
  const handleSelectMenu = (menu: string) => {
    dispatch(setTool(menu))
  }
  return (
    <div className="flex flex-row gap-4 p-4 ">
      <button className="focus:outline-none text-secondary">
        <IconBurgerMenu className="focus:outline-none text-secondary" />
      </button>
      <ToolMenuWithDropdown
        menu={<IconMoveMenu />}
        title=""
        icon={<IconMoveMenu />}
      />
      <button className="focus:outline-none text-secondary">
        <IconPaintMenu className="focus:outline-none text-secondary" />
      </button>
      <button className="focus:outline-none text-secondary">
        <IconEraseMenu className="focus:outline-none text-secondary" />
      </button>
      <button className="focus:outline-none text-secondary">
        <IconCastleMenu className="focus:outline-none text-secondary" />
      </button>
      <button className="focus:outline-none text-secondary">
        <IconTextMenu className="focus:outline-none text-secondary" />
      </button>
      <div className="flex flex-row gap-4 ml-4">
        <button className="focus:outline-none text-secondary">
          <IconBackMenu className="focus:outline-none text-secondary" />
        </button>
        <button className="focus:outline-none text-secondary">
          <IconForwardMenu className="focus:outline-none text-secondary" />
        </button>
      </div>
    </div>
  )
}

export default PaintToolbar
