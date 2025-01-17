import React from "react"
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
}) {
  return (
    <div
      className={`${
        active && "bg-secondary"
      } flex items-center justify-between hover:bg-secondary cursor-pointer pr-2 rounded-md relative`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <div className="w-10 aspect-square h-full p-[2px] bg-dark rounded">
          <img
            className="w-full h-full object-scale-down"
            src={image}
            alt="bush"
          />
        </div>
        <span className="truncate max-w-[120px] font-normal text-dark-gray">
          {title}
        </span>
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
