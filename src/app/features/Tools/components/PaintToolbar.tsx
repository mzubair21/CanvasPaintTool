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
import MovePanel from "./Move/MovePanel"
import PaintPanel from "./Paint/PaintPanel"
import ErasePanel from "./Erase/ErasePanel"
import ObjectPanel from "./Object/ObjectPanel"
import TextPanel from "./Text/TextPanel"
import SettingsPanel from "./Settings/SettingsPanel"

const PaintToolbar = () => {
  const dispatch = useDispatch()
  const handleSelectMenu = (menu: string) => {
    dispatch(setTool(menu))
  }
  return (
    <div className="flex flex-wrap flex-row gap-4 ">
      <ToolMenuWithDropdown
        Menu={SettingsPanel}
        title=""
        icon={
          <span className="p-1">
            <IconBurgerMenu />
          </span>
        }
      />

      <ToolMenuWithDropdown Menu={MovePanel} title="" icon={<IconMoveMenu />} />
      <ToolMenuWithDropdown
        Menu={PaintPanel}
        title=""
        icon={<IconPaintMenu />}
      />
      <ToolMenuWithDropdown
        Menu={ErasePanel}
        title=""
        icon={<IconEraseMenu />}
      />
      <ToolMenuWithDropdown
        Menu={ObjectPanel}
        title=""
        icon={<IconCastleMenu />}
      />
      <ToolMenuWithDropdown Menu={TextPanel} title="" icon={<IconTextMenu />} />
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
