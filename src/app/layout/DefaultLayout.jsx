import React from "react"
import Navbar from "./Navbar"

function DefaultLayout(props) {
  const { children } = props
  return (
    <div className="w-full ">
      <Navbar />
      {children}
    </div>
  )
}

export default DefaultLayout
