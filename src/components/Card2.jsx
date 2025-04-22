import React from 'react'

function Card2() {
  return (
    <div  className="bg-cover bg-center h-64 w-full justify-center flex flex-col ">

<div style={{backgroundImage:'url(../images/bghadith.jpg)'}} className="max-w-sm p-6  border  rounded-lg shadow-sm hover ">

<h5 class="flex  mb-2 text-2xl font-bold tracking-tight  text-center justify-center ">قال رسول الله <p className="text-xl">ﷺ</p></h5>
<h3 class="font-normal text-amber-700 text-center">مَن سلَكَ طريقًا يلتَمِسُ فيهِ علمًا ؛ سَهَّلَ اللَّهُ لَهُ بهِ طريقًا إلى الجنَّةِ</h3>
<p className="text-left">صحيح مسلم</p>  
</div>
</div>

  )
}

export default Card2
