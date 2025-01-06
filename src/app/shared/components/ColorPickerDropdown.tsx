import { Checkbox, ColorPicker, Stack, Text } from "@mantine/core"
import React, { useEffect, useRef, useState } from "react"
import IconArrow from "../../assets/Icons/IconArrow"

function ColorPickerDropdown({
  color,
  setColor,
  className,
}: {
  color: string
  setColor: (color: string) => void
  className?: string
}) {
  const [isFilterMenuOpen, setPickerMenuOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const togglePickerMenu = () => setPickerMenuOpen(!isFilterMenuOpen)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setPickerMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative ${className} `} ref={dropdownRef}>
      <button
        className={` ${
          isFilterMenuOpen ? " border-secondary border-[1px] " : "border-none"
        }  rounded-md flex items-center justify-between border  gap-3`}
        id={`${Math.random()}-menu-button`}
        aria-expanded={isFilterMenuOpen}
        aria-haspopup="true"
        onClick={togglePickerMenu}
      >
        <span
          className="rounded-md"
          style={{
            background: color,
            width: "20px",
            height: "20px",
          }}
        ></span>
      </button>
      <div
        className={`${
          isFilterMenuOpen
            ? "translate-y-2 opacity-100 z-50"
            : "-translate-y-2 opacity-0  hidden z-50"
        } border border-gray/60 transition-all delay-75 absolute left-0 w-max origin-top-right rounded-md bg-dark-light-dark pt-1 shadow-lg focus:outline-none`}
        role="menu"
      >
        <div className="p-2 pt-2">
          <div className="flex p- pt-0 px-3 items-center border-b pb-2 border-dark-light">
            <button
              onClick={() => {
                setPickerMenuOpen(false)
              }}
              className="text-xs"
            >
              <IconArrow />
            </button>
            <h3 className="text-secondary w-full font-sm text-center font-semibold">
              Color
            </h3>
          </div>
          <Stack align="center" className="pt-3">
            <ColorPicker format="hex" value={color} onChange={setColor} />
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full -mt-2 p-2 text-gray/60 bg-dark rounded-md"
            />
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default ColorPickerDropdown
