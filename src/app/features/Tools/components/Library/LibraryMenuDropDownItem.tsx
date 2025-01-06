import React, { useState } from "react"
import AnimateHeight from "react-animate-height"
import IconDropdown from "../../../../assets/Icons/IconDropdown"
import LibraryMenuItem from "./LibraryMenuItem"

function LibraryMenuDropDownItem({
  items,
  title,
  image,
}: {
  title: string
  image: string
  items?: {
    image: string
    title: string
  }[]
}) {
  const [active, setActive] = useState(false)

  return (
    <>
      <button
        type="button"
        className={`${
          active ? "active" : ""
        }  group w-full flex items-start justify-start gap-2 rounded-lg`}
      >
        <div
          className="items-center flex gap-2"
          onClick={() => setActive(!active)}
        >
          <div className={!active ? " -rotate-90" : ""}>
            <IconDropdown />
          </div>

          <div className="w-9 aspect-square relative">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt="heart"
            />
          </div>
          <div className="flex w-full items-center justify-between p-2">
            <span>{title}</span>
          </div>
        </div>
      </button>
      {items && items.length > 0 && (
        <AnimateHeight duration={300} height={active ? "auto" : 0}>
          <ul className=" ml-[0.8rem] sub-menu text-gray-500">
            {items.map((layer, index) => (
              <li key={index} className="group">
                <LibraryMenuItem
                  key={index}
                  title={layer.title}
                  image={layer.image}
                />
              </li>
            ))}
          </ul>
        </AnimateHeight>
      )}
    </>
  )
}

export default LibraryMenuDropDownItem
