import React from "react"

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="disabled:pointer-events-none disabled:opacity-50 bg-dark-light hover:bg-secondary hover:text-white text-dark-gray rounded-lg p-2"
    >
      {children}
    </button>
  )
}

export default Button
