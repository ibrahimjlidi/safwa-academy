
    import React from 'react'

    import { FaFacebook,FaInstagramSquare,FaWhatsapp } from "react-icons/fa";
    import { BsTwitterX } from "react-icons/bs";

 
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center">
            <img
              alt=""
              src="/images/Logo.png"
              className="h-24px w-24"
            />
        <p className="text-sm"> برنامجُ أكاديميةِ الصفوة برنامجٌ إلكترونيٌّ تفاعليٌّ، يهدفُ إلى تأصيلِ العلمِ الشرعيِّ واللغةِ العربيةِ للراغبين في تعلّمهما، ويوفّر لمتابعيه منصَّةً تعليمية متكاملة عبر الإنترنت،
             يقدم من خلالها نخبةٌ من أهلِ العلمِ شرحًا مبسطًا ومنهجيًا، يُناسب مختلف المستويات، أينما كنت.</p>
             </div>
        <div className="flex flex-col space-x-4 mt-2 justify-between p-12 md:mt-0">
          <a href="#" className="hover:text-gray-400">الرئيسية</a>
          <a href="#" className="hover:text-gray-400">من نحن ؟</a>
          <a href="#" className="hover:text-gray-400">هيئة التدريس</a>
          <a href="#" className="hover:text-gray-400">مكتبتنا </a>
          <a href="#" className="hover:text-gray-400">تواصل معنا </a>

        </div>
        </div>
        <div className="flex flex-row text-left justify-end left-3 items-stretch content-between">
          <FaFacebook className="m-1 w-6 h-6 text-blue-600"/>
          <FaInstagramSquare className="m-1 w-6 h-6 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"/>
          <FaWhatsapp className="m-1 w-6 h-6 text-green-500"/>
          <BsTwitterX className="m-1 w-6 h-6 text-black"/>

        </div>
      </div>
    </footer>
  
  );
}

export default Footer
