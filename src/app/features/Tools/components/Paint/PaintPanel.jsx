import React from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import { Switch } from "@mantine/core"
import IconRestore from "../../../../assets/Icons/IconRestore"
import IconTag from "../../../../assets/Icons/IconTag"
import paintToolImg from "../../assets/painttool.png"
import InputProgress from "../../../../shared/components/InputProgress"
import brush1Img from "../../assets/brush1.png"
import brush2Img from "../../assets/brush2.png"
import brush3Img from "../../assets/brush3.png"
import brush4Img from "../../assets/brush4.png"
import paintAxis from "../../assets/paintAxis.png"
import ColorPickerDropdown from "../../../../shared/components/ColorPickerDropdown"
import LibraryButtonPanel from "../Library/LibraryButtonPanel"
import NewLayerButton from "../Library/NewLayerButton"

function PaintPanel({ handleClose }) {
  const [scale, setScale] = React.useState(0)
  const [brightness, setBrightness] = React.useState(0)
  const [brushSize, setBrushSize] = React.useState(0)
  const [opacity, setopacity] = React.useState(0)

  const [isStroke, setIsStroke] = React.useState(false)
  const [strokeColor, setStrokeColor] = React.useState("#000000")
  const [isShadow, setIsShadow] = React.useState(false)
  const [shadowColor, setShadowColor] = React.useState("#000000")

  return (
    <div className="w-64 text-gray px-3 flex flex-col gap-2">
      <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
        <button onClick={handleClose} className="text-xs">
          <IconArrow />
        </button>
        <h3 className="text-secondary w-full font-sm text-center font-semibold">
          Paint Tool
        </h3>
      </div>
      <div className="border-dark-light border-b pb-2">
        <div className="flex flex-col">
          <LibraryButtonPanel />
        </div>
      </div>
      <div className="p-0  overflow-hidden relative gap-2 rounded-lg bg-dark flex items-center justify-center">
        <button className="absolute top-0 left-0 m-2">
          <IconRestore />
        </button>
        <button className="absolute top-0 right-0 m-2">
          <IconTag />
        </button>
        <div className="required:">
          <img
            className="w-full h-32 object-cover aspect-video"
            src={paintToolImg}
            alt="Move Tool"
          />
          <img
            className=" absolute w-[80%] h-[80%] object-scale-down top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
            src={paintAxis}
            alt="Move Tool"
          />
        </div>
      </div>

      <div className="border-dark-light border-b">
        <div className="flex flex-col gap-2 pb-4 border-dark-light border-b">
          {/* Scale */}
          <div className="grid grid-cols-12 gap-2">
            <h4 className="text-sm text-end col-span-5">Scale</h4>
            <InputProgress
              className="col-span-7"
              range={scale}
              setRange={setScale}
              increment={() => setScale(scale + 1)}
              decrement={() => setScale(scale - 1)}
            />
          </div>
          {/* Brightness*/}
          <div className="grid grid-cols-12 gap-2">
            <h4 className="text-sm text-end col-span-5">Brightness</h4>
            <InputProgress
              className="col-span-7"
              range={brightness}
              setRange={setBrightness}
            />
          </div>
        </div>
        <div className="flex flex-col items-center pr-3">
          <div className="p-2 gap-2  grid grid-cols-12">
            <h4 className=" text-sm text-end col-span-7">Stroke</h4>
            <div className="col-span-5 flex gap-2">
              <Switch
                color="orange"
                className=""
                checked={isStroke}
                onChange={() => setIsStroke(!isStroke)}
              />
              <ColorPickerDropdown
                color={strokeColor}
                setColor={setStrokeColor}
              />
            </div>
          </div>
          <div className="p-2 gap-2  grid grid-cols-12">
            <h4 className=" text-sm text-end col-span-7">Shadow</h4>
            <div className="col-span-5 flex gap-2">
              <Switch
                color="orange"
                className=""
                checked={isShadow}
                onChange={() => setIsShadow(!isShadow)}
              />
              <ColorPickerDropdown
                color={shadowColor}
                setColor={setShadowColor}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-4 border-dark-light border-b">
        <div className="grid grid-cols-12 gap-2">
          <h4 className="text-sm text-end col-span-5">Brush Size</h4>
          <InputProgress
            className="col-span-7"
            range={brushSize}
            setRange={setBrushSize}
          />
        </div>

        {/* Opacity*/}
        <div className="grid grid-cols-12 gap-2">
          <h4 className="text-sm text-end col-span-5">Opacity</h4>
          <InputProgress
            className="col-span-7"
            range={opacity}
            setRange={setopacity}
          />
        </div>

        {/* Brush Types */}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-4 gap-2 px-6 mt-1">
            <button className="">
              <img
                className="bg-dark p-[4px] object-cover rounded-lg"
                src={brush1Img}
                alt="Brush 1"
              />
            </button>
            <button className="">
              <img
                className="bg-secondary p-[4px] object-center object-scale-down rounded-lg"
                src={brush2Img}
                alt="Brush 2"
              />
            </button>
            <button className="">
              <img
                className="bg-secondary p-[4px] object-center object-scale-down rounded-lg"
                src={brush3Img}
                alt="Brush 3"
              />
            </button>
            <button className="">
              <img
                className="bg-secondary p-[4px] object-center object-scale-down rounded-lg"
                src={brush4Img}
                alt="Brush 4"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-4">
        <NewLayerButton />
      </div>
    </div>
  )
}

export default PaintPanel
