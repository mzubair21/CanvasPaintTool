import React, { useState } from "react"
import AnimateHeight from "react-animate-height"
import IconDropdown from "../../../../assets/Icons/IconDropdown"
import IconLocked from "../../../../assets/Icons/IconLocked"
import IconUnlocked from "../../../../assets/Icons/IconUnlocked"
import IconEyeOpen from "../../../../assets/Icons/IconEyeOpen"
import IconEyeClosed from "../../../../assets/Icons/IconEyeClosed"
import LayerItem from "./LayerItem"

function LayerItemDropdown({
  items,
  group,
  handleLayerItemClick,
  title,
  isLocked,
  isVisible,
}) {
  const [active, setActive] = useState(false)

  return (
    <div className="pl-1 rounded-md bg-dark-light/30">
      <div className={`${active ? "active" : ""}  group w-full cursor-pointer`}>
        <div
          className="items-center flex gap-2 px-1"
          onClick={() => setActive(!active)}
        >
          <div className={!active ? " -rotate-90" : ""}>
            <IconDropdown />
          </div>
          <div className="flex w-full items-center justify-between p-2 font-normal text-dark-gray">
            <span>{title}</span>
            <div className="flex gap-2">
              <span className="text-xs cursor-pointer">
                {isLocked ? <IconLocked /> : <IconUnlocked />}
              </span>
              <span className="text-xs cursor-pointer">
                {isVisible ? <IconEyeOpen /> : <IconEyeClosed />}
              </span>
            </div>
          </div>
        </div>
      </div>

      <AnimateHeight duration={300} height={active ? "auto" : 0}>
        <ul className="sub-menu text-gray-500 flex flex-col gap-2">
          {items?.map((layer, index) => (
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
          <ul className="ml-1  rounded-md bg-dark-light/10 text-gray-500 flex flex-col gap-2">
            {group?.map((layer, index) => (
              <li key={index} className="group">
                <LayerItemDropdown
                  key={index}
                  title={layer.title}
                  isLocked={layer.isLocked}
                  isVisible={layer.isVisible}
                  items={layer.items}
                  group={layer.group}
                  handleLayerItemClick={handleLayerItemClick}
                />
              </li>
            ))}
          </ul>
        </ul>
      </AnimateHeight>
    </div>
  )
}

export default LayerItemDropdown
