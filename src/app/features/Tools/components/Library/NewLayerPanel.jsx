import React from "react"
import IconArrow from "../../../../assets/Icons/IconArrow"
import LibraryMenuItem from "./LibraryMenuItem"
import LibraryMenuDropDownItem from "./LibraryMenuDropDownItem"
import LibraryCollection from "./LibraryCollection"
//Assets
import heartPng from "../../assets/heart.png"
import blackImg from "../../assets/black.png"
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

function NewLayerPanel({ handleClose }) {
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
          images: [blackImg, blackImg, blackImg, blackImg],
        },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
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
        { images: [blackImg] },
        {
          images: [blackImg, blackImg, blackImg, blackImg],
        },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
        {
          images: [blackImg, blackImg, blackImg, blackImg],
        },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
        { images: [blackImg] },
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
      images: [{ images: [blackImg] }],
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
      images: [{ images: [blackImg] }],
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
      images: [{ images: [blackImg] }],
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
      images: [{ images: [blackImg] }],
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
      images: [{ images: [blackImg] }],
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
      images: [{ images: [blackImg] }],
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
      images: [{ images: [blackImg] }],
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
      images: [{ images: [blackImg] }],
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
            <LibraryMenuItem image={colorsImg} title="Custom" />
            <LibraryMenuItem image={recentImg} title="Recent" />
            <LibraryMenuItem image={battlePng} title="Battle" />
            <LibraryMenuItem image={treasureImg} title="Castle" />
            <LibraryMenuItem image={jungleImg} title="Farm" />
            <LibraryMenuItem image={fireImg} title="Fire" />
            <LibraryMenuItem image={forestImg} title="Forest" />
            <LibraryMenuItem image={pirateImg} title="Pirate" />
            <LibraryMenuItem image={specialImg} title="Special" />
            <LibraryMenuItem image={rockyImg} title="Rocky Mountains" />
            <LibraryMenuItem image={natureImg} title="Nature" />
            <LibraryMenuItem image={townImg} title="Town" />
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
            <div className="flex flex-col gap-3 mb-3">
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
