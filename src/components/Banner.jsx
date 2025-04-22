import React from 'react';
import bannerImg from '../assets/ban.png';

const Banner = () => {
  return (
    <div className="bg-[#f9f5ef] py-8 px-4 flex flex-col lg:flex-row items-center justify-center gap-6 text-right">
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full max-w-sm object-contain"
      />
      <div className="flex flex-col max-w-lg">
        <h2 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4">
          لَكِ يَا صَفْوَةُ الصَّفْوَة
        </h2>
        <p className="text-gray-800 leading-loose text-lg">
          ابدأ رحلتك العلمية مع أكاديمية الصفوة عبر الإنترنت، وتعلّم أصول العلوم الشرعية واللغة العربية من خلال برامج منهجية يقدمها نخبة من العلماء والمتخصصين، أينما كنت وفي الوقت الذي يناسبك.
        </p>
      </div>
    </div>
  );
};

export default Banner;
