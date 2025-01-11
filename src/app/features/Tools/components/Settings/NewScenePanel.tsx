import React, { useMemo } from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import Button from "../../../../shared/components/Button"

function NewScenePanel({ handleClose }: { handleClose: () => void }) {
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
    <div className="w-80 text-gray px-3 flex flex-col gap-2">
      <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
        <button onClick={handleClose} className="text-xs">
          <IconArrow />
        </button>
        <h3 className="text-secondary w-full font-sm text-center font-semibold">
          New Scene
        </h3>
      </div>

      <div className="flex flex-col gap-2 pb-4 border-dark-light border-b">
        {/* Roofs */}
        <div className="flex w-full justify-end gap-2">
          <h4 className="text-sm">Scene resolution</h4>
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

        {/* Roofs */}
        <div className="flex w-full gap-2">
          <h4 className="text-sm w-full">Grid size (width x height)</h4>
          <div className="flex gap-2 items-center">
            <input
              className=" bg-dark w-14 h-8 rounded-lg text-center focus:outline-none"
              placeholder=""
            />
            <span>x</span>
            <input
              className=" bg-dark w-14 h-8 rounded-lg text-center focus:outline-none"
              placeholder=""
            />
          </div>
        </div>

        <div className="flex items-center gap-2  flex-col">
          <div className="flex flex-col items-center">
            <h2 className="text-sm text-danger">Attention!</h2>
            <p className="text-sm  text-center">
              Quality scene resolution with many layers slows down performance.
              You can reduce the resolution later.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2  flex-col">
          <div className="flex flex-col items-center">
            <h2 className="text-sm text-danger">Attention!</h2>
            <p className="text-sm  text-center">
              Grid size exceeds the 10,000 limit. Please lower it to continue.
            </p>
          </div>
          <Button> Continue</Button>
        </div>
      </div>
    </div>
  )
}

export default NewScenePanel
