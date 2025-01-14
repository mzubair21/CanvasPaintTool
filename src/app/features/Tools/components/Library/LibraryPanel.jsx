import React from "react"
import LibraryMenuItem from "./LibraryMenuItem"
import LibraryMenuDropDownItem from "./LibraryMenuDropDownItem"
import LibraryCollection from "./LibraryCollection"
//Assets
import IconArrow from "../../../../assets/Icons/IconArrow"
import heartPng from "../../assets/heart.png"
import paintImg from "../../assets/library.png"
import recentImg from "../../assets/recent.png"
import colorsImg from "../../assets/colors.png"
import battlePng from "../../assets/battle.png"
import treasureImg from "../../assets/treasure.png"
import jungleImg from "../../assets/jungle.png"
import fireImg from "../../assets/fire.png"
import forestImg from "../../assets/forest.png"
import pirateImg from "../../assets/pirate.png"
import specialImg from "../../assets/special.png"
import rockyImg from "../../assets/rocky.png"
import natureImg from "../../assets/nature.png"
import townImg from "../../assets/town.png"

function LibraryPanel({ handleClose }) {
  const collection = [
    {
      title: "Battle",
      logo: (
        <>
          <span>
            <img
              src={battlePng}
              alt="heart"
              className="w-5 h-5 bg-yellow-700/20 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [
        {
          images: [paintImg, paintImg, paintImg, paintImg],
        },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
      ],
    },
    {
      title: "Castle",
      logo: (
        <>
          <span>
            <img
              src={treasureImg}
              alt="heart"
              className="w-5 h-5 bg-yellow-500 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [
        { images: [paintImg] },
        {
          images: [paintImg, paintImg, paintImg, paintImg],
        },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
        {
          images: [paintImg, paintImg, paintImg, paintImg],
        },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
        { images: [paintImg] },
      ],
    },
    {
      title: "Farm",
      logo: (
        <>
          <span>
            <img
              src={jungleImg}
              alt="heart"
              className="w-5 h-5 bg-teal-800 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [{ images: [paintImg] }],
    },
    {
      title: "Fire",
      logo: (
        <>
          <span>
            <img
              src={fireImg}
              alt="heart"
              className="w-5 h-5 bg-teal-800 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [{ images: [paintImg] }],
    },
    {
      title: "Forest",
      logo: (
        <>
          <span>
            <img
              src={forestImg}
              alt="heart"
              className="w-5 h-5 bg-teal-800 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [{ images: [paintImg] }],
    },
    {
      title: "Pirate",
      logo: (
        <>
          <span>
            <img
              src={pirateImg}
              alt="heart"
              className="w-5 h-5 bg-teal-800 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [{ images: [paintImg] }],
    },
    {
      title: "Special",
      logo: (
        <>
          <span>
            <img
              src={specialImg}
              alt="heart"
              className="w-5 h-5 bg-teal-800 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [{ images: [paintImg] }],
    },
    {
      title: "Rocky Mountains",
      logo: (
        <>
          <span>
            <img
              src={rockyImg}
              alt="heart"
              className="w-5 h-5 bg-teal-800 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [{ images: [paintImg] }],
    },
    {
      title: "Nature",
      logo: (
        <>
          <span>
            <img
              src={natureImg}
              alt="heart"
              className="w-5 h-5 bg-teal-800 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [{ images: [paintImg] }],
    },
    {
      title: "Town",
      logo: (
        <>
          <span>
            <img
              src={townImg}
              alt="heart"
              className="w-5 h-5 bg-teal-800 p-[1px] rounded-sm object-scale-down object-center"
            />
          </span>
        </>
      ),
      images: [{ images: [paintImg] }],
    },
  ]

  return (
    <>
      <div className=" bg-dark-light-dark w-[calc(100vw-25px)] max-w-[80vw] text-gray px-3 flex flex-col gap-2">
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
            <LibraryMenuItem image={recentImg} title="Recent" />
            <LibraryMenuItem image={colorsImg} title="Colors" />
            <LibraryMenuDropDownItem
              image={recentImg}
              title="Style name 01"
              items={[
                { image: battlePng, title: "Battle" },
                { image: treasureImg, title: "Treasure" },
                { image: jungleImg, title: "Jungle" },
                { image: fireImg, title: "Fire" },
                { image: forestImg, title: "Forest" },
                { image: pirateImg, title: "Pirates" },
                { image: specialImg, title: "Special" },
                { image: rockyImg, title: "Rocky Mountains" },
                { image: natureImg, title: "Nature" },
                { image: townImg, title: "Town" },
              ]}
            />
            <LibraryMenuDropDownItem
              image={recentImg}
              title="Style name 02"
              items={[
                { image: battlePng, title: "Battle" },
                { image: treasureImg, title: "Treasure" },
                { image: jungleImg, title: "Jungle" },
                { image: fireImg, title: "Fire" },
                { image: forestImg, title: "Forest" },
                { image: pirateImg, title: "Pirates" },
                { image: specialImg, title: "Special" },
                { image: rockyImg, title: "Rocky Mountains" },
                { image: natureImg, title: "Nature" },
                { image: townImg, title: "Town" },
              ]}
            />
            <LibraryMenuDropDownItem
              image={recentImg}
              title="Style name 03"
              items={[
                { image: battlePng, title: "Battle" },
                { image: treasureImg, title: "Treasure" },
                { image: jungleImg, title: "Jungle" },
                { image: fireImg, title: "Fire" },
                { image: forestImg, title: "Forest" },
                { image: pirateImg, title: "Pirates" },
                { image: specialImg, title: "Special" },
                { image: rockyImg, title: "Rocky Mountains" },
                { image: natureImg, title: "Nature" },
                { image: townImg, title: "Town" },
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
