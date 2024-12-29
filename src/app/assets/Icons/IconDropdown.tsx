import React from "react"

function IconDropdown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="9"
      height="8"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect
        x="9"
        y="8"
        width="9"
        height="8"
        transform="rotate(180 9 8)"
        fill="url(#pattern0_1_277)"
      />
      <defs>
        <pattern
          id="pattern0_1_277"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_277"
            transform="matrix(0.00608828 0 0 0.00684932 -0.00532736 0)"
          />
        </pattern>
        <image
          id="image0_1_277"
          width="166"
          height="146"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default IconDropdown
