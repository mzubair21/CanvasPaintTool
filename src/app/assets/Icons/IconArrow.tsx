import React from "react"

function IconArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect
        x="6"
        y="10"
        width="6"
        height="10"
        transform="rotate(180 6 10)"
        fill="url(#pattern0_1_257)"
      />
      <defs>
        <pattern
          id="pattern0_1_257"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_257"
            transform="matrix(0.00952381 0 0 0.00571429 0 0.00857143)"
          />
        </pattern>
        <image
          id="image0_1_257"
          width="105"
          height="172"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAACsCAMAAABPeXIPAAAADFBMVEUAAAD///9FR0////++VAb0AAAABHRSTlP///8AQCqp9AAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAulJREFUeJy93MuWozAMBFDZPf//y8wCkoDxQ1JVuVdgFveQENCLLn/G/zvMzEqz+E/kmB2NVVXQY0siHYNtunQM98jSMd7nSi10X6FKb+i2xpR60G+VKPWh7zpPGkGfIzRpDF3HWNIMOo+SpDlkdrCkFWR2cKQ1ZJxzckEHQXJBjHNyQrjkhWDJDaGSHyqY5IfAcwpABZJCECLFIEAKQnkpCqWlMJSV4lBSSkA5KQOlpBSUkXJQQkpCcSkLhaU0FJXyUFACoJiEQCEJgiISBgUkEPJLKOSWYMgr4ZBTIkA+iQG5JArkqe8FYu/ZwfU5kaC1xIKWEg1aSTxoIRGhucSEphIVmklcaCKRobHEhoYSHRpJfGggCaC+pIC6kgTqSRqoI4mgt6SCXpIMaiUd1EhC6CkpoYckhe6SFrpJYugnqaGvJIc+kh66pA3QKe2ArO6CrO6CrO6CrO6CAjUWEPJLKCSYY4GlSFMLk2Cq+j9/kKqBrxqjauSqgqhqu6hqu6jz2ttBXVf5Burze9JT31+unPrdI9TU7W4kpu73PS31uMNKqee9XEk1Tw0h1T6fdNTrSSij3s9cFdV5uouoXhyhoboRi4Tqx0YKahCFCahRvMenhpElnRrHsGxqEi2TqVlczqWmGQCVmucaAWppLbKaQCa4olb5E49aZmo0ap0TsihH9kmiPHkuh3Jl1BTKl7szKGeVgEB56xE4pagb9SlJLaxLBSpUIBWphWFUqOoGUbH6HkIFK4kAFa1Z5qlwdTRNxeuwWSpR8U1SmdpyjkpVsVNUrl6eoZKV+QSV7QHEqXS3IUzl+xpRCuigBCmkVxOjoK5QiML6T+BsjoaC3/IDZ6gkFN4nBGfdBBSj9+miwLf8IhSnn7umsLf8AlTh9ajnVDFiN3xGFWNKE+o8Quzwj6hrnTlL0Kc+q9SphR71XePOR7yp3wp5EqOlbvvsmY8y3KNPl5TBtmCOpXS2zCT/Y6ackWT7lf0HiDqmYN3GcxIAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  )
}

export default IconArrow
