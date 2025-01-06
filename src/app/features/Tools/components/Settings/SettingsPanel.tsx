import React, { useEffect, useState } from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import ErasePanel from "../Erase/ErasePanel"
import ImageSizePanel from "./ImageSizePanel"
import ExportPanel from "./ExportPanel"
import NewScenePanel from "./NewScenePanel"

function SettingsPanel({ handleClose }: { handleClose: () => void }) {
  const [menuVisible, setMenuVisible] = React.useState(false)
  const [menuPosition, setMenuPosition] = React.useState({ top: 0, left: 0 })
  const [selectedSetting, setSelectedSetting] = useState<string>()
  const handleSettingItemClick = (
    event: React.MouseEvent,
    menuType: string
  ) => {
    setSelectedSetting(menuType)
    if (menuVisible && selectedSetting == menuType) return setMenuVisible(false)
    const rect = (event.target as HTMLElement).getBoundingClientRect()
    setMenuPosition({
      top: menuType == "Export" ? 68 : rect.top,
      left:
        menuType == "Export"
          ? window.innerWidth < 1024
            ? -15
            : rect.left + rect.width
          : window.innerWidth < 768
          ? 80
          : rect.left + rect.width,
    })
    setMenuVisible(true)
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuVisible) {
        const target = event.target as HTMLElement
        if (
          !target.closest("[role='menu']") &&
          !target.closest("[role='menuitem']")
        ) {
          setMenuVisible(false)
        }
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [menuVisible])

  const renderPanel = () => {
    switch (selectedSetting) {
      case "ImageSize":
        return <ImageSizePanel handleClose={() => setMenuVisible(false)} />
      case "Save":
        return <NewScenePanel handleClose={() => setMenuVisible(false)} />
      case "Export":
        return <ExportPanel handleClose={() => setMenuVisible(false)} />
      default:
        return
    }
  }

  return (
    <>
      <div
        className={`${
          window.innerWidth < 768 ? "w-44" : "w-64"
        } text-gray px-3 flex flex-col gap-2`}
      >
        <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
          <button onClick={handleClose} className="text-xs">
            <IconArrow />
          </button>
          <h3 className="text-secondary w-full font-sm text-center font-semibold">
            Settings
          </h3>
        </div>

        <div className="flex flex-col gap-2 pb-4">
          <button
            onClick={(e) => {
              handleSettingItemClick(e, "Save")
            }}
            className=" bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2"
          >
            Save
          </button>
          <button
            onClick={(e) => {
              handleSettingItemClick(e, "Export")
            }}
            className="bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2"
          >
            Export
          </button>
          <button
            onClick={(e) => {
              handleSettingItemClick(e, "ImageSize")
            }}
            className="bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2"
          >
            Image Size
          </button>
          <button
            disabled
            className="disabled:pointer-events-none disabled:opacity-50 bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2"
          >
            Share
          </button>
          <button className="bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2">
            Close Editor
          </button>
        </div>
      </div>
      <div
        className={`${
          menuVisible
            ? "translate-x-0 opacity-100 z-10"
            : "-translate-x-[100%] opacity-0 z-[-1] pointer-events-none"
        } mb-8 transition-all delay-75 fixed rounded-md bg-dark-light-dark pt-1 shadow-sm border-dark-light border focus:outline-none`}
        style={{
          top: menuPosition.top - 70,
          left: menuPosition.left,
        }}
        role="menu"
      >
        {renderPanel()}
      </div>
    </>
  )
}

export default SettingsPanel
