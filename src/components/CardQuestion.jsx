import React from 'react'
import { useState } from 'react';
function CardQuestion() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div dir="rtl" className="bg-[#F1EDC7] min-h-screen p-4">
      <h2 className="text-green-800 font-bold text-lg mb-4">⬅️ أسئلة شائعة</h2>

      <div className="space-y-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-gray-300 px-4 py-2 rounded-md focus:outline-none"
        >
          <span className="text-right font-medium">ما هي مدة الدورات؟</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* الجواب */}
        {isOpen && (
          <div className="bg-gray-200 rounded-md px-4 py-2 text-right font-medium">
            كل دورة و مدتها
          </div>
        )}
      </div>
      <div className="space-y-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-gray-300 px-4 py-2 rounded-md focus:outline-none"
        >
          <span className="text-right font-medium">هل يمكنني التسجيل في البرنامج إذا لم أتحدث اللغة العربية؟ </span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* الجواب */}
        {isOpen && (
          <div className="bg-gray-200 rounded-md px-4 py-2 text-right font-medium">
نعم، البرنامج متاح بعدة لغات بما في ذلك اللغة العربية والإنجليزية (و سيتم إطلاق الفرنسية والإسبانية قريباً). يمكنك اختيار اللغة التي تفضلها خلال عملية التسجيل          </div>
        )}
      </div>
      <div className="space-y-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-gray-300 px-4 py-2 rounded-md focus:outline-none"
        >
          <span className="text-right font-medium">هل يمكنني التسجيل في البرنامج في أي وقت أم يجب أن أنتظر بداية دورة تسجيل جديدة؟</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* الجواب */}
        {isOpen && (
          <div className="bg-gray-200 rounded-md px-4 py-2 text-right font-medium">
يمكن التسجيل في البرنامج فقط في فترات إتاحة التسجيل التي يعلنها البرنامج. يتم فتح التسجيل في البرنامج لفترة محدّدة في نهاية كل دورة من البرنامج.          </div>
        )}
      </div>
      <div className="space-y-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-gray-300 px-4 py-2 rounded-md focus:outline-none"
        >
          <span className="text-right font-medium"> ??????</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* الجواب */}
        {isOpen && (
          <div className="bg-gray-200 rounded-md px-4 py-2 text-right font-medium">
§!!!!!!!!!          </div>
        )}
      </div>
    </div>
  );

}

export default CardQuestion
