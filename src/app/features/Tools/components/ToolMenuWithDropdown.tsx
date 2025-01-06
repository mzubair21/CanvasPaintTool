import { Checkbox } from "@mantine/core"
import React, { useEffect, useRef, useState } from "react"
import IconLayersMenu from "../../../assets/Icons/IconLayersMenu"

interface ICoulumnFilterProps {
  Menu: React.ComponentType<{ handleClose: () => void }>
  title: string
  icon: React.ReactNode
}

function ToolMenuWithDropdown({ Menu, title, icon }: ICoulumnFilterProps) {
  const [isFilterMenuOpen, setFilterMenuOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleFilterMenu = () => setFilterMenuOpen(!isFilterMenuOpen)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setFilterMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="static sm:relative" ref={dropdownRef}>
      <button
        className={` ${
          isFilterMenuOpen ? " border-secondary border-[1px] " : "border-none"
        }  rounded-md flex items-center justify-between border p-2 gap-3`}
        id={`${ToolMenuWithDropdown}-${Math.random()}-menu-button`}
        aria-expanded={isFilterMenuOpen}
        aria-haspopup="true"
        onClick={toggleFilterMenu}
      >
        {icon}
      </button>
      <div
        className={`${
          isFilterMenuOpen
            ? "translate-y-2 opacity-100 z-10"
            : "-translate-y-2 opacity-0 z-[-1]"
        }   border bg-dark-light-dark border-white/25 transition-all delay-75 absolute left-3 sm:left-0 w-max origin-top-right rounded-md  pt-1 shadow-lg focus:outline-none max-h-max overflow-y-visible overflow-x-visible`}
        role="menu"
      >
        <Menu
          handleClose={() => {
            setFilterMenuOpen(false)
          }}
        />
      </div>
    </div>
  )
}

export default ToolMenuWithDropdown
