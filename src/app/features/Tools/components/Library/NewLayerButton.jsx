import React from "react"
import Button from "../../../../shared/components/Button"
import NewLayerPanel from "./NewLayerPanel"

function NewLayerButton() {
  const [menuVisible, setMenuVisible] = React.useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
      <Button onClick={toggleMenu}>New Paint Layer</Button>
      <div
        className={`${
          menuVisible
            ? "translate-x-0 opacity-100 z-10"
            : "-translate-x-[100%] opacity-0 z-[-1] pointer-events-none"
        } mb-8 transition-all delay-75 absolute rounded-md bg-dark-light-dark pt-1 shadow-sm border-dark-light border focus:outline-none`}
        style={{
          top: 20,
          left: -5,
        }}
        role="menu"
      >
        <NewLayerPanel handleClose={() => setMenuVisible(false)} />
      </div>
    </>
  )
}

export default NewLayerButton
