import React from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import InputProgress from "../../../../shared/components/InputProgress"
import brush1Img from "../../assets/brush1.png"
import brush2Img from "../../assets/brush2.png"
import brush3Img from "../../assets/brush3.png"
import brush4Img from "../../assets/brush4.png"

function SettingsPanel({ handleClose }: { handleClose: () => void }) {
  const [brushSize, setBrushSize] = React.useState(0)
  const [opacity, setopacity] = React.useState(0)

  return (
    <div className="w-64 text-gray px-3 flex flex-col gap-2">
      <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
        <button onClick={handleClose} className="text-xs">
          <IconArrow />
        </button>
        <h3 className="text-secondary w-full font-sm text-center font-semibold">
          Settings
        </h3>
      </div>

      <div className="flex flex-col gap-2 pb-4 border-dark-light border-b">
        <button className="bg-dark-light hover:bg-secondary text-white rounded-lg p-2">
          Save
        </button>
        <button className="bg-dark-light hover:bg-secondary text-white rounded-lg p-2">
          Export
        </button>
        <button className="bg-dark-light hover:bg-secondary text-white rounded-lg p-2">
          Image Size
        </button>
        <button className="bg-dark-light hover:bg-secondary text-white rounded-lg p-2">
          Share
        </button>
        <button className="bg-dark-light hover:bg-secondary text-white rounded-lg p-2">
          Close Editor
        </button>
      </div>
    </div>
  )
}

export default SettingsPanel
