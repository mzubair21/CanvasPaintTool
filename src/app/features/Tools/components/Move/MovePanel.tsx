import React from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import { Checkbox, Switch } from "@mantine/core"
import IconRestore from "../../../../assets/Icons/IconRestore"
import IconTag from "../../../../assets/Icons/IconTag"
import hutImg from "../../assets/hut.png"
import InputProgress from "../../../../shared/components/InputProgress"
import ColorPickerDropdown from "../../../../shared/components/ColorPickerDropdown"
import Button from "../../../../shared/components/Button"

function MovePanel({ handleClose }: { handleClose: () => void }) {
  const roofs = [
    {
      id: 1,
      name: "Roof 1",
    },
    {
      id: 2,
      name: "Roof 2",
    },
    {
      id: 3,
      name: "Roof 3",
    },
  ]
  const facades = [
    {
      id: 1,
      name: "Facades 1",
    },
    {
      id: 2,
      name: "Facades 2",
    },
    {
      id: 3,
      name: "Facades 3",
    },
  ]

  const huts = [
    {
      id: 1,
      roof: "Roof 1",
      facade: "Facades 1",
      image: hutImg,
      name: "Hut 1",
    },
    {
      id: 2,
      roof: "Roof 2",
      facade: "Facades 2",
      image: hutImg,
      name: "Hut 2",
    },
    {
      id: 3,
      roof: "Roof 3",
      facade: "Facades 3",
      image: hutImg,
      name: "Hut 3",
    },
  ]

  const [roofColor, setRoofColor] = React.useState("#000000")
  const [facadeColor, setFacadeColor] = React.useState("#000000")

  const [selectedRoof, setSelectedRoof] = React.useState(roofs[0])
  const [selectedFacade, setSelectedFacade] = React.useState(facades[0])
  const [selectedHut, setSelectedHut] = React.useState(
    huts.find(
      (hut) =>
        hut.roof === selectedRoof.name && hut.facade === selectedFacade.name
    ) || huts[0]
  )

  const [scale, setScale] = React.useState(1)
  const [brightness, setBrightness] = React.useState(1)

  // React.useEffect(() => {
  //   const hut = huts.find(
  //     (hut) =>
  //       hut.roof === selectedRoof.name && hut.facade === selectedFacade.name
  //   )
  //   if (hut) {
  //     setSelectedHut(hut)
  //   }
  // }, [selectedRoof, selectedFacade])

  // React.useEffect(() => {
  //   if (selectedHut.roof !== selectedRoof.name) {
  //     const newRoof = roofs.find((roof) => roof.name === selectedHut.roof)
  //     if (newRoof) {
  //       setSelectedRoof(newRoof)
  //     }
  //   }
  //   if (selectedHut.facade !== selectedFacade.name) {
  //     const newFacade = facades.find(
  //       (facade) => facade.name === selectedHut.facade
  //     )
  //     if (newFacade) {
  //       setSelectedFacade(newFacade)
  //     }
  //   }
  // }, [selectedHut])

  return (
    <div className="w-64 text-gray px-3 flex flex-col gap-2">
      <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
        <button onClick={handleClose} className="text-xs">
          <IconArrow />
        </button>
        <h3 className="text-secondary w-full font-sm text-center font-semibold">
          Move Tool
        </h3>
      </div>
      <div className="border-dark-light border-b">
        <div className="p-2 flex gap-2">
          <h4 className=" text-sm">Objects/Texts</h4>
          <Switch color="orange" className="" />
        </div>
        <div className="p-2 flex gap-2 ml-8">
          <h4 className=" text-sm">Textures</h4>
          <Switch color="orange" className="" />
        </div>
      </div>
      <div className="p-2 relative gap-2 rounded-lg bg-dark flex items-center justify-center">
        <button className="absolute top-0 left-0 m-2">
          <IconRestore />
        </button>
        <button className="absolute top-0 right-0 m-2">
          <IconTag />
        </button>
        <img
          className="w-[150px] h-full object-scale-down"
          src={selectedHut.image}
          alt="Move Tool"
        />
      </div>
      <div className="">
        <div className="relative flex items-center justify-center bg-dark rounded-lg p-[0.2px]">
          <button
            onClick={() => {
              const index = huts.findIndex((hut) => hut.id === selectedHut.id)
              setSelectedHut(huts[(index - 1 + huts.length) % huts.length])
            }}
            className="absolute top-0 left-0 h-full pl-2 flex items-center justify-center rounded-l-lg"
          >
            <IconArrow className="rotate-180" />
          </button>
          <button
            onClick={() => {
              const index = huts.findIndex((hut) => hut.id === selectedHut.id)
              setSelectedHut(huts[(index + 1) % huts.length])
            }}
            className="absolute top-0 right-0 h-full pr-2 flex items-center justify-center rounded-l-lg"
          >
            <IconArrow className="" />
          </button>
          <h4 className="text-sm text-center truncate">{selectedHut.name}</h4>
        </div>
      </div>
      <div className="border-dark-light border-b">
        {/* Roofs */}
        <div className="flex w-full justify-end gap-2">
          <h4 className="text-sm">Roofs</h4>
          <div className="relative w-[150px] flex items-center justify-center bg-dark rounded-lg p-[0.2px]">
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
        {/* Facades */}
        <div className="flex w-full justify-end gap-2 mt-2">
          <h4 className="text-sm">Facades</h4>
          <div className="relative w-[150px] flex items-center justify-center bg-dark rounded-lg p-[0.2px]">
            <button
              onClick={() => {
                const index = facades.findIndex(
                  (facade) => facade.id === selectedFacade.id
                )
                setSelectedFacade(
                  facades[(index - 1 + facades.length) % facades.length]
                )
              }}
              className="absolute top-0 left-0 h-full pl-2 flex items-center justify-center rounded-l-lg"
            >
              <IconArrow className="rotate-180" />
            </button>
            <button
              onClick={() => {
                const index = facades.findIndex(
                  (facade) => facade.id === selectedFacade.id
                )
                setSelectedFacade(facades[(index + 1) % facades.length])
              }}
              className="absolute top-0 right-0 h-full pr-2 flex items-center justify-center rounded-l-lg"
            >
              <IconArrow className="" />
            </button>
            <h4 className="text-sm text-center truncate">
              {selectedFacade.name}
            </h4>
            <ColorPickerDropdown
              className="!absolute top-0 mr-5 right-0"
              color={facadeColor}
              setColor={setFacadeColor}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 py-2">
          {/* Scarecrow */}
          <div className="grid grid-cols-2 gap-2">
            <h4 className=" text-sm">Scarecrow</h4>
            <Switch color="orange" className="" />
          </div>
          {/* Smoke */}
          <div className="grid grid-cols-2 gap-2">
            <h4 className=" text-sm">Smoke</h4>
            <Switch color="orange" className="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-4">
        <Button>Flip</Button>
        {/* Scale */}

        <div className="grid grid-cols-2 gap-2">
          <h4 className="text-sm text-end">Scale</h4>
          <InputProgress range={scale} setRange={setScale} />
        </div>

        {/* Brightness*/}
        <div className="grid grid-cols-2 gap-2">
          <h4 className="text-sm text-end">Brightness</h4>
          <InputProgress range={brightness} setRange={setBrightness} />
        </div>
      </div>
    </div>
  )
}

export default MovePanel
