import React from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import InputProgress from "../../../../shared/components/InputProgress"
import brush1Img from "../../assets/brush1.png"
import brush2Img from "../../assets/brush2.png"
import brush3Img from "../../assets/brush3.png"
import brush4Img from "../../assets/brush4.png"

function ErasePanel({ handleClose }: { handleClose: () => void }) {
  const [brushSize, setBrushSize] = React.useState(0)
  const [opacity, setopacity] = React.useState(0)

  return (
    <div className="w-64 text-gray px-3 flex flex-col gap-2">
      <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
        <button onClick={handleClose} className="text-xs">
          <IconArrow />
        </button>
        <h3 className="text-secondary w-full font-sm text-center font-semibold">
          Erase Tool
        </h3>
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
    </div>
  )
}

export default ErasePanel
