import { motion } from "framer-motion"
function Card({refrence}:any) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{ scale: 1.2 }} dragElastic={0.1} 
    className=" h-48 w-48 rounded  bg-blue-950 shadow-md shadow-blue-400  flex justify-end flex-col  overflow-hidden "
    >
<h2 className="text-wrap text-sm text-white overflow-x-visible w-full h-[60%] mx-2 mb-4">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aperiam corrupti veritatis, rerum modi nam unde odio molestiae delenit. </h2>
  <div className="w-[95%] h-8 bg-slate-900 mb-2 mx-auto rounded-lg text-white flex items-center justify-center ">
<p className="p-1 ">
DATE: 22-08-2024
</p>
  </div>
    </motion.div>
  )
}

export default Card