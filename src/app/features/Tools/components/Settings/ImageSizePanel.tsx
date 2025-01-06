import React, { useMemo } from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"

function ImageSizePanel({ handleClose }: { handleClose: () => void }) {
  const resolutions = useMemo(
    () => [
      {
        id: 1,
        name: "Resolution 1",
      },
      {
        id: 2,
        name: "Resolution 2",
      },
      {
        id: 3,
        name: "Resolution 3",
      },
    ],
    []
  )

  const [selectedResolution, setSelectedResolution] = React.useState(
    resolutions[0]
  )

  return (
    <div className="w-64 text-gray px-3 flex flex-col gap-2">
      <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
        <button onClick={handleClose} className="text-xs">
          <IconArrow />
        </button>
        <h3 className="text-secondary w-full font-sm text-center font-semibold">
          Image Size
        </h3>
      </div>

      <div className="flex flex-col gap-2 pb-4 border-dark-light border-b">
        {/* Roofs */}
        <div className="flex w-full justify-end gap-2">
          <h4 className="text-sm">Resolution</h4>
          <div className="relative w-[150px] flex items-center justify-center bg-dark rounded-lg p-[0.2px]">
            <button
              onClick={() => {
                const index = resolutions.findIndex(
                  (resolution) => resolution.id === selectedResolution.id
                )
                setSelectedResolution(
                  resolutions[
                    (index - 1 + resolutions.length) % resolutions.length
                  ]
                )
              }}
              className="absolute top-0 left-0 h-full pl-2 flex items-center justify-center rounded-l-lg"
            >
              <IconArrow className="rotate-180" />
            </button>
            <button
              onClick={() => {
                const index = resolutions.findIndex(
                  (resolution) => resolution.id === selectedResolution.id
                )
                setSelectedResolution(
                  resolutions[(index + 1) % resolutions.length]
                )
              }}
              className="absolute top-0 right-0 h-full pr-2 flex items-center justify-center rounded-l-lg"
            >
              <IconArrow className="" />
            </button>

            <h4 className="text-sm text-center truncate">
              {selectedResolution.name}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2  flex-col">
          <div className="flex flex-col items-center">
            <h2 className="text-sm text-danger">Attention!</h2>
            <p className="text-sm  text-center">
              High-resolution images with many elements may significantly impact
              performance.
            </p>
          </div>
          <button className="w-full  bg-dark-light hover:bg-secondary hover:text-white text-gray rounded-lg p-2">
            Resize
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageSizePanel
