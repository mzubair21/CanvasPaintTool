import React from "react"
import Navbar from "./Navbar"

interface IDefaultLayoutProps {
  children: React.ReactNode
}
function DefaultLayout(props: IDefaultLayoutProps) {
  const { children } = props
  return (
    <div className="w-full ">
      <Navbar />
      {children}
    </div>
  )
}

export default DefaultLayout
