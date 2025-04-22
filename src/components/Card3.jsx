import React from 'react'

function Card3() {
    const steps = [
        { number: 1, title: "اختبار اللغة", text: "قم بالتسجيل واختر اللغة التي تفضلها الدورة", color: "bg-green-800" },
        { number: 2, title: "اختيار الوقت", text: "قم باختيار أوقات الحصص حسب الوقت المتاح لك", color: "bg-green-200 text-black" },
        { number: 3, title: "حصص ومراجعة", text: "حصص مسجلة ومراجعة كل نهاية شهر", color: "bg-green-800" },
        { number: 4, title: "قدم الاختبارات النهائية", text: "تقدم في البرنامج من خلال اجتياز الاختبارات التفاعلية", color: "bg-green-200 text-black" },
        { number: 5, title: "احصل على شهادة الإتمام", text: "احصل على شهادة التخرج عند إتمامك البرنامج بنجاح", color: "bg-green-800" },
      ];
      
        return (
          <div className="bg-[#F5F5E0] p-6 flex flex-col items-center font-sans bg-cover w-full ">
            <h2 className="text-2xl font-bold text-green-900 mb-6">مسارات المشاركة في دوراتنا</h2>
            <div className="flex flex-col gap-6 w-full max-w-4xl">
              {steps.map((step, index) => (
                <div key={index} className={`flex w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`flex items-center gap-4 w-[50%] rounded-full px-6 py-4 ${step.color}`}>
                    <div className="w-10 h-10 flex items-center justify-center bg-white text-green-900 font-bold rounded-full border border-green-700">
                      {step.number}
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{step.title}</div>
                      <div className="text-sm">{step.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

export default Card3;
