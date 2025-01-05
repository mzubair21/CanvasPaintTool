import React, { useMemo, useState } from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import ColorPickerDropdown from "../../../../shared/components/ColorPickerDropdown"
import InputProgress from "../../../../shared/components/InputProgress"
import { Switch } from "@mantine/core"
import text1Img from "../../assets/text1.png"
import text2Img from "../../assets/text2.png"
import text3Img from "../../assets/text3.png"
import text4Img from "../../assets/text4.png"
import text5Img from "../../assets/text5.png"
import text6Img from "../../assets/text6.png"
import text7Img from "../../assets/text7.png"
import text8Img from "../../assets/text8.png"

function TextPanel({ handleClose }: { handleClose: () => void }) {
  const roofs = [
    { id: 1, name: "Flat Roof" },
    { id: 2, name: "Gable Roof" },
    { id: 3, name: "Hip Roof" },
    { id: 4, name: "Shed Roof" },
  ]
  const [selectedRoof, setSelectedRoof] = useState(roofs[0])
  const [roofColor, setRoofColor] = useState("#000000")

  const [scale, setScale] = React.useState(0)
  const [brightness, setBrightness] = React.useState(0)

  const [strokeColor, setStrokeColor] = useState("#000000")
  const [opacity, setOpacity] = useState(0)
  const [shadowColor, setShadowColor] = useState("#000000")

  const textTypeData = useMemo(() => {
    return [
      {
        id: 1,
        name: "Text 1",
        img: text1Img,
      },
      {
        id: 2,
        name: "Text 2",
        img: text2Img,
      },
      {
        id: 3,
        name: "Text 3",
        img: text3Img,
      },
      {
        id: 4,
        name: "Text 4",
        img: text4Img,
      },
      {
        id: 5,
        name: "Text 5",
        img: text5Img,
      },
      {
        id: 6,
        name: "Text 6",
        img: text6Img,
      },
      {
        id: 7,
        name: "Text 7",
        img: text7Img,
      },
      {
        id: 8,
        name: "Text 8",
        img: text8Img,
      },
    ]
  }, [])

  return (
    <div className="w-64 text-gray px-3 flex flex-col gap-2">
      <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
        <button onClick={handleClose} className="text-xs">
          <IconArrow />
        </button>
        <h3 className="text-secondary w-full font-sm text-center font-semibold">
          Text Tool
        </h3>
      </div>
      <div className="border-dark-light border- flex gap-2  flex-col">
        {/* Roofs */}
        <div className="grid  grid-cols-12 gap-2 ">
          <h4 className="text-sm col-span-4 text-end">Roofs</h4>
          <div className="relative col-span-8 flex items-center justify-center bg-dark rounded-lg p-[0.2px]">
            <button
              onClick={() => {
                const index = roofs.findIndex(
                  (roof) => roof.id === selectedRoof.id
                )
                setSelectedRoof(
                  roofs[(index - 1 + roofs.length) % roofs.length]
                )
              }}
              className="absolute top-0 left-0 h-full pl-2 flex items-center justify-center rounded-l-lg"
            >
              <IconArrow className="rotate-180" />
            </button>
            <button
              onClick={() => {
                const index = roofs.findIndex(
                  (roof) => roof.id === selectedRoof.id
                )
                setSelectedRoof(roofs[(index + 1) % roofs.length])
              }}
              className="absolute top-0 right-0 h-full pr-2 flex items-center justify-center rounded-l-lg"
            >
              <IconArrow className="" />
            </button>

            <h4 className="text-sm text-center truncate">
              {selectedRoof.name}
            </h4>
            <ColorPickerDropdown
              className="!absolute top-0 mr-5 right-0"
              color={roofColor}
              setColor={setRoofColor}
            />
          </div>
        </div>
        {/* Scale */}

        <div className="grid grid-cols-12 gap-2">
          <h4 className="text-sm text-end col-span-4">Scale</h4>
          <InputProgress
            className="col-span-8"
            range={scale}
            setRange={setScale}
          />
        </div>

        {/* Brightness*/}
        <div className="grid grid-cols-12 gap-2">
          <h4 className="text-sm text-end col-span-4">Brightness</h4>
          <InputProgress
            className="col-span-8"
            range={brightness}
            setRange={setBrightness}
          />
        </div>
        {/* Stroke */}
        <div className="grid grid-cols-12 gap-2">
          <h4 className=" text-sm text-end col-span-4">Stroke</h4>
          <div className="flex gap-2 col-span-8">
            <Switch color="orange" className="" />
            <ColorPickerDropdown
              color={strokeColor}
              setColor={setStrokeColor}
            />
          </div>
        </div>
        {/* Opacity */}
        <div className="grid grid-cols-12 gap-2">
          <h4 className="text-sm text-end col-span-4">Opacity</h4>
          <InputProgress
            className="col-span-8"
            range={opacity}
            setRange={setOpacity}
          />
        </div>
        {/* Shadow */}
        <div className="grid grid-cols-12 gap-2">
          <h4 className=" text-sm text-end col-span-4">Shadow</h4>
          <div className="flex gap-2 col-span-8">
            <Switch color="orange" className="" />
            <ColorPickerDropdown
              color={shadowColor}
              setColor={setShadowColor}
            />
          </div>
        </div>
        {/* Opacity */}
        <div className="grid grid-cols-12 gap-2">
          <h4 className="text-sm text-end col-span-4">Opacity</h4>
          <InputProgress
            className="col-span-8"
            range={opacity}
            setRange={setOpacity}
          />
        </div>

        {/* Text Types */}
        <div className="flex flex-col gap-2  border-t py-2 pb-3 border-dark-light">
          <div className="grid grid-cols-4 gap-2 px-6 mt-1">
            {textTypeData.map((textType) => (
              <button key={textType.id} className="">
                <img
                  className="w-24 aspect-square p-2 bg-dark  object-cover rounded-lg"
                  src={textType.img}
                  alt={textType.name}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextPanel
