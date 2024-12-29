import React from "react"

function IconLayersMenu({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect width="21" height="19" fill="url(#pattern0_1_253)" />
      <defs>
        <pattern
          id="pattern0_1_253"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_253"
            transform="matrix(0.0034965 0 0 0.00386456 0 0.00340449)"
          />
        </pattern>
        <image
          id="image0_1_253"
          width="286"
          height="257"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default IconLayersMenu
