import React, { useEffect, useRef, useState } from "react"
import { Stack, Text, Button } from "@mantine/core"
import IconArrow from "../../../../assets/Icons/IconArrow"
import LayerSearch from "./LayerSearch"
import LayerItem from "./LayerItem"
import PerfectScrollbar from "react-perfect-scrollbar"
import LayerItemDropdown from "./LayerItemDropdown"

import bushImg from "../../assets/bush.png"
import mountainImg from "../../assets/mountain.png"

const LayersPanel = ({ handleClose }: { handleClose: () => void }) => {
  const layers: {
    title: string
    image: string
    isOverlaped: boolean
    isLocked: boolean
    isVisible: boolean
    active: boolean
    items?: {
      title: string
      image: string
      isOverlaped: boolean
      isLocked: boolean
      isVisible: boolean
      active: boolean
    }[]
  }[] = [
    {
      title: "Bush",
      image: bushImg,
      isLocked: false,
      isVisible: true,
      isOverlaped: true,
      active: false,
    },
    {
      title: "Tree",
      image: mountainImg,
      isLocked: true,
      isVisible: false,
      isOverlaped: false,
      active: false,
    },

    {
      title: "Grouped Assets",
      image: bushImg,
      isLocked: false,
      isVisible: true,
      isOverlaped: true,
      active: false,
      items: [
        {
          title: "Bush",
          image: bushImg,
          isLocked: false,
          isVisible: true,
          isOverlaped: true,
          active: false,
        },
        {
          title: "Tree",
          image: mountainImg,
          isLocked: true,
          isVisible: false,
          isOverlaped: false,
          active: false,
        },
      ],
    },
  ]

  const [menuVisible, setMenuVisible] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 })
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLayerItemClick = (event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect()
    setMenuPosition({ top: rect.top, left: rect.left + rect.width })
    setMenuVisible(true)
  }

  return (
    <div ref={dropdownRef} className="w-64 text-white">
      <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
        <button onClick={handleClose} className="text-xs">
          <IconArrow />
        </button>
        <h3 className="text-secondary w-full font-sm text-center font-semibold">
          Layers
        </h3>
      </div>
      <PerfectScrollbar className="max-h-[calc(80vh-100px)] overflow-auto">
        <div className="flex p-2 px-3 flex-col gap-2 mt-2">
          <LayerSearch />

          {layers.map((layer, index) =>
            layer.items ? (
              <LayerItemDropdown
                key={index}
                title={layer.title}
                isLocked={layer.isLocked}
                isVisible={layer.isVisible}
                items={layer.items}
                handleLayerItemClick={handleLayerItemClick}
              />
            ) : (
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
            )
          )}
        </div>
      </PerfectScrollbar>
      <div
        className={`${
          menuVisible
            ? "translate-x-0 opacity-100 z-10"
            : "translate-x-[100%] opacity-0 z-[-1] pointer-events-none"
        } transition-all delay-75 fixed rounded-md bg-dark-light-dark pt-1 shadow-sm border-dark-light border focus:outline-none`}
        style={{ top: menuPosition.top - 70, left: -120 }}
        role="menu"
      >
        <ul>
          <li className="mx-[2px] px-2 border border-transparent hover:border rounded-lg hover:border-secondary hover:bg-gray-200 cursor-pointer">
            Favorite
          </li>
          <li className="mx-[2px] px-2 border border-transparent hover:border rounded-lg hover:border-secondary hover:bg-gray-200 cursor-pointer">
            Copy
          </li>
          <li className="mx-[2px] px-2 border border-transparent hover:border rounded-lg hover:border-secondary hover:bg-gray-200 cursor-pointer">
            Paste
          </li>
          <li className="mx-[2px] px-2 border border-transparent hover:border rounded-lg hover:border-secondary hover:bg-gray-200 cursor-pointer">
            Select alike
          </li>
          <li className="mx-[2px] px-2 border border-transparent hover:border rounded-lg hover:border-secondary hover:bg-gray-200 cursor-pointer">
            Back to front
          </li>
          <li className="mx-[2px] px-2 border border-transparent hover:border rounded-lg hover:border-secondary hover:bg-gray-200 cursor-pointer">
            Send to back
          </li>
          <li className="mx-[2px] px-2 border border-transparent hover:border rounded-lg hover:border-secondary hover:bg-gray-200 cursor-pointer">
            Merge
          </li>
          <li className="mx-[2px] px-2 border border-transparent hover:border rounded-lg hover:border-secondary hover:bg-gray-200 cursor-pointer">
            Group/UnGroup
          </li>
          <li className="mx-[2px] px-2 border border-transparent hover:border rounded-lg hover:border-secondary hover:bg-gray-200 cursor-pointer">
            Delete
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LayersPanel
