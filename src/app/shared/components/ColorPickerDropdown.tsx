import { Checkbox, ColorPicker, Stack, Text } from "@mantine/core"
import React, { useEffect, useRef, useState } from "react"

function ColorPickerDropdown({
  color,
  setColor,
}: {
  color: string
  setColor: (color: string) => void
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
    <div className="relative" ref={dropdownRef}>
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
            ? "translate-y-2 opacity-100 z-10"
            : "-translate-y-2 opacity-0 z-[-1]"
        } transition-all delay-75 absolute left-0 w-max origin-top-right rounded-md bg-dark-light-dark pt-1 shadow-lg focus:outline-none`}
        role="menu"
      >
        <div className="p-2">
          <Stack align="center">
            <ColorPicker format="rgba" value={color} onChange={setColor} />
            <Text>{color}</Text>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default ColorPickerDropdown
