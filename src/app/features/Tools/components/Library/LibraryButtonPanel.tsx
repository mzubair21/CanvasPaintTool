import React, { useState } from "react"
import ExportPanel from "../Settings/ExportPanel"
import LibraryPanel from "./LibraryPanel"

function LibraryButtonPanel() {
  const [menuVisible, setMenuVisible] = React.useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
      <button
        className="bg-dark-light text-white rounded-lg p-2"
        onClick={toggleMenu}
      >
        Library
      </button>
      <div
        className={`${
          menuVisible
            ? "translate-x-0 opacity-100 z-10"
            : "-translate-x-[100%] opacity-0 z-[-1] pointer-events-none"
        } mb-8 transition-all delay-75 absolute rounded-md bg-dark-light-dark pt-1 shadow-sm border-dark-light border focus:outline-none`}
        style={{
          top: 20,
          left: -115,
        }}
        role="menu"
      >
        <LibraryPanel handleClose={() => setMenuVisible(false)} />
      </div>
    </>
  )
}

export default LibraryButtonPanel
