import React from 'react'
import { FaUserFriends,FaRegIdBadge } from "react-icons/fa";
import { VscFileBinary } from "react-icons/vsc";


function Carrosel() {
  return (
    <div className="flex flex-row p-4 items-center gap-4 carousel carousel-center rounded-box w-full max-w-5xl">
        <div className='flex flex-row carousel-item w-24 h-16 bg-slate-400 rounded-full align-baseline content-start'>
            <p className="text-center text-slate-50">كافة المستويات</p>
        </div>
        <div className='flex flex-row items-center p-2 gap-2 carousel-item w-24 h-16 bg-slate-400 rounded-full align-baseline content-start'>
            <VscFileBinary className=" w-7 h-10 white"/>
            <p className="text-center text-slate-50">عبر الانترنات </p>
        </div>
        <div className='flex flex-row items-center gap-2 carousel-item w-24 h-16 bg-slate-400 rounded-full align-baseline content-start'>
           <FaUserFriends className=" w-7 h-10 white"/>
            <p className="text-center text-slate-50">رجال و نساء  </p>
        </div>
        <div className='flex flex-row items-center gap-2 carousel-item w-24 h-16 bg-slate-400 rounded-full align-baseline content-start'>
            <FaRegIdBadge className="text-white w-7 h-10 "/>
            <p className="text-center text-slate-50">شهادات معتمدة  </p>
        </div>
      
    </div>
  )
}

export default Carrosel
