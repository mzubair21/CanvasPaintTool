import React, { useState } from "react"
import AnimateHeight from "react-animate-height"
import IconDropdown from "../../../../assets/Icons/IconDropdown"
import IconLocked from "../../../../assets/Icons/IconLocked"
import IconUnlocked from "../../../../assets/Icons/IconUnlocked"
import IconEyeOpen from "../../../../assets/Icons/IconEyeOpen"
import IconEyeClosed from "../../../../assets/Icons/IconEyeClosed"
import LayerItem from "./LayerItem"

export interface ILayerGroup {
  title: string
  image: string
  isOverlaped: boolean
  isLocked: boolean
  isVisible: boolean
  active: boolean
  items?: ILayerItem[]
  group?: ILayerGroup[]
}

export interface ILayerItem {
  title: string
  image: string
  isOverlaped: boolean
  isLocked: boolean
  isVisible: boolean
  active: boolean
}

export interface ILayerItemDropdownProps {
  title: string
  isLocked: boolean
  isVisible: boolean
  items?: ILayerItem[]
  group?: ILayerGroup[]
  handleLayerItemClick: (event: React.MouseEvent) => void
}

function LayerItemDropdown({
  items,
  group,
  handleLayerItemClick,
  title,
  isLocked,
  isVisible,
}: ILayerItemDropdownProps) {
  const [active, setActive] = useState(false)

  return (
    <div className="pl-1 rounded-md bg-dark-light/30">
      <button
        type="button"
        className={`${active ? "active" : ""}  group w-full`}
      >
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
