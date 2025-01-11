import { Switch } from "@mantine/core"
import React, { useState } from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import bgImg from "../../../canvas/assets/canvas-bg.png"
import InputProgress from "../../../../shared/components/InputProgress"
import ColorPickerDropdown from "../../../../shared/components/ColorPickerDropdown"
import Button from "../../../../shared/components/Button"

function ExportPanel({ handleClose }) {
  const [contrast, setContrast] = useState(false)
  const [intensity, setIntensity] = useState(0)
  const fileFormats = [
    {
      id: 1,
      name: "format 1",
    },
    {
      id: 2,
      name: "format 2",
    },
    {
      id: 3,
      name: "format 3",
    },
  ]
  const [selectedRoof, setSelectedRoof] = React.useState(fileFormats[0])
  const [color, setColor] = useState("#ff0000")
  const [pixel, setPixel] = useState(0)
  return (
    <>
      <div className="w-[calc(100vw-25px)] max-w-[1240px] text-gray px-3 flex flex-col gap-2">
        <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
          <button onClick={handleClose} className="text-xs">
            <IconArrow />
          </button>
          <h3 className="text-secondary w-full font-sm text-center font-semibold">
            Export
          </h3>
        </div>
        <div className="grid grid-cols-12 border-b pb-2 border-dark-light">
          <div
            className="col-span-12 md:col-span-4 max-h-80 pr-3 "
            style={{
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
              <h3 className="text-secondary w-full font-sm text-center font-semibold">
                Filters
              </h3>
            </div>

            <div className="gap-2 flex flex-col justify-end border-b pb-2 border-dark-light">
              {/* Switch */}
              <div className="flex justify-end  gap-2 pt-2">
                <h4 className=" text-sm text-end">Contrast</h4>
                <Switch
                  color="orange"
                  className=""
                  checked={contrast}
                  onChange={() => setContrast(!contrast)}
                />
              </div>
              {/* Input Progress */}
              <div className="flex justify-end gap-2">
                <h4 className="text-sm text-end ">Intensity</h4>
                <InputProgress
                  className="max-w-32"
                  range={intensity}
                  setRange={setIntensity}
                />
              </div>
            </div>
            <div className="gap-2 flex flex-col justify-end border-b pb-2 border-dark-light">
              {/* Switch */}
              <div className="flex justify-end  gap-2 pt-2">
                <h4 className=" text-sm text-end">Contrast</h4>
                <Switch
                  color="orange"
                  className=""
                  checked={contrast}
                  onChange={() => setContrast(!contrast)}
                />
              </div>
              {/* Input Progress */}
              <div className="flex justify-end gap-2">
                <h4 className="text-sm text-end ">Intensity</h4>
                <InputProgress
                  className="max-w-32"
                  range={intensity}
                  setRange={setIntensity}
                />
              </div>
              {/* Color */}
              <div className="flex justify-end gap-2">
                <h4 className="text-sm text-end ">Color</h4>
                <ColorPickerDropdown color={color} setColor={setColor} />
              </div>
            </div>
            <div className="gap-2 flex flex-col justify-end border-b pb-2 border-dark-light">
              {/* Switch */}
              <div className="flex justify-end  gap-2 pt-2">
                <h4 className=" text-sm text-end">Black and White</h4>
                <Switch color="orange" className="" />
              </div>
            </div>
            <div className="gap-2 flex flex-col justify-end border-b pb-2 border-dark-light">
              {/* Switch */}
              <div className="flex justify-end  gap-2 pt-2">
                <h4 className=" text-sm text-end">Brightness</h4>
                <Switch color="orange" className="" />
              </div>
            </div>
            <div className="gap-2 flex flex-col justify-end border-b pb-2 border-dark-light">
              {/* Switch */}
              <div className="flex justify-end  gap-2 pt-2">
                <h4 className=" text-sm text-end">Sharpness</h4>
                <Switch color="orange" className="" />
              </div>
            </div>
            <div className="gap-2 flex flex-col justify-end border-b pb-2 border-dark-light">
              {/* Switch */}
              <div className="flex justify-end  gap-2 pt-2">
                <h4 className=" text-sm text-end">Blur</h4>
                <Switch color="orange" className="" />
              </div>
            </div>
            <div className="gap-2 flex flex-col justify-end border-b pb-2 border-dark-light">
              {/* Switch */}
              <div className="flex justify-end  gap-2 pt-2">
                <h4 className=" text-sm text-end">Noise</h4>
                <Switch color="orange" className="" />
              </div>
              {/* Input Progress */}
              <div className="flex justify-end gap-2">
                <h4 className="text-sm text-end ">Intensity</h4>
                <InputProgress
                  className="max-w-32"
                  range={intensity}
                  setRange={setIntensity}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="h-80 flex justify-center">
              <img
                src={bgImg}
                className="object-fill max-w-[80%]  rounded-lg overflow-hidden h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col py-2">
          <div className=" flex flex-wrap justify-center gap-10">
            {/* Input Progress */}
            {/* Roofs */}
            <div className="flex justify-end gap-2">
              <h4 className="text-sm">File format</h4>
              <div className="relative w-32 flex items-center justify-center bg-dark rounded-lg p-[0.2px]">
                <button
                  onClick={() => {
                    const index = fileFormats.findIndex(
                      (roof) => roof.id === selectedRoof.id
                    )
                    setSelectedRoof(
                      fileFormats[
                        (index - 1 + fileFormats.length) % fileFormats.length
                      ]
                    )
                  }}
                  className="absolute top-0 left-0 h-full pl-2 flex items-center justify-center rounded-l-lg"
                >
                  <IconArrow className="rotate-180" />
                </button>
                <button
                  onClick={() => {
                    const index = fileFormats.findIndex(
                      (roof) => roof.id === selectedRoof.id
                    )
                    setSelectedRoof(
                      fileFormats[(index + 1) % fileFormats.length]
                    )
                  }}
                  className="absolute top-0 right-0 h-full pr-2 flex items-center justify-center rounded-l-lg"
                >
                  <IconArrow className="" />
                </button>
                <h4 className="text-sm text-center truncate">
                  {selectedRoof.name}
                </h4>
              </div>
            </div>
            <div className="flex gap-3">
              <h4 className="text-sm text-end min-w-20 text-nowrap">
                Pixels per tile/inch
              </h4>
              <InputProgress
                className="max-w-32 w-32 min-w-32"
                range={pixel}
                setRange={setPixel}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3  md:gap-0 justify-end">
            <h2 className="text-center mr-auto ml-auto pl-0 md:pl-[120px]">
              Print/File size: 40’’ x 36’’ / 101,6cm x 91,4cm / 5600 x 5040px
            </h2>
            <Button onClick={(e) => {}}>Download</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExportPanel
