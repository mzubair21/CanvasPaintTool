import React from "react"

function IconArrowCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9.5" stroke="white" stroke-opacity="0.6" />
      <path
        d="M12.3536 10.3536C12.5488 10.1583 12.5488 9.84171 12.3536 9.64645L9.17157 6.46447C8.97631 6.2692 8.65973 6.2692 8.46447 6.46447C8.2692 6.65973 8.2692 6.97631 8.46447 7.17157L11.2929 10L8.46447 12.8284C8.2692 13.0237 8.2692 13.3403 8.46447 13.5355C8.65973 13.7308 8.97631 13.7308 9.17157 13.5355L12.3536 10.3536ZM11 10.5H12V9.5H11V10.5Z"
        fill="white"
        fill-opacity="0.6"
      />
    </svg>
  )
}

export default IconArrowCircle
