import { useRef, useEffect } from "react"
import { fabric } from "fabric"
import backgroundImage from "./assets/canvas-bg.png"

const CanvasArea = () => {
  const canvasRef = useRef(null)
  const parentRef = useRef(null)

  useEffect(() => {
    const updateCanvasSize = (canvas) => {
      const parent = parentRef.current?.parentElement
      console.log(parent)
      const width = parent ? parent.clientWidth : window.innerWidth
      const height = parent ? parent.clientHeight : window.innerHeight
      canvas.setWidth(width)
      canvas.setHeight(height)
      canvas.setBackgroundColor("#111", canvas.renderAll.bind(canvas))

      // Update background image scaling
      fabric.Image.fromURL(backgroundImage, (img) => {
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          scaleX: img && img.width ? width / img.width : 1,
          scaleY: img && img.height ? height / img.height : 1,
        })
      })
    }

    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "#111", // Default background color
    })

    updateCanvasSize(canvas)

    // Example objects
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 50,
      height: 50,
    })
    canvas.add(rect)

    // Enable zooming
    canvas.on("mouse:wheel", (opt) => {
      const delta = opt.e.deltaY
      let zoom = canvas.getZoom()
      zoom = zoom - delta / 200
      zoom = Math.min(Math.max(zoom, 0.5), 2) // Restrict zoom levels
      canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom)
      opt.e.preventDefault()
      opt.e.stopPropagation()
    })

    window.addEventListener("resize", () => updateCanvasSize(canvas))

    return () => {
      window.removeEventListener("resize", () => updateCanvasSize(canvas))
      canvas.dispose()
    }
  }, [])

  return (
    <div ref={parentRef} className="w-full h-screen bg-white">
      <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />
    </div>
  )
}

export default CanvasArea
