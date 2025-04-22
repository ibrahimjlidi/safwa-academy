import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";

function Card() {
  return (
    <div className="flex flex-row items-center" >
        <div className="flex flex-col justify-between items-center">
            <div flex flex-row >
            <MdArrowBackIosNew className="text-lime-800 text-5xl"/> 
            <h2 className="text-right text-lime-800 text-5xl">عن برنامج أكاديمية الصفوة</h2>
            </div>
            <p className="text-center text-pretty">برنامجُ أكاديميةِ الصفوة برنامجٌ إلكترونيٌّ تفاعليٌّ، يهدفُ إلى تأصيلِ العلمِ الشرعيِّ واللغةِ العربيةِ للراغبين في تعلّمهما، ويوفّر لمتابعيه منصَّةً تعليمية متكاملة عبر الإنترنت، يقدم من خلالها نخبةٌ من أهلِ العلمِ شرحًا مبسطًا ومنهجيًا، يُناسب مختلف المستويات، أينما كنت.</p>

        </div>
        <img
  className="h-36 w-32 object-contain"
  src="/images/essafwa.png"
/>

    </div>
  )
}

export default Card
