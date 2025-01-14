import React from "react"
import IconArrowCircle from "../../../../assets/Icons/IconArrowCircle"

function LibraryCollection({ images, title, logo }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        {logo ? logo : ""}
        <h3 className="text-secondary text-xs font-semibold my-2">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-28 h-28  md:w-32 md:h-32 bg-dark-light-dark rounded-lg flex items-center justify-center"
          >
            {image.images.length == 1 ? (
              <img
                className="rounded-lg object-cover w-full h-full"
                src={image.images && image.images[0]}
                alt="paint"
              />
            ) : (
              <div className="relative w-28 h-28  md:w-32 md:h-32">
                {image.images.map((img, index) => {
                  return <Component key={index} index={index} img={img} />
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LibraryCollection

const Component = ({ index, img }) => {
  if (index > 3) return
  return (
    <>
      {" "}
      {index == 0 && (
        <button
          style={{
            zIndex: 10,
          }}
          className="absolute bottom-[5px] right-[5px] w-5 h-5"
        >
          <IconArrowCircle />
        </button>
      )}
      <img
        key={index}
        className={`rounded-lg absolute left-0 top-0 border border-gray/30 object-cover w-full h-full`}
        style={{
          opacity: 1 - index * 0.1,
          zIndex: 5 - index,
          transformOrigin: "top left",
          transform: `translate(${index * 2}px, ${index * 2}px)`,
        }}
        src={img}
      />
    </>
  )
}
