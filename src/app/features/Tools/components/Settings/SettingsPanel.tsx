import React, { useEffect } from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import ErasePanel from "../Erase/ErasePanel"
import ImageSizePanel from "./ImageSizePanel"

function SettingsPanel({ handleClose }: { handleClose: () => void }) {
  const [menuVisible, setMenuVisible] = React.useState(false)
  const [menuPosition, setMenuPosition] = React.useState({ top: 0, left: 0 })
  const handleSettingItemClick = (event: React.MouseEvent) => {
    if (menuVisible) return setMenuVisible(false)
    const rect = (event.target as HTMLElement).getBoundingClientRect()
    setMenuPosition({ top: rect.top, left: rect.left + rect.width })
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
          <button className="bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2">
            Save
          </button>
          <button className="bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2">
            Export
          </button>
          <button
            onClick={handleSettingItemClick}
            className="bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2"
          >
            Image Size
          </button>
          <button className="bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2">
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
        } transition-all delay-75 fixed rounded-md bg-dark-light-dark pt-1 shadow-sm border-dark-light border focus:outline-none`}
        style={{
          top: menuPosition.top - 70,
          right: window.innerWidth < 768 ? -180 : -260,
        }}
        role="menu"
      >
        <ImageSizePanel handleClose={() => setMenuVisible(false)} />
      </div>
    </>
  )
}

export default SettingsPanel
