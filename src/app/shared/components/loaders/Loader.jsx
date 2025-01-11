import React, { useEffect, useState } from "react"

function Loader(props) {
  const { show } = props
  const [showLoader, setShowLoader] = useState(false)
  useEffect(() => {
    if (show == true) {
      setShowLoader(true)
      return
    } else if (show == false) {
      const screenLoader = document.getElementsByClassName("screen_loader")
      if (screenLoader?.length) {
        screenLoader[0].classList.add("animate__fadeOut")
        setTimeout(() => {
          setShowLoader(false)
        }, 1000)
      }
    }
  }, [show])
  return (
    <>
      {/* screen loader */}
      {showLoader && (
        <div className="screen_loader  fixed inset-0 bg-black/45 dark:bg-[#060818] z-[60] grid place-content-center animate__animated">
          <div className="animate__animated animate__infinite animate__flash ">
            <img
              className="animate w-20 aspect-square"
              src="/assets/react.svg"
              alt="loader"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Loader
