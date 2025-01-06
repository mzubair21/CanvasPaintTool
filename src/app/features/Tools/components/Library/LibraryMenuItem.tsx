import React from "react"

function LibraryMenuItem({ image, title }: { image: string; title: string }) {
  return (
    <button className="w-full flex items-start justify-start gap-2 hover:bg-secondary rounded-lg p-1">
      <div className="w-5 aspect-square relative">
        <img src={image} alt="heart" />
      </div>
      <h3 className="text-sm">{title}</h3>
    </button>
  )
}

export default LibraryMenuItem
