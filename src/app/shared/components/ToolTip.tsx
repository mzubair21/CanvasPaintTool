import React, { FC } from "react"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

interface ITooltipProps {
  children: JSX.Element
  content: string
}

const Tooltip: FC<ITooltipProps> = ({ children, content }) => {
  return (
    <Tippy content={content} arrow>
      <span>{children}</span>
    </Tippy>
  )
}

export default Tooltip
