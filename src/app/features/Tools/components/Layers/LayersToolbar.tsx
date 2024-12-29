import React, { useEffect, useRef, useState } from "react"
import IconLayersMenu from "../../../../assets/Icons/IconLayersMenu"
import LayersPanel from "./LayersPanel"

interface ICoulumnFilterProps {}

function LayersToolbar({}: ICoulumnFilterProps) {
  const [isFilterMenuOpen, setFilterMenuOpen] = useState<boolean>(true)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleFilterMenu = () => setFilterMenuOpen(!isFilterMenuOpen)

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (
  //     dropdownRef.current &&
  //     !dropdownRef.current.contains(event.target as Node)
  //   ) {
  //     setFilterMenuOpen(false)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={` ${
          isFilterMenuOpen ? " border-secondary border-[1px] " : "border-none"
        }  rounded-md flex items-center justify-between border p-2 gap-3`}
        id="layers-menu-button"
        aria-expanded={isFilterMenuOpen}
        aria-haspopup="true"
        onClick={toggleFilterMenu}
      >
        <IconLayersMenu />
      </button>
      <div
        className={`${
          isFilterMenuOpen
            ? " translate-x-0 opacity-100 z-10"
            : " translate-x-[100%] opacity-0 z-[-1]"
        } transition-all delay-75 absolute top-[50px] right-[10px] w-max  rounded-md bg-dark-light-dark pt-1 shadow-lg focus:outline-none`}
        role="menu"
      >
        <LayersPanel
          handleClose={() => {
            setFilterMenuOpen(false)
          }}
        />
      </div>
    </div>
  )
}

export default LayersToolbar
