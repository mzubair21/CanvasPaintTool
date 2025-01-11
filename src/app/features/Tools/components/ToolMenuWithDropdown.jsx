import React, { useEffect, useRef, useState } from "react"

function ToolMenuWithDropdown({ Menu, title, icon }) {
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleFilterMenu = () => setFilterMenuOpen(!isFilterMenuOpen)

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <div className="static" ref={dropdownRef}>
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
        }   border bg-dark-light-dark border-white/25 transition-all delay-75 absolute left-3  w-max origin-top-right rounded-md  shadow-lg focus:outline-none max-h-max overflow-y-visible overflow-x-visible`}
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
