import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
function Card1() {
  return (
     <div className="flex flex-col items-center" >
           <div className="flex flex-col justify-between items-center">
               <div flex flex-row >
               <MdArrowBackIosNew className="text-lime-800 text-5xl"/> 
               <h2 className="text-right text-lime-800 text-5xl">البرامج</h2>
               </div>
               <p className="text-center text-pretty">يوفّر برنامج أكاديمية الصفوة للمشاركين خمسة مجالات علميّة، تهدف إلى ترسيخ فهمٍ وسطيّ وصحيح للإسلام، قائمٍ على الدليل، ومُقدَّم بأدوات عصرية، وبأسلوب مبسّط وممتع، يراعي التدرّج في بناء المعرفة الشرعية. بالإضافة الى بعض العلوم العصرية </p>
   
           </div>
   <div className="flex flex-auto">
   <img
     className="h-36 w-32 object-contain"
     src="/images/qoren.png"
   />
         <img
     className="h-36 w-32 object-contain"
     src="/images/sira.png"
   />
         <img
     className="h-36 w-32 object-contain"
     src="/images/arabic.png"
   />
         <img
     className="h-36 w-32 object-contain"
     src="/images/langue.png"
   />
         <img
     className="h-36 w-32 object-contain"
     src="/images/it.png"
   />
   </div>
       </div>
  )
}

export default Card1
