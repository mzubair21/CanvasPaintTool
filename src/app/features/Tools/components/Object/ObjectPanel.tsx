import React from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import { Switch } from "@mantine/core"
import IconRestore from "../../../../assets/Icons/IconRestore"
import IconTag from "../../../../assets/Icons/IconTag"
import hutImg from "../../assets/hut.png"
import InputProgress from "../../../../shared/components/InputProgress"
import ObjectsSlider from "./ObjectsSlider"
import ColorPickerDropdown from "../../../../shared/components/ColorPickerDropdown"
import LibraryButtonPanel from "../Library/LibraryButtonPanel"
import Button from "../../../../shared/components/Button"
import IconArrowWhite from "../../../../assets/Icons/IconArrowWhite"

function ObjectPanel({ handleClose }: { handleClose: () => void }) {
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

  const [random, setRandom] = React.useState(true)

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

  const [scareCrowColor, setScareCrowColor] = React.useState("#000000")
  const [smokeColor, setSmokeColor] = React.useState("#000000")

  const [roofColor, setRoofColor] = React.useState("#000000")
  const [facadeColor, setFacadeColor] = React.useState("#000000")

  //   React.useEffect(() => {
  //     const hut = huts.find(
  //       (hut) =>
  //         hut.roof === selectedRoof.name && hut.facade === selectedFacade.name
  //     )
  //     if (hut) {
  //       setSelectedHut(hut)
  //     }
  //   }, [selectedRoof, selectedFacade])

  //   React.useEffect(() => {
  //     if (selectedHut.roof !== selectedRoof.name) {
  //       const newRoof = roofs.find((roof) => roof.name === selectedHut.roof)
  //       if (newRoof) {
  //         setSelectedRoof(newRoof)
  //       }
  //     }
  //     if (selectedHut.facade !== selectedFacade.name) {
  //       const newFacade = facades.find(
  //         (facade) => facade.name === selectedHut.facade
  //       )
  //       if (newFacade) {
  //         setSelectedFacade(newFacade)
  //       }
  //     }
  //   }, [selectedHut])

  return (
    <div className="w-64 text-gray px-3 flex flex-col gap-2">
      <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
        <button onClick={handleClose} className="text-xs">
          <IconArrow />
        </button>
        <h3 className="text-secondary w-full font-sm text-center font-semibold">
          Object Tool
        </h3>
      </div>
      <div className="border-dark-light border-b pb-2">
        <div className="flex flex-col">
          <LibraryButtonPanel />
        </div>
      </div>
      <div className="border-dark-light border-b pb-2">
        <div className="relative px-3">
          <ObjectsSlider />
          <button
            onClick={(e) => {
              e.preventDefault()
            }}
            className="absolute top-[30%] rotate-180 -translate-y-[50%] left-0 z-5"
          >
            <IconArrowWhite className="swiper-object-prev" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
            }}
            className="absolute top-[30%] -translate-y-[50%] z-5 right-0"
          >
            <IconArrowWhite className="swiper-object-next" />
          </button>
          <div className="grid grid-cols-12 gap-2 pt-2">
            <h4 className=" text-sm col-span-6 text-end">Random</h4>
            <Switch
              color="orange"
              className="col-span-6"
              checked={random}
              onChange={() => setRandom(!random)}
            />
          </div>
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
            <h4 className=" text-sm text-end">Scarecrow</h4>
            <div className="flex gap-2">
              <Switch color="orange" className="" />
              <ColorPickerDropdown
                color={scareCrowColor}
                setColor={setScareCrowColor}
              />
            </div>
          </div>
          {/* Smoke */}
          <div className="grid grid-cols-2 gap-2">
            <h4 className=" text-sm text-end">Smoke</h4>
            <div className="flex gap-2">
              <Switch color="orange" className="" />
              <ColorPickerDropdown
                color={smokeColor}
                setColor={setSmokeColor}
              />
            </div>
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

export default ObjectPanel
