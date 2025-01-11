import React from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import heartPng from "../../assets/heart.png"
import paintLibraryImg from "../../assets/library.png"
import LibraryMenuItem from "./LibraryMenuItem"
import LibraryMenuDropDownItem from "./LibraryMenuDropDownItem"
import LibraryCollection from "./LibraryCollection"

function LibraryPanel({ handleClose }) {
  const collection = [
    {
      title: "Recent",
      logo: (
        <>
          <span>
            <img
              src={heartPng}
              alt="heart"
              className="w-5 h-5 bg-secondary p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
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
      logo: (
        <>
          <span>
            <img
              src={heartPng}
              alt="heart"
              className="w-5 h-5 bg-yellow-500 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
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
      logo: (
        <>
          <span>
            <img
              src={heartPng}
              alt="heart"
              className="w-5 h-5 bg-teal-800 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
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
              image={heartPng}
              title="Recent"
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
                  logo={col.logo}
                  images={col.images}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" flex gap-3 flex-col py-2  border-t pb-2 border-dark-light">
          <div className="flex flex-col md:flex-row gap-3  md:gap-0 justify-end">
            <button
              onClick={(e) => {}}
              className="bg-dark-light px-8 hover:bg-secondary hover:text-white text-gray rounded-lg p-2"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LibraryPanel
