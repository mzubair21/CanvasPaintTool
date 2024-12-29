import React from "react"

interface IconBurgerMenuProps {
  className?: string
}

const IconBurgerMenu: React.FC<IconBurgerMenuProps> = ({ className }) => (
  <svg
    className={className}
    width="17"
    height="15"
    viewBox="0 0 17 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      y="0.0285645"
      width="17"
      height="14.1143"
      fill="url(#pattern0_1_245)"
    />
    <defs>
      <pattern
        id="pattern0_1_245"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_1_245"
          transform="matrix(0.00427965 0 0 0.00515464 -0.0477952 0)"
        />
      </pattern>
      <image
        id="image0_1_245"
        width="256"
        height="194"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export default IconBurgerMenu
