import { useRef } from "react"
import Card from "./Card"

function Foreground() {
  const ref= useRef(null)
  return (
    <div  ref={ref} className="p-8 flex-wrap z-[3] h-full w-full fixed top-0 left-0 flex gap-4  ">

      <Card refrence={ref}/>
      <Card refrence={ref}/>
      <Card refrence={ref}/>
    </div>
  )
}

export default Foreground