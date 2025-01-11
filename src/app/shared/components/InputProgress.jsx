import React from "react"
import IconArrowWhite from "../../assets/Icons/IconArrowWhite"

function InputProgress({ range, setRange, increment, decrement, className }) {
  return (
    <div
      className={` ${className} relative w-full flex items-center justify-center bg-dark rounded-lg p-[0.2px]`}
      onClick={(e) => {
        e.stopPropagation()
        // if (increment || decrement) return
        return
        const rect = e.currentTarget.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const newScale =
          Math.round((clickX / rect.width) * 100) == 99
            ? 100
            : Math.round((clickX / rect.width) * 100)
        setRange(newScale)
      }}
    >
      {decrement && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            if (range === 0) return
            decrement()
          }}
          className="z-[6] absolute top-0 left-0 h-full pl-2 flex items-center justify-center rounded-l-lg"
        >
          <IconArrowWhite className="rotate-180" />
        </button>
      )}
      {increment && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            if (range === 100) return
            increment()
          }}
          className="z-[6] absolute top-0 right-0 h-full pr-2 flex items-center justify-center rounded-l-lg"
        >
          <IconArrowWhite className="" />
        </button>
      )}
      <div
        className="z-5 absolute bg-dark-light h-full left-0 rounded-md"
        style={{ width: `${range}%` }}
      ></div>
      <input
        className="text-sm text-center absolute bg-transparent outline-none "
        value={range}
        onChange={(e) => {
          const value = Math.max(0, Math.min(100, Number(e.target.value)))
          if (!isNaN(value)) {
            setRange(value)
          }
        }}
      />
    </div>
  )
}

export default InputProgress
