import React from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import heartPng from "../../assets/heart.png"
import paintLibraryImg from "../../assets/library.png"
import LibraryMenuItem from "./LibraryMenuItem"
import LibraryMenuDropDownItem from "./LibraryMenuDropDownItem"
import LibraryCollection from "./LibraryCollection"

function NewLayerPanel({ handleClose }) {
  const collection = [
    {
      title: "Recent",
      images: [
        {
          images: [
            paintLibraryImg,
            paintLibraryImg,
            paintLibraryImg,
            paintLibraryImg,
          ],
        },
        { images: [paintLibraryImg] },
      ],
    },
    {
      title: "Recent",
      images: [
        { images: [paintLibraryImg] },
        {
          images: [
            paintLibraryImg,
            paintLibraryImg,
            paintLibraryImg,
            paintLibraryImg,
          ],
        },
        { images: [paintLibraryImg] },
      ],
    },
    {
      title: "Recent",
      images: [
        { images: [paintLibraryImg] },
        {
          images: [
            paintLibraryImg,
            paintLibraryImg,
            paintLibraryImg,
            paintLibraryImg,
          ],
        },
        { images: [paintLibraryImg] },
      ],
    },
  ]

  return (
    <>
      <div className=" bg-dark-light-dark w-[calc(100vw-25px)] max-w-[850px] text-gray px-3 flex flex-col gap-2">
        <div className="flex p-2 px-3 items-center border-b pb-2 border-dark-light">
          <button onClick={handleClose} className="text-xs">
            <IconArrow />
          </button>
          <h3 className="text-secondary w-full font-sm text-center font-semibold">
            Paint Library
          </h3>
        </div>
        <div className=" max-h-[60vh] overflow-y-auto flex gap-3 pb-2">
          <div className="w-52  h-80 flex flex-col">
            <LibraryMenuItem image={heartPng} title="Favorites" />
            <LibraryMenuDropDownItem
              title="Show More"
              items={[
                { image: heartPng, title: "Layer 1" },
                { image: heartPng, title: "Layer 2" },
                { image: heartPng, title: "Layer 3" },
              ]}
            />
          </div>
          <div className="w-full ">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 px-3 focus:outline-none focus:border bg-dark focus:border-dark-light rounded-lg"
            />
            <div className="flex flex-col gap-3 my-3">
              {collection.map((col, index) => (
                <LibraryCollection
                  key={index}
                  title={col.title}
                  images={col.images}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewLayerPanel
