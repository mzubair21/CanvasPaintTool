import React, { useState } from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import AnimateHeight from "react-animate-height"
import IconDropdown from "../../../../assets/Icons/IconDropdown"
import IconLocked from "../../../../assets/Icons/IconLocked"
import IconUnlocked from "../../../../assets/Icons/IconUnlocked"
import IconEyeOpen from "../../../../assets/Icons/IconEyeOpen"
import IconEyeClosed from "../../../../assets/Icons/IconEyeClosed"
import LayerItem from "./LayerItem"

function LayerItemDropdown({
  items,
  handleLayerItemClick,
  title,
  isLocked,
  isVisible,
}: {
  title: string
  isLocked: boolean
  isVisible: boolean
  items: {
    image: string
    isOverlaped: boolean
    title: string
    isLocked: boolean
    isVisible: boolean
    active: boolean
  }[]
  handleLayerItemClick: (event: React.MouseEvent) => void
}) {
  const [active, setActive] = useState(false)

  return (
    <div className="bg-dark-light rounded ">
      <button
        type="button"
        className={`${active ? "active" : ""}  group w-full`}
      >
        <div
          className="items-center flex gap-2"
          onClick={() => setActive(!active)}
        >
          <div className={!active ? " -rotate-90" : ""}>
            <IconDropdown />
          </div>
          <div className="flex w-full items-center justify-between p-2">
            <span>{title}</span>
            <div className="flex gap-2">
              <button className="text-xs">
                {isLocked ? <IconLocked /> : <IconUnlocked />}
              </button>
              <button className="text-xs">
                {isVisible ? <IconEyeOpen /> : <IconEyeClosed />}
              </button>
            </div>
          </div>
        </div>
      </button>

      <AnimateHeight duration={300} height={active ? "auto" : 0}>
        <ul className="sub-menu text-gray-500">
          {items.map((layer, index) => (
            <li key={index} className="group">
              <LayerItem
                key={index}
                onClick={handleLayerItemClick}
                title={layer.title}
                image={layer.image}
                isLocked={layer.isLocked}
                isVisible={layer.isVisible}
                isOverlaped={layer.isOverlaped}
                active={layer.active}
              />
            </li>
          ))}
        </ul>
      </AnimateHeight>
    </div>
  )
}

export default LayerItemDropdown
