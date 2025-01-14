import React from "react"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

const Tooltip = ({ children, content }) => {
  return (
    <Tippy content={content} arrow>
      <span>{children}</span>
    </Tippy>
  )
}

export default Tooltip
