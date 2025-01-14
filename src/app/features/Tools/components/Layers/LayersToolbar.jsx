import React, { useRef, useState } from "react"
import IconLayersMenu from "../../../../assets/Icons/IconLayersMenu"
import LayersPanel from "./LayersPanel"

function LayersToolbar({}) {
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(true)
  const dropdownRef = useRef(null)

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
          isFilterMenuOpen
            ? " border-secondary border-[1px] "
            : " border-[1px] border-transparent "
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
            ? " translate-x-0 opacity-100 z-[9]"
            : " translate-x-[100%] opacity-0 z-[-1]"
        } border bg-dark-light-dark border-white/25 transition-all delay-75 absolute top-[50px] right-[10px] w-max  rounded-md pt-1 shadow-lg focus:outline-none`}
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
