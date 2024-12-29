import React, { useEffect, useRef, useState } from "react"
import IconLocked from "../../../../assets/Icons/IconLocked"
import IconUnlocked from "../../../../assets/Icons/IconUnlocked"
import IconEyeOpen from "../../../../assets/Icons/IconEyeOpen"
import IconEyeClosed from "../../../../assets/Icons/IconEyeClosed"
import IconOverlapActive from "../../../../assets/Icons/IconOverlapActive"
import IconOverlapInactive from "../../../../assets/Icons/IconOverlapInactive"

function LayerItem({
  title,
  image,
  isOverlaped,
  isLocked,
  isVisible,
  active,
  onClick,
}: {
  title: string
  image: string
  isOverlaped: boolean
  isLocked: boolean
  isVisible: boolean
  active: boolean
  onClick: (event: React.MouseEvent) => void
}) {
  return (
    <div
      className={`${
        active && "bg-secondary"
      } flex items-center justify-between hover:bg-secondary cursor-pointer p-2 rounded-md relative`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <div className="w-10 aspect-auto bg-dark rounded">
          <img
            className="w-full h-full object-cover mx-[2px]"
            src={image}
            alt="bush"
          />
        </div>
        <span className="truncate max-w-[120px]">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-xs">
          {isOverlaped ? <IconOverlapActive /> : <IconOverlapInactive />}
        </button>
        <button className="text-xs">
          {isLocked ? <IconLocked /> : <IconUnlocked />}
        </button>
        <button className="text-xs">
          {isVisible ? <IconEyeOpen /> : <IconEyeClosed />}
        </button>
      </div>
    </div>
  )
}

export default LayerItem
