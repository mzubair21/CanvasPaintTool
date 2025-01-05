import React from "react"
import IconArrowWhite from "../../assets/Icons/IconArrowWhite"

function InputProgress({
  range,
  setRange,
  increment,
  decrement,
  className,
}: {
  range: number
  setRange: (range: number) => void
  increment?: () => void
  decrement?: () => void
  className?: string
}) {
  return (
    <div
      className={` ${className} relative w-full flex items-center justify-center bg-dark rounded-lg p-[0.2px]`}
      onClick={(e) => {
        e.stopPropagation()
        // if (increment || decrement) return
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
          className="z-10 absolute top-0 left-0 h-full pl-2 flex items-center justify-center rounded-l-lg"
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
          className="absolute z-10 top-0 right-0 h-full pr-2 flex items-center justify-center rounded-l-lg"
        >
          <IconArrowWhite className="" />
        </button>
      )}
      <div
        className="absolute bg-dark-light h-full left-0 rounded-md"
        style={{ width: `${range}%` }}
      ></div>
      <h4 className="text-sm text-center absolute pointer-events-none">
        {range}
      </h4>
    </div>
  )
}

export default InputProgress
